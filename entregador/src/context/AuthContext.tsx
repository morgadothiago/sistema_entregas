import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services/api";
import { setAuthToken } from "../services/api";

import { showAppToast, showErrorToast } from "../util/Toast";
import type { User } from "../types/SignIn";
import type { SignInFormData } from "../types/SignInForm";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (data: SignInFormData, navigation?: any) => Promise<void>;
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

  const login = async (
    data: SignInFormData,
    navigation?: any
  ): Promise<void> => {
    try {
      const response = await api.post("/auth/login", data);
      console.log("📦 response.data:", response.data);

      const token = response.data && response.data.token;
      const userFromApi = response.data && response.data.user;
      const apiMessage = response.data && response.data.message;

      if (userFromApi) {
        if (userFromApi.role !== "delivery") {
          showAppToast({
            message: apiMessage || "Usuário de setor logado.",
            type: "info",
            title: "Atenção",
          });
          setIsAuthenticated(true);
          setUser(userFromApi);
          if (navigation) {
            navigation.navigate("Home");
          }
          return;
        }
        await AsyncStorage.setItem("@auth:user", JSON.stringify(userFromApi));
        setIsAuthenticated(true);
        setUser(userFromApi);
      } else {
        console.log("Resposta inesperada da API:", response.data);
        showErrorToast("Resposta inesperada da API. Contate o suporte.");
      }
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        showErrorToast("Usuário ou senha inválidos.");
      } else {
        showErrorToast("Erro ao fazer login. Tente novamente mais tarde.");
      }
      console.error("Erro no login:", err);
    }
  };

  const logout = async (): Promise<void> => {
    await AsyncStorage.removeItem("@auth:token");
    await AsyncStorage.removeItem("@auth:user");
    setIsAuthenticated(false);
    setUser(null);
    setAuthToken(null);
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
