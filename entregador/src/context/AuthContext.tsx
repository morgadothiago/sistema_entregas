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
  token: string;
  // adicione mais campos conforme necessário
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  login: (data: SignInFormData) => Promise<void>;
  logout: () => Promise<void>;
  checkAuthStatus: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Restaura o token e o usuário ao abrir o app
  useEffect(() => {
    const loadStoredAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("@auth:token");
        const userJson = await AsyncStorage.getItem("@auth:user");

        if (token && userJson) {
          const userData: User = JSON.parse(userJson);
          setIsAuthenticated(true);
          setUser({
            name: userData.name,
            email: userData.email,
            token: token,
          });
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          console.log("✅ Sessão restaurada com token:", token);
        }
      } catch (err) {
        console.log("❌ Erro ao restaurar sessão:", err);
      } finally {
        setLoading(false);
      }
    };

    loadStoredAuth();
  }, []);

  const login = async (data: SignInFormData): Promise<void> => {
    try {
      const response = await api.post<ApiResponse<LoginResponse>>(
        "/auth/login",
        data
      );
      const loginData = response.data;

      if (response.status === 200 && loginData?.token && loginData?.data) {
        const token = loginData.token;
        const userData = loginData.data;

        console.log(userData);

        await AsyncStorage.setItem("@auth:token", token);
        await AsyncStorage.setItem("@auth:user", JSON.stringify(userData));

        setIsAuthenticated(true);
        setUser({
          name: userData.user.name,
          email: userData.user.email,
          token: token,
        });
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        showAppToast({
          message: response.data.message,
          type: "success",
        });

        console.log("✅ Login efetuado.");
      } else {
        showErrorToast(response.data?.message);
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Erro de conexão ou login inválido.";

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
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        checkAuthStatus,
        loading,
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
