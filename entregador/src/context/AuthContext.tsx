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
  isLoading: boolean;
  user: User | null;
  login: (data: SignInFormData) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const login = async (data: SignInFormData): Promise<void> => {
    try {
      const response = await api.post("/auth/login", data);
      const token = response.data.token;
      const userFromApi = response.data.user;
      const message = response.data.message;

      if (token && userFromApi) {
        // 🔒 Verifica se a role é DELIVERY
        if (userFromApi.role !== "DELIVERY") {
          showErrorToast("Acesso permitido apenas para entregadores.");
          return;
        }

        await AsyncStorage.setItem("@auth:token", token);
        await AsyncStorage.setItem("@auth:user", JSON.stringify(userFromApi));

        setIsAuthenticated(true);
        setUser({ ...userFromApi, token });

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

  const loadAuthData = async () => {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem("@auth:token");
      const userJson = await AsyncStorage.getItem("@auth:user");

      if (token && userJson) {
        const savedUser = JSON.parse(userJson);

        // 🔒 Valida a role ao carregar
        if (savedUser.role === "DELIVERY") {
          setUser({ ...savedUser, token });
          setIsAuthenticated(true);
        } else {
          // Se a role for inválida, limpa tudo e impede acesso
          await AsyncStorage.clear();
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (e) {
      console.error("Erro ao carregar dados de autenticação:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
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
        isLoading,
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
