// Em SignIn.ts
export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
  role: string;
}

export interface LoginResponse {
  token: string;
  user: User;
  message?: string;
}
