import * as yup from "yup";

export const SigninSchema = yup.object({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha precisa ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
});
