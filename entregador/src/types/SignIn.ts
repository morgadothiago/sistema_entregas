export interface User {
  name: string;
  email: string;
  role: string; // <-- Aqui está a role
}

export type LoginResponse = {
  token: string;
  user: User;
};
