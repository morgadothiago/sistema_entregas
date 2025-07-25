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
import { Delivery } from "../types/DeliveryTypes"

interface IErrorResponse {
  message: string
  status: number
  data?: any
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
    if (error.response) {
      console.error("Status:", error.response.status)
      console.error("Data:", error.response.data)
      if (error.response.data?.message) {
        console.error("Detalhes:", error.response.data.message)
      }
    } else {
      console.error("Erro sem resposta do servidor:", error.message)
    }
    console.error("===================")

    return {
      status: error.response?.status ?? 500,
      message: error.response?.data?.message ?? error.message,
      data: error.response?.data,
    }
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

  async getUser(id: string, token: string): Promise<User | IErrorResponse> {
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`
    return this.api
      .get(`/users/${id}`, {
        headers: { authorization: authToken },
      })
      .then(this.getResponse<User>)
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

  async getAndressCompony(token: string) {
    return this.api
      .get("/delivery/me", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(this.getResponse<any>)
      .catch(this.getError)
  }
  async AddNewDelivery(data: any, token: string) {
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`
    return this.api
      .post("/delivery", data, {
        headers: {
          authorization: authToken,
          "Content-Type": "application/json",
        },
      })
      .then(this.getResponse<any>)
      .catch(this.getError)
  }

  async simulateDelivery(data: any, token: string) {
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`
    return this.api
      .post("/delivery/simulate", data, {
        headers: {
          authorization: authToken,
          "Content-Type": "application/json",
        },
      })
      .then(this.getResponse<any>)
      .catch(this.getError)
  }
  async getDeliveryDetail(
    code: string,
    token: string,
    socketId: string
  ): Promise<Delivery | IErrorResponse> {
    const authToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`
    return this.api
      .get(`/gps/delivery/${code}`, {
        params: { socketId },
        headers: {
          authorization: authToken,
          "Content-Type": "application/json",
        },
      })
      .then(this.getResponse<Delivery>)
      .catch(this.getError)
  }

  static getInstance() {
    return (ApiService.instance ??= new ApiService())
  }
}

export default ApiService.getInstance()
