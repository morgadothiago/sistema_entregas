import type { AxiosResponse } from "axios";

export type ApiResponse<T> = {
  token: string;
  status: number;
  success: boolean;
  data: T;
  message: string;
};
export type ApiErrorResponse = {
  message: string;
  status: number;
};
export type ApiAxiosResponse<T = any> = AxiosResponse<ApiResponse<T>>;
