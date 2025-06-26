/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from "axios";
import type { ILoginResponse } from "../types/SingInType";
import type {
  ICreateUser,
  IFilterUser,
  IUserPaginate,
  User,
} from "../types/User";
import type { VehicleType, VehicleTypePaginate } from "../types/VehicleType";
import { IPaginateResponse } from "../types/Paginate";
import { signOut } from "next-auth/react";

interface IErrorResponse {
  message: string;
  status: number;
}

class ApiService {
  private api: AxiosInstance;
  static instance: ApiService;
  static token: string = "";

  constructor() {
    this.api = Axios.create({
      baseURL: process.env.NEXT_PUBLIC_NEXTAUTH_API_HOST || "",
    });
  }

  setToken(token: string) {
    if (token) ApiService.token = `Bearer ${token}`;
  }

  cleanToken() {
    ApiService.token = "";
  }

  async getInfo() {
    this.api.get("");
  }

  async login(email: string, password: string) {
    return this.api
      .post("/auth/login", { email, password })
      .then(this.getResponse<ILoginResponse>)
      .catch(this.getError);
  }

  async newUser(data: ICreateUser): Promise<void | IErrorResponse> {
    const response = await this.api
      .post("/auth/signup/company", data)
      .then(this.getResponse<void>)
      .catch(this.getError);

    return response;
  }

  private getResponse<T>(response: AxiosResponse): T {
    return response.data;
  }
  private async getError(error: AxiosError<any>): Promise<IErrorResponse> {
    if (error.status === 422) {
      return {
        message: error.response?.data?.message || "Dados inválidos",
        status: error.status,
      };
    }
    if (error.status === 409) {
      return {
        message: error.response?.data?.message || "Conflito de dados",
        status: error.status,
      };
    }

    if (error.status === 401) {
      try {
        await signOut({ redirect: true, redirectTo: "/signin" });
      } catch (e) {
        console.error("Erro ao fazer signOut:", e);
        // Retornar erro 401 mesmo se o signOut falhar
        return {
          message: error.response?.data?.message || "Não autorizado",
          status: 401,
        };
      }
    }

    if (error.status === 500) {
      return {
        message: error.response?.data?.message || "Erro interno do servidor",
        status: 500,
      };
    }

    return {
      message: error.response?.data?.message || "Erro desconhecido",
      status: error.status || 500, // Default to 500 if status is undefined
    };
  }

  async getUsers(filters: IFilterUser, token: string) {
    console.log("token pre", token);
    // Garante que o token tem o formato correto
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`;

    return this.api
      .get("/users", {
        params: filters,
        headers: {
          authorization: authToken,
        },
      })
      .then(this.getResponse<IPaginateResponse<IUserPaginate>>)
      .catch(this.getError);
  }

  async getAllVehicleType(page: number = 1, limit: number = 10) {
    return this.api
      .get("/vehicle-types", {
        params: { page, limit },
      })
      .then(this.getResponse<IPaginateResponse<VehicleType>>)
      .catch(this.getError);
  }

  async getUser(id: string, token: string) {
    // Garante que o token tem o formato correto
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`;

    return this.api
      .get(`/users/${id}`, {
        headers: {
          authorization: authToken,
        },
      })
      .then(this.getResponse<User>)
      .catch(this.getError);
  }

  async deleteUser(id: string, token: string) {
    // Garante que o token tem o formato correto
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`;

    return this.api
      .delete(`/users/${id}`, {
        headers: {
          authorization: authToken,
        },
      })
      .then(this.getResponse<void>)
      .catch(this.getError);
  }

  async deleteVehicleType(type: string, token: string) {
    // Garante que o token tem o formato correto
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`;

    return this.api
      .delete(`/vehicle-types/${type}`, {
        headers: {
          authorization: authToken,
        },
      })
      .then(this.getResponse<void>)
      .catch(this.getError);
  }

  async updateVehicleType(type: string, data: any, token: string) {
    // Garante que o token tem o formato correto
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`;

    return this.api
      .patch(`/vehicle-types/${type}`, data, {
        headers: {
          authorization: authToken,
          "Content-Type": "application/json",
        },
      })
      .then(this.getResponse<void>)
      .catch(this.getError);
  }

  async createVehicleType(data: any, token: string) {
    // Garante que o token tem o formato correto
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`;

    return this.api
      .post("/vehicle-types", data, {
        headers: {
          authorization: authToken,
          "Content-Type": "application/json",
        },
      })
      .then(this.getResponse<void>)
      .catch(this.getError);
  }

  static getInstance() {
    return (ApiService.instance ??= new ApiService());
  }
}

export default ApiService.getInstance();
