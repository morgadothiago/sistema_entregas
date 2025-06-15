// src/utils/signupSchema.ts
import * as yup from "yup";
import { InferType } from "yup";

export const signUpSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  birthDate: yup.string().required("Data de nascimento é obrigatória"),
  cpf: yup.string().required("CPF é obrigatório"),
  password: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não coincidem")
    .required("Confirmação da senha é obrigatória"),
  phone: yup.string().required("Telefone é obrigatório"),

  address: yup.string().required("Endereço é obrigatório"),
  number: yup.string().required("Número é obrigatório"),
  complement: yup.string().optional(),
  city: yup.string().required("Cidade é obrigatória"),
  state: yup.string().required("Estado é obrigatória"),
  cep: yup.string().required("CEP é obrigatório"),

  plate: yup.string().required("Placa é obrigatória"),
  brand: yup.string().required("Marca é obrigatória"),
  model: yup.string().required("Modelo é obrigatório"),
  year: yup.string().required("Ano é obrigatório"),
  color: yup.string().required("Cor é obrigatória"),
  type: yup.string().required("Tipo do veículo é obrigatório"),
});

// 🔥 Tipagem automática com base no schema
export type SignUpFormData = InferType<typeof signUpSchema>;
