/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from "axios";

import type { ICreateUser } from "../types/User";
import { ERole } from "../types/User";

interface IErrorResponse {
  message: string;
  status: number;
}

// Enum para os status possíveis
enum EStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

class ApiService {
  private api: AxiosInstance;
  static instance: ApiService;
  private token: string = "";
  private requestInterceptorId?: number;

  private constructor() {
    this.api = Axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
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
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
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

  public async getUser(filters?: {
    status?: EStatus;
    role?: ERole;
    name?: string;
    email?: string;
    page?: number;
    size?: number;
  }) {
    try {
      // Constrói os parâmetros da query
      const queryParams = new URLSearchParams();

      if (filters?.status) {
        const status = filters.status.toUpperCase();
        if (Object.values(EStatus).includes(status as EStatus)) {
          queryParams.append("status", status);
        }
      }
      if (filters?.role) {
        const role = filters.role.toUpperCase();
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
      // Adiciona parâmetros de paginação
      if (filters?.page !== undefined) {
        queryParams.append("page", filters.page.toString());
      }
      if (filters?.size) {
        queryParams.append("size", filters.size.toString());
      }

      console.log("Parâmetros da busca:", Object.fromEntries(queryParams));

      const response = await this.api.get("/users", { params: queryParams });
      console.log("Resposta bruta da API:", response);

      // Verifica se a resposta tem a estrutura esperada
      if (response.data) {
        // Se a resposta for um array direto
        if (Array.isArray(response.data)) {
          console.log("Dados retornados (array):", response.data);
          return {
            users: response.data,
            totalPages: Math.ceil(response.data.length / 5),
            currentPage: 1,
            totalItems: response.data.length,
          };
        }
        // Se a resposta tiver a propriedade users
        else if (response.data.users && Array.isArray(response.data.users)) {
          console.log("Dados retornados (users):", response.data.users);
          return {
            users: response.data.users,
            totalPages:
              response.data.totalPages ||
              Math.ceil(response.data.totalItems / 5),
            currentPage: response.data.currentPage || 1,
            totalItems: response.data.totalItems || response.data.users.length,
          };
        }
        // Se a resposta tiver a propriedade content (comum em APIs paginadas)
        else if (
          response.data.content &&
          Array.isArray(response.data.content)
        ) {
          console.log("Dados retornados (content):", response.data.content);
          return {
            users: response.data.content,
            totalPages:
              response.data.totalPages ||
              Math.ceil(response.data.totalElements / 5),
            currentPage: response.data.currentPage || 1,
            totalItems:
              response.data.totalElements || response.data.content.length,
          };
        }
        // Se a resposta tiver a propriedade items
        else if (response.data.items && Array.isArray(response.data.items)) {
          console.log("Dados retornados (items):", response.data.items);
          return {
            users: response.data.items,
            totalPages:
              response.data.totalPages ||
              Math.ceil(response.data.totalItems / 5),
            currentPage: response.data.currentPage || 1,
            totalItems: response.data.totalItems || response.data.items.length,
          };
        }
        // Se a resposta tiver a propriedade data
        else if (response.data.data && Array.isArray(response.data.data)) {
          console.log("Dados retornados (data):", response.data.data);
          return {
            users: response.data.data,
            totalPages:
              response.data.totalPages ||
              Math.ceil(response.data.totalItems / 5),
            currentPage: response.data.currentPage || 1,
            totalItems: response.data.totalItems || response.data.data.length,
          };
        } else {
          console.warn("Formato de resposta inesperado:", response.data);
          return {
            users: [],
            totalPages: 1,
            currentPage: 1,
            totalItems: 0,
          };
        }
      } else {
        console.warn("Resposta da API sem dados:", response);
        return {
          users: [],
          totalPages: 1,
          currentPage: 1,
          totalItems: 0,
        };
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as AxiosError;
        console.error("Detalhes do erro:", {
          status: axiosError.response?.status,
          data: axiosError.response?.data,
          config: axiosError.config,
        });
      }
      throw this.getError(error as AxiosError);
    }
  }

  private getResponse<T>(response: AxiosResponse): T {
    return response.data;
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
