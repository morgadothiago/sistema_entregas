import type { IBalance } from "./Belance";
import { ICompany } from "./Compny";
import type { IExtract } from "./Extract";

export enum ERole {
  DELIVERY = "DELIVERY",
  ADMIN = "ADMIN",
  COMPANY = "COMPANY",
}

export enum EStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

export interface IPaginationParams {
  page: number;
  size: number;
}

export interface IUserFilters extends IPaginationParams {
  status?: EStatus;
  role?: ERole;
  name?: string;
  email?: string;
}

export interface IPaginatedResponse<T> {
  data: T[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: ERole;
  status: EStatus;
  Balance: IBalance;
  Company: ICompany;
  Extract: IExtract[];
  emailVerified?: Date | null; // ← necessário para NextAuth
  token: string;
  information?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateUser {
  name: string;
  email: string;
  cnpj: string;
  password: string;
  phone: string;
  address: string;
  city: string;
  number: string;
  complement: string;
  state: string;
  zipCode: string;
}
