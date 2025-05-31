import Axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from "axios";

import type {
  ICreateUser,
  User,
  IUserFilters,
  IPaginatedResponse,
} from "../types/User";
import { ERole, EStatus } from "../types/User";
import type { IBalance } from "../types/Belance";
import type { ICompany } from "../types/Compny";
import type { IExtract } from "../types/Extract";

interface IErrorResponse {
  message: string;
  status: number;
  code?: string;
}

/**
 * Interface que define a estrutura de resposta da API para listagem de usuários
 */
interface IApiResponse<T> {
  users: T[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
}

/**
 * Interface que define a estrutura de um usuário
 */
interface IUser {
  id: number;
  name: string;
  email: string;
  role: ERole;
  status: EStatus;
  Balance: IBalance;
  Company: ICompany;
  Extract: IExtract[];
  emailVerified?: Date | null;
  token: string;
  information?: string;
}

class ApiService {
  private api: AxiosInstance;
  static instance: ApiService;
  private token: string = "";
  private requestInterceptorId?: number;

  private constructor() {
    this.api = Axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 10000, // 10 segundos
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    if (this.requestInterceptorId !== undefined) {
      this.api.interceptors.request.eject(this.requestInterceptorId);
    }

    this.requestInterceptorId = this.api.interceptors.request.use(
      (config) => {
        if (typeof window !== "undefined") {
          const token = localStorage.getItem("token");
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => {
        console.error("Erro no interceptor de requisição:", error);
        return Promise.reject(this.handleError(error));
      }
    );

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("Erro na resposta da API:", error);
        return Promise.reject(this.handleError(error));
      }
    );
  }

  private handleError(error: AxiosError): IErrorResponse {
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data as any;
      const message = data?.message || "Erro na requisição";
      const code = data?.code;

      // Tratamento específico para erros de autenticação
      if (status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
        return {
          message: "Sessão expirada. Por favor, faça login novamente.",
          status,
          code,
        };
      }

      // Outros tratamentos de erro
      switch (status) {
        case 403:
          return {
            message: "Você não tem permissão para realizar esta ação.",
            status,
            code,
          };
        case 404:
          return { message: "Recurso não encontrado.", status, code };
        case 422:
          return {
            message: "Dados inválidos. Por favor, verifique os campos.",
            status,
            code,
          };
        default:
          return { message, status, code };
      }
    } else if (error.request) {
      return {
        message: "Servidor não respondeu. Tente novamente mais tarde.",
        status: 0,
      };
    } else {
      return { message: "Erro ao configurar a requisição.", status: 0 };
    }
  }

  public setToken(token: string) {
    this.token = `Bearer ${token}`;
    this.setupInterceptors();
  }

  public cleanToken() {
    this.token = "";
    if (this.requestInterceptorId !== undefined) {
      this.api.interceptors.request.eject(this.requestInterceptorId);
      this.requestInterceptorId = undefined;
    }
  }

  public async login(email: string, password: string) {
    try {
      const response = await this.api.post("/auth/login", { email, password });
      const { token } = response.data;
      if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
      }
      this.setToken(token);
      return response.data;
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  public async newUser(data: ICreateUser) {
    try {
      const response = await this.api.post("/auth/signup/company", data);
      return this.getResponse(response);
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  /**
   * Constrói os parâmetros de query para a requisição de usuários
   * @param filters Filtros a serem aplicados na busca
   * @returns URLSearchParams com os parâmetros formatados
   */
  private buildQueryParams(filters?: IUserFilters): URLSearchParams {
    const queryParams = new URLSearchParams();

    if (filters?.status) {
      queryParams.append("status", filters.status);
    }
    if (filters?.role) {
      queryParams.append("role", filters.role);
    }
    if (filters?.name?.trim()) {
      queryParams.append("name", filters.name.trim());
    }
    if (filters?.email?.trim()) {
      queryParams.append("email", filters.email.trim());
    }
    if (filters?.page) {
      queryParams.append("page", filters.page.toString());
    }
    if (filters?.size) {
      queryParams.append("size", filters.size.toString());
    }

    return queryParams;
  }

  /**
   * Processa a resposta da API para o formato padrão
   * @param response Resposta da API
   * @returns Dados processados no formato padrão
   */
  private parseApiResponse<T>(response: AxiosResponse): IPaginatedResponse<T> {
    if (!response.data) {
      return {
        data: [],
        totalPages: 1,
        currentPage: 1,
        totalItems: 0,
      };
    }

    // Se a resposta for um array direto
    if (Array.isArray(response.data)) {
      return {
        data: response.data,
        totalPages: Math.ceil(response.data.length / 5),
        currentPage: 1,
        totalItems: response.data.length,
      };
    }

    // Se a resposta vier dentro de data
    if (response.data.data && Array.isArray(response.data.data)) {
      return {
        data: response.data.data,
        totalPages:
          response.data.totalPages || Math.ceil(response.data.data.length / 5),
        currentPage: response.data.currentPage || 1,
        totalItems: response.data.totalItems || response.data.data.length,
      };
    }

    // Verifica diferentes formatos de resposta
    const responseFormats = [
      { key: "users", totalKey: "totalItems" },
      { key: "content", totalKey: "totalElements" },
      { key: "items", totalKey: "totalItems" },
      { key: "data", totalKey: "totalItems" },
    ];

    for (const format of responseFormats) {
      if (
        response.data[format.key] &&
        Array.isArray(response.data[format.key])
      ) {
        const totalItems =
          response.data[format.totalKey] || response.data[format.key].length;
        return {
          data: response.data[format.key],
          totalPages: response.data.totalPages || Math.ceil(totalItems / 5),
          currentPage: response.data.currentPage || 1,
          totalItems,
        };
      }
    }

    return {
      data: [],
      totalPages: 1,
      currentPage: 1,
      totalItems: 0,
    };
  }

  /**
   * Busca uma lista de usuários com filtros opcionais
   * @param filters Filtros para a busca
   * @returns Lista de usuários e informações de paginação
   */
  public async getUser(
    filters?: IUserFilters
  ): Promise<IPaginatedResponse<User>> {
    try {
      if (!process.env.NEXT_PUBLIC_API_HOST) {
        throw new Error("URL base da API não configurada");
      }

      const queryParams = this.buildQueryParams(filters);
      console.log(
        "URL da requisição:",
        `${process.env.NEXT_PUBLIC_API_HOST}/users`
      );
      console.log("Parâmetros da query:", queryParams.toString());

      const response = await this.api.get("/users", {
        params: queryParams,
        validateStatus: (status) => status < 500,
      });

      console.log("Resposta bruta da API:", response.data);

      const parsedResponse = this.parseApiResponse<User>(response);
      console.log("Resposta processada:", parsedResponse);

      return parsedResponse;
    } catch (error) {
      console.error("Erro na requisição getUser:", error);
      throw this.handleError(error as AxiosError);
    }
  }

  private getResponse<T>(response: AxiosResponse): T {
    return response.data;
  }

  /**
   * Busca um usuário específico pelo ID
   * @param id ID do usuário
   * @returns Dados do usuário
   */
  public async getUserById(id: number): Promise<User> {
    try {
      if (!id || isNaN(id)) {
        throw new Error("ID inválido");
      }

      const response = await this.api.get(`/users/${id}`);

      if (!response.data) {
        throw new Error("Usuário não encontrado");
      }

      return response.data;
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  public static getInstance() {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }
}

export default ApiService.getInstance();

// Função para simular a API usando db.json
export const getUsersFromDB = async (filters: {
  status?: string;
  role?: string;
  name?: string;
  email?: string;
  page: number;
  size: number;
}) => {
  // Simula um delay de rede
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Carrega os dados do db.json
  const response = await fetch("/db.json");
  const data = await response.json();
  let users = data.users;

  // Aplica os filtros
  if (filters.status) {
    users = users.filter(
      (user: { status: string }) => user.status === filters.status
    );
  }
  if (filters.role) {
    users = users.filter(
      (user: { role: string }) => user.role === filters.role
    );
  }
  if (filters.email) {
    users = users.filter((user: { email: string }) =>
      user.email.toLowerCase().includes(filters.email?.toLowerCase() || "")
    );
  }

  // Calcula a paginação
  const totalItems = users.length;
  const totalPages = Math.ceil(totalItems / filters.size);
  const startIndex = (filters.page - 1) * filters.size;
  const endIndex = startIndex + filters.size;
  const paginatedUsers = users.slice(startIndex, endIndex);

  return {
    users: paginatedUsers,
    totalPages,
    currentPage: filters.page,
    totalItems,
  };
};
