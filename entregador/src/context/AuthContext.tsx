import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services/api";

import { showAppToast, showErrorToast } from "../util/Toast";
import type { User } from "../types/SignIn";
import type { SignInFormData } from "../types/SignInForm";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (data: SignInFormData) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Restaurar sessão do AsyncStorage e validar role na inicialização
  useEffect(() => {
    const loadStoredAuth = async () => {
      const storedUser = await AsyncStorage.getItem("@auth:user");
      const storedToken = await AsyncStorage.getItem("@auth:token");

      if (storedUser && storedToken) {
        try {
          const userData: User = JSON.parse(storedUser);

          // Valida se a role é delivery
          if (userData.role === "delivery") {
            setUser({ ...userData, token: storedToken });
            setIsAuthenticated(true);
          } else {
            // Se não for delivery, limpa o storage
            await AsyncStorage.removeItem("@auth:user");
            await AsyncStorage.removeItem("@auth:token");
            setUser(null);
            setIsAuthenticated(false);
          }
        } catch {
          // Se deu erro no parse, limpa tudo
          await AsyncStorage.removeItem("@auth:user");
          await AsyncStorage.removeItem("@auth:token");
          setUser(null);
          setIsAuthenticated(false);
        }
      }
    };

    loadStoredAuth();
  }, []);

  const login = async (data: SignInFormData): Promise<void> => {
    try {
      const response = await api.post("/auth/login", data);
      console.log("📦 response.data:", response.data);

      const token = response.data.token;
      const userFromApi = response.data.user;
      const message = response.data.message;

      if (token && userFromApi) {
        // Verifica role do usuário
        if (userFromApi.role !== "delivery") {
          showErrorToast(
            "Acesso negado: usuário não possui permissão delivery."
          );
          setIsAuthenticated(false);
          setUser(null);
          return;
        }

        const userData = {
          ...userFromApi,
          token,
        };

        await AsyncStorage.setItem("@auth:token", token);
        await AsyncStorage.setItem("@auth:user", JSON.stringify(userData));

        setIsAuthenticated(true);
        setUser(userData);

        showAppToast({
          message: message ?? "Login realizado com sucesso!",
          type: "success",
        });
      } else {
        showErrorToast("Token ou dados do usuário ausentes.");
      }
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Erro de conexão ou login inválido.";
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
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
