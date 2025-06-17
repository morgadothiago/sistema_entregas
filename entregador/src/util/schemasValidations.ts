// src/utils/signupSchema.ts
import * as yup from "yup";
import { InferType } from "yup";

export const signUpSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  dob: yup
    .string()
    .required("Data de nascimento é obrigatória")
    .matches(
      /^\d{2}-\d{2}-\d{4}$/,
      "Data de nascimento deve estar no formato DD-MM-AAAA"
    ),
  cpf: yup.string().required("CPF é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .matches(/[0-9]/, "A senha deve conter pelo menos um número")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não conferem")
    .required("Confirmação de senha é obrigatória"),
  phone: yup.string().required("Telefone é obrigatório"),
  address: yup.object().shape({
    street: yup.string().required("Rua é obrigatória"),
    number: yup.string().required("Número é obrigatório"),
    complement: yup.string().nullable().optional(),
    neighborhood: yup.string().required("Bairro é obrigatório"),
    city: yup.string().required("Cidade é obrigatória"),
    state: yup.string().required("Estado é obrigatório"),
    zipCode: yup.string().required("CEP é obrigatório"),
  }),
  vehicle: yup.object().shape({
    licensePlate: yup.string().required("Placa do Veículo é obrigatória"),
    brand: yup.string().required("Marca é obrigatória"),
    model: yup.string().required("Modelo é obrigatório"),
    year: yup
      .string()
      .required("Ano é obrigatório")
      .matches(/^\d{4}$/, "Ano deve conter 4 dígitos"),
    color: yup.string().required("Cor é obrigatória"),
    vehicleType: yup.string().required("Tipo do veículo é obrigatório"),
  }),
});

// 🔥 Tipagem automática com base no schema
export type SignUpFormData = InferType<typeof signUpSchema>;
