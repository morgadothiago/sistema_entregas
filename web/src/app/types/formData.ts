export interface FormData {
    name: string;
    cnpj: string;
    phone: string;
    address: string;
    municipio: string; // Updated to use the value type from cities
    state: string;
    complement: string;
    number: string;
    businessType: string;
    zipCode: string;
    email: string;
    password: string;
    confirmPassword: string;
  }