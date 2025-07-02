/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from "axios"
import type { ILoginResponse } from "../types/SingInType"
import type {
  ICreateUser,
  IFilterUser,
  IUserPaginate,
  User,
} from "../types/User"
import type { VehicleType, VehicleTypePaginate } from "../types/VehicleType"
import { IPaginateResponse } from "../types/Paginate"
import { signOut } from "next-auth/react"

interface IErrorResponse {
  message: string
  status: number
}

class ApiService {
  private api: AxiosInstance
  static instance: ApiService
  static token: string = ""

  constructor() {
    this.api = Axios.create({
      baseURL: process.env.NEXT_PUBLIC_NEXTAUTH_API_HOST || "",
    })
  }

  setToken(token: string) {
    if (token) ApiService.token = `Bearer ${token}`
  }

  cleanToken() {
    ApiService.token = ""
  }

  async getInfo() {
    this.api.get("")
  }

  async login(
    email: string,
    password: string
  ): Promise<ILoginResponse | IErrorResponse> {
    return this.api
      .post("/auth/login", { email, password })
      .then(this.getResponse<ILoginResponse>)
      .catch(this.getError)
  }

  async newUser(data: ICreateUser): Promise<void | IErrorResponse> {
    const response = await this.api
      .post("/auth/signup/company", data)
      .then(this.getResponse<void>)
      .catch(this.getError)

    return response
  }

  private getResponse<T>(response: AxiosResponse): T {
    return response.data
  }

  private async getError(error: AxiosError<any>): Promise<IErrorResponse> {
    console.error("=== ERRO DA API ===")
    console.error("Status:", error.status)
    console.error("Response data:", error.response?.data)
    console.error("Response status:", error.response?.status)
    console.error("Response headers:", error.response?.headers)
    console.error("===================")

    const status = error.status || error.response?.status
    const message = error.response?.data?.message || "Erro desconhecido"

    if (status === 422) {
      return { message, status }
    }
    if (status === 409) {
      return { message, status }
    }
    if (status === 401) {
      try {
        await signOut({ redirect: true, redirectTo: "/signin" })
      } catch (e) {
        console.error("Erro ao fazer signOut:", e)
      }
      return { message, status: 401 }
    }
    if (status === 500) {
      return { message, status: 500 }
    }
    return { message, status: status || 500 }
  }

  async getUsers(
    filters: IFilterUser,
    token: string
  ): Promise<IPaginateResponse<IUserPaginate> | IErrorResponse> {
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`
    return this.api
      .get("/users", {
        params: filters,
        headers: {
          authorization: authToken,
        },
      })
      .then(this.getResponse<IPaginateResponse<IUserPaginate>>)
      .catch(this.getError)
  }

  async getAllVehicleType(
    page: number = 1,
    limit: number = 10
  ): Promise<IPaginateResponse<VehicleType> | IErrorResponse> {
    return this.api
      .get("/vehicle-types", {
        params: { page, limit },
      })
      .then(this.getResponse<IPaginateResponse<VehicleType>>)
      .catch(this.getError)
  }

  async deleteUser(id: string, token: string): Promise<void | IErrorResponse> {
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`
    return this.api
      .delete(`/users/${id}`, {
        headers: {
          authorization: authToken,
        },
      })
      .then(this.getResponse<void>)
      .catch(this.getError)
  }

  async deleteVehicleType(
    type: string,
    token: string
  ): Promise<void | IErrorResponse> {
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`
    return this.api
      .delete(`/vehicle-types/${type}`, {
        headers: {
          authorization: authToken,
        },
      })
      .then(this.getResponse<void>)
      .catch(this.getError)
  }

  async updateVehicleType(
    type: string,
    data: Partial<VehicleType>,
    token: string
  ): Promise<void | IErrorResponse> {
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`
    return this.api
      .patch(`/vehicle-types/${type}`, data, {
        headers: {
          authorization: authToken,
          "Content-Type": "application/json",
        },
      })
      .then(this.getResponse<void>)
      .catch(this.getError)
  }

  async createVehicleType(
    data: Partial<VehicleType>,
    token: string
  ): Promise<void | IErrorResponse> {
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`
    return this.api
      .post("/vehicle-types", data, {
        headers: {
          authorization: authToken,
          "Content-Type": "application/json",
        },
      })
      .then(this.getResponse<void>)
      .catch(this.getError)
  }

  static getInstance() {
    return (ApiService.instance ??= new ApiService())
  }
}

export default ApiService.getInstance()
