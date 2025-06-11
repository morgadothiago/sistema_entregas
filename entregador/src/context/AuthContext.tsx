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

  const login = async (data: SignInFormData): Promise<void> => {
    try {
      const response = await api.post("/auth/login", data);
      console.log("📦 response.data:", response.data);

      const token = response.data.token;
      const userFromApi = response.data.user;
      const message = response.data.message;

      if (token && userFromApi) {
        // Armazena token e user no AsyncStorage antes de atualizar o estado
        await AsyncStorage.setItem("@auth:token", token);
        await AsyncStorage.setItem("@auth:user", JSON.stringify(userFromApi));

        // Atualiza estado React
        setIsAuthenticated(true);
        setUser({ ...userFromApi, token });

        // Mostra toast de sucesso
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

  // Carrega estado de autenticação ao iniciar o app
  useEffect(() => {
    const loadAuthData = async () => {
      const token = await AsyncStorage.getItem("@auth:token");
      const userJson = await AsyncStorage.getItem("@auth:user");
      if (token && userJson) {
        setIsAuthenticated(true);
        setUser({ ...JSON.parse(userJson), token });
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    };
    loadAuthData();
  }, []);

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
