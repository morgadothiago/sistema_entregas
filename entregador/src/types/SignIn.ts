// Em SignIn.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

export interface LoginResponse {
  token: string;
  user: User;
  message?: string;
}
