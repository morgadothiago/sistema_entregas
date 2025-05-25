// Em SignIn.ts
export interface User {
  name: string;
  email: string;
  token: string; // <- NÃO ESQUEÇA ESSA LINHA
}

export interface LoginResponse {
  token: string;
  user: {
    name: string;
    email: string;
    token: string;
  };
}
