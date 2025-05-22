import type { SigninSchema } from "../util/schemasValidations";
import * as yup from "yup";

export type SignInFormData = {
  email: string;
  password: string;
};

export type LoginFormData = yup.InferType<typeof SigninSchema>;
