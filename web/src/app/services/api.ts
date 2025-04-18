/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from "axios";
import type { ILoginResponse } from "../types/SingInType";

interface IErrorResponse {
  message: string;
  status: number;
}

class ApiService {
  private api: AxiosInstance;
  static instance: ApiService;
  private token: string;

  constructor() {
    this.api = Axios.create({
      baseURL: "http://localhost:3001",
    });
    this.token = "";
    this.setupIntercepters();
  }

  setupIntercepters() {
    this.api.interceptors.request.use(
      (config) => {
        if (this.token) {
          const bearerToken = `Baerer ${this.token}`;
          config.headers.Authorization = bearerToken;
        }
        return config;
      },

      // se der algum erro na request rejeita a promessa
      (error) => Promise.reject(error)
    );
  }

  setToken(token: string) {
    this.token = token;
  }

  cleanToken() {
    this.token = "";
  }

  async getInfo() {
    this.api.get("");
  }

  async login(email: string, password: string) {
    const response = await this.api
      .post("/auth/login", { email, password })
      .then(this.getResponse<ILoginResponse>)
      .catch(this.getError);

    return response;
  }
  private getResponse<T>(response: AxiosResponse): T {
    return response.data;
  }
  private getError(error: AxiosError<any>): IErrorResponse {
    if (error.status === 401) {
      console.error(error.status);
    }

    return {
      message: "Credenciais inválidas",
      status: error.response?.status ?? 401, // Default to 500 if status is undefined
    };
  }

  static getInstance() {
    return (ApiService.instance ??= new ApiService());
  }
}

export default ApiService.getInstance();
