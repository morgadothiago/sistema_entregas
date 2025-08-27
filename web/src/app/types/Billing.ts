import { Billing } from "./Debt"

export interface BillingFilters {
  type?: string
  status?: string
  description?: string
  page?: number
  limit?: number
}

export interface ICreateBilling {
  type: string
  status: string
  description: string
  amount: number
}

export interface GetBillingsResponse {
  data: Billing[]
  total: number
  currentPage: number
}

export interface NewBilling {
  idUser: number
  amount: number
  description: string
  status: "PENDING" | "PAID" | "CANCELED" | "FAILED"
}
export interface IBillingResponse {
  data: Billing[]
  total: number
}
