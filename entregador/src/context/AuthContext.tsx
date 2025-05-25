import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "../services/api";
import type { ApiResponse } from "../types/Axios";
import type { LoginResponse } from "../types/SignIn";
import type { SignInFormData } from "../types/SignInForm";
import { showAppToast, showErrorToast } from "../util/Toast";

// Tipagem do usuário (ajuste conforme necessário)
interface User {
  name: string;
  email: string;
  // Adicione outras propriedades conforme o LoginResponse
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (data: SignInFormData) => Promise<void>;
  logout: () => Promise<void>;
  checkAuthStatus: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (data: SignInFormData): Promise<void> => {
    try {
      const response = await api.post<ApiResponse<LoginResponse>>(
        "/auth/login",
        data
      );

      const loginData = response.data.data;

      if (response.status === 200 && loginData?.token && loginData?.user) {
        const token = loginData.token;
        const userData = loginData.user;

        // Salvar no AsyncStorage
        await AsyncStorage.setItem("@auth:token", token);
        await AsyncStorage.setItem("@auth:user", JSON.stringify(userData));

        // Atualizar estado global
        setIsAuthenticated(true);
        setUser(userData);

        console.log(userData);

        showAppToast({
          message: response.data.message,
          type: "success",
        });

        console.log("✅ Login efetuado com sucesso.");
      } else {
        showErrorToast(response.data?.message);
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Erro de conexão ou login inválido.";

      console.error("🔥 Erro de exceção:", message);

      showErrorToast(message);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const logout = async (): Promise<void> => {
    await AsyncStorage.removeItem("@auth:token");
    await AsyncStorage.removeItem("@auth:user");
    setIsAuthenticated(false);
    setUser(null);
    console.log("👋 Usuário deslogado.");
  };

  const checkAuthStatus = () => isAuthenticated;

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, checkAuthStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
