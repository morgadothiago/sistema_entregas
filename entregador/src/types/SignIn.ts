export type User = {
  id: number;
  name: string;
  email: string;
};

export type LoginResponse = {
  token: string;
  user: User;
  message: string;
};
