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
