/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from "axios";
import type { ILoginResponse } from "../types/SingInType";
import type { ICreateUser } from "../types/User";

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
  async newUser(data: ICreateUser) {
    console.log("Estou enviando para o backend =>", data);

    const response = await this.api
      .post("/auth/signup/company", data)
      .then(this.getResponse)
      .catch(this.getError);

    console.log("Gravou no banco ", response);

    return response;
  }

  private getResponse<T>(response: AxiosResponse): T {
    return response.data;
  }
  private getError(error: AxiosError<any>): IErrorResponse {
    if (error.status === 401) {
      console.error(error.status);
    }
    if (error.status === 422) {
      return {
        message: error.response?.data?.message,
        status: error.status,
      };
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
