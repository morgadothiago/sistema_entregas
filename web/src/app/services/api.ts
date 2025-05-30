/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from "axios";

import type { ICreateUser } from "../types/User";

interface IErrorResponse {
  message: string;
  status: number;
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
    status?: string;
    role?: string;
    name?: string;
    email?: string;
  }) {
    try {
      const params = new URLSearchParams();
      if (filters?.status) params.append("status", filters.status);
      if (filters?.role) params.append("role", filters.role);
      if (filters?.name) params.append("name", filters.name);
      if (filters?.email) params.append("email", filters.email);

      const response = await this.api.get(`/users?${params.toString()}`);
      return this.getResponse(response);
    } catch (error) {
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
