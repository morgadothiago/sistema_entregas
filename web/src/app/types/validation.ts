import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    cnpj: yup.string().min(14).max(14).required("CNPJ é obrigatório 123"),
    phone: yup.string().required("Telefone é obrigatório"),
    address: yup.string().required("Endereço é obrigatório"),
    city: yup.string().required("Cidade é obrigatória"),
    businessType: yup.string().required("Tipo de negócio é obrigatório"),
    zipCode: yup.string().required("CEP é obrigatório"),
    state: yup.string().required("Estado UF obrigatorio"),
    complement: yup.string().required("Complemento obrigatorio"),
    number: yup.string().required("Numero e obrigatorio"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("Senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem corresponder")
      .required("Confirmação de senha é obrigatória"),
  });