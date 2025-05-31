/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from "axios";

import type { ICreateUser } from "../types/User";
import { ERole, EStatus } from "../types/User";
import type { IBalance } from "../types/Belance";
import type { ICompany } from "../types/Compny";
import type { IExtract } from "../types/Extract";

interface IErrorResponse {
  message: string;
  status: number;
}

interface IApiResponse<T> {
  users: T[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
}

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
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Remove o interceptor anterior, se existir
    if (this.requestInterceptorId !== undefined) {
      this.api.interceptors.request.eject(this.requestInterceptorId);
    }

    // Adiciona um novo interceptor de requisição
    this.requestInterceptorId = this.api.interceptors.request.use(
      (config) => {
        // Evita o uso de localStorage no lado do servidor
        if (typeof window !== "undefined") {
          const token = localStorage.getItem("token");
          console.log("Token encontrado:", token ? "Sim" : "Não");
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        console.log("Configuração da requisição:", {
          url: config.url,
          method: config.method,
          headers: config.headers,
          params: config.params,
          baseURL: config.baseURL,
        });
        return config;
      },
      (error) => {
        console.error("Erro no interceptor de requisição:", error);
        return Promise.reject(error);
      }
    );

    // Adiciona interceptor de resposta
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("Erro na resposta da API:", {
          status: error.response?.status,
          data: error.response?.data,
          config: {
            url: error.config?.url,
            method: error.config?.method,
            headers: error.config?.headers,
            params: error.config?.params,
            baseURL: error.config?.baseURL,
          },
        });
        return Promise.reject(error);
      }
    );
  }

  public setToken(token: string) {
    this.token = `Bearer ${token}`;
    // Atualiza o interceptor com o novo token
    this.setupInterceptors();
  }

  public cleanToken() {
    this.token = "";
    // Remove o interceptor de requisição
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
      throw this.getError(error as AxiosError);
    }
  }

  public async newUser(data: ICreateUser) {
    try {
      const response = await this.api.post("/auth/signup/company", data);
      return this.getResponse(response);
    } catch (error) {
      throw this.getError(error as AxiosError);
    }
  }

  private buildQueryParams(filters?: {
    status?: EStatus;
    role?: ERole;
    name?: string;
    email?: string;
    page?: number;
    size?: number;
  }): URLSearchParams {
    const queryParams = new URLSearchParams();

    console.log("Construindo parâmetros da query com filtros:", filters);

    if (filters?.status) {
      const status = filters.status.toUpperCase();
      console.log("Status após toUpperCase:", status);
      if (Object.values(EStatus).includes(status as EStatus)) {
        queryParams.append("status", status);
      }
    }
    if (filters?.role) {
      const role = filters.role.toUpperCase();
      console.log("Role após toUpperCase:", role);
      if (Object.values(ERole).includes(role as ERole)) {
        queryParams.append("role", role);
      }
    }
    if (filters?.name && filters.name.trim() !== "") {
      queryParams.append("name", filters.name.trim());
    }
    if (filters?.email && filters.email.trim() !== "") {
      queryParams.append("email", filters.email.trim());
    }
    if (filters?.page !== undefined) {
      queryParams.append("page", filters.page.toString());
    }
    if (filters?.size) {
      queryParams.append("size", filters.size.toString());
    }

    console.log("Parâmetros finais da query:", Object.fromEntries(queryParams));
    return queryParams;
  }

  private parseApiResponse(response: AxiosResponse): IApiResponse<IUser> {
    if (!response.data) {
      return {
        users: [],
        totalPages: 1,
        currentPage: 1,
        totalItems: 0,
      };
    }

    // Se a resposta for um array direto
    if (Array.isArray(response.data)) {
      return {
        users: response.data,
        totalPages: Math.ceil(response.data.length / 5),
        currentPage: 1,
        totalItems: response.data.length,
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
        const currentPage = response.data.currentPage || 1;
        const totalPages =
          response.data.totalPages || Math.ceil(totalItems / 5);

        // Ajusta a página atual para começar em 1
        return {
          users: response.data[format.key],
          totalPages: totalPages,
          currentPage: currentPage,
          totalItems: totalItems,
        };
      }
    }

    // Se nenhum formato for encontrado
    console.warn("Formato de resposta não reconhecido:", response.data);
    return {
      users: [],
      totalPages: 1,
      currentPage: 1,
      totalItems: 0,
    };
  }

  public async getUser(filters?: {
    status?: EStatus;
    role?: ERole;
    name?: string;
    email?: string;
    page?: number;
    size?: number;
  }): Promise<IApiResponse<IUser>> {
    try {
      if (!process.env.NEXT_PUBLIC_API_HOST) {
        console.error("URL base da API não configurada");
        throw new Error("URL base da API não configurada");
      }

      console.log("URL base da API:", process.env.NEXT_PUBLIC_API_HOST);

      const queryParams = this.buildQueryParams(filters);
      const url = "/users";

      console.log("Fazendo requisição para:", {
        url,
        baseURL: process.env.NEXT_PUBLIC_API_HOST,
        params: Object.fromEntries(queryParams),
      });

      const response = await this.api.get(url, {
        params: queryParams,
        validateStatus: (status) => status < 500,
      });

      console.log("Resposta recebida:", {
        status: response.status,
        data: response.data,
      });

      return this.parseApiResponse(response);
    } catch (error) {
      console.error("Erro na requisição:", error);
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as AxiosError;
        console.error("Detalhes do erro:", {
          status: axiosError.response?.status,
          data: axiosError.response?.data,
          config: {
            url: axiosError.config?.url,
            method: axiosError.config?.method,
            headers: axiosError.config?.headers,
            params: axiosError.config?.params,
            baseURL: axiosError.config?.baseURL,
          },
        });
      }
      throw this.getError(error as AxiosError);
    }
  }

  private getResponse<T>(response: AxiosResponse): T {
    return response.data;
  }

  // Dentro da classe ApiService, adicione:
  async getUserById(id: number): Promise<IUser> {
    try {
      const response = await this.api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw this.getError(error as AxiosError);
    }
  }

  private getError(error: AxiosError<any>): IErrorResponse {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || "Erro desconhecido";
    return { message, status };
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
