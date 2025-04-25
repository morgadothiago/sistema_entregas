import type { IBalance } from "./Belance";
import type { IExtract } from "./Extract";

export enum ERole {
  DELIVERY = "DELIVERY",
  ADMIN = "ADMIN",
  COMPANY = "COMPANY",
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: ERole;
  Balance: IBalance;
  Extract: IExtract[];
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
