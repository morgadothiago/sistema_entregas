import type { SigninSchema } from "../util/schemasValidations";
import * as yup from "yup";

export type LoginFormData = yup.InferType<typeof SigninSchema>;
