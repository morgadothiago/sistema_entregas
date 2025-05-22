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

interface User {
  name: string;
  email: string;
  // Outras propriedades se necessário
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  login: (data: SignInFormData) => Promise<void>;
  logout: () => Promise<void>;
  checkAuthStatus: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // 👈 novo estado de carregamento

  // ✅ Checa o token salvo no AsyncStorage ao iniciar o app
  useEffect(() => {
    const loadStoredData = async () => {
      try {
        const token = await AsyncStorage.getItem("@auth:token");
        const userData = await AsyncStorage.getItem("@auth:user");

        if (token && userData) {
          setIsAuthenticated(true);
          setUser(JSON.parse(userData));
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
      } finally {
        setIsLoading(false); // ✅ Finaliza carregamento
      }
    };

    loadStoredData();
  }, []);

  const login = async (data: SignInFormData): Promise<void> => {
    try {
      const response = await api.post<ApiResponse<LoginResponse>>(
        "/signin",
        data
      );

      const loginData = response.data.data;

      if (response.status === 200 && loginData?.token && loginData?.user) {
        const token = loginData.token;
        const userData = loginData.user;

        await AsyncStorage.setItem("@auth:token", token);
        await AsyncStorage.setItem("@auth:user", JSON.stringify(userData));

        setIsAuthenticated(true);
        setUser(userData);
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        showAppToast({
          message: response.data.message || "Login realizado com sucesso!",
          type: "success",
        });
      } else {
        showErrorToast(response.data?.message || "Erro ao fazer login.");
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Erro de conexão ou login inválido.";

      console.error("Erro ao logar:", message);
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
    delete api.defaults.headers.common["Authorization"];
  };

  const checkAuthStatus = () => isAuthenticated;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        login,
        logout,
        checkAuthStatus,
      }}
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
