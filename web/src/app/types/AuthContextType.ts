import type { User } from "./User";
import type { SignInFormData } from "./SingInType";

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (data: SignInFormData) => Promise<boolean>;
  logout: () => void;
}
