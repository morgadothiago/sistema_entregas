import React, { createContext, useState, useContext, ReactNode } from "react";
import { api } from "../services/api";
import type { ApiResponse } from "../types/Axios";
import type { LoginResponse } from "../types/SignIn";
import type { SignInFormData } from "../types/SignInForm";
import { showAppToast, showErrorToast } from "../util/Toast";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (data: SignInFormData) => Promise<void>;
  logout: () => void;
  checkAuthStatus: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (data: SignInFormData): Promise<void> => {
    try {
      const response = await api.post<ApiResponse<LoginResponse>>(
        "/signin",
        data
      );
      // Aqui garantimos que estamos tratando 'success' corretamente
      if (response.status === 200 && response.data?.token) {
        setIsAuthenticated(true);

        showAppToast({
          message: response.data.message || "Login realizado com sucesso!",
          type: "success",
        });

        console.log("✅ Login efetuado com sucesso.");
      } else {
        console.warn(
          "❌ Login falhou: ",
          response.data?.message || "Erro desconhecido"
        );
        showErrorToast(response.data?.message || "Erro ao fazer login.");
        setIsAuthenticated(false);
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Erro de conexão ou login inválido.";
      console.error("🔥 Erro de exceção:", message);

      showErrorToast(message);
      setIsAuthenticated(false);
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
    console.log("User logged out");
  };

  const checkAuthStatus = () => isAuthenticated;

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, checkAuthStatus }}
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
