import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { api } from "../services/api"
import { setAuthToken } from "../services/api"

import { showAppToast, showErrorToast } from "../util/Toast"
import type { User } from "../types/SignIn"
import type { SignInFormData } from "../types/SignInForm"

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  isLoading: boolean
  login: (data: SignInFormData, navigation?: any) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Função para validar token JWT
  const validateToken = async (token: string): Promise<boolean> => {
    try {
      // Verifica se o token tem o formato correto (3 partes separadas por ponto)
      const tokenParts = token.split(".")
      if (tokenParts.length !== 3) {
        return false
      }

      // Decodifica o payload do JWT (segunda parte)
      const payload = JSON.parse(atob(tokenParts[1]))

      // Verifica se o token não expirou
      const currentTime = Math.floor(Date.now() / 1000)
      if (payload.exp && payload.exp < currentTime) {
        console.log("Token expirado")
        return false
      }

      // Configura o token na API para uso futuro
      setAuthToken(token)

      return true
    } catch (error) {
      console.error("Token inválido:", error)
      return false
    }
  }

  // Restaurar sessão do AsyncStorage e validar token na inicialização
  useEffect(() => {
    const loadStoredAuth = async () => {
      setIsLoading(true)
      try {
        const storedUser = await AsyncStorage.getItem("@auth:user")
        const storedToken = await AsyncStorage.getItem("@auth:token")
        console.log("RESTORE: storedUser", storedUser)
        console.log("RESTORE: storedToken", storedToken)

        if (storedUser && storedToken) {
          const userData: User = JSON.parse(storedUser)
          const isTokenValid = await validateToken(storedToken)
          console.log("RESTORE: userData", userData)
          console.log("RESTORE: isTokenValid", isTokenValid)

          if (isTokenValid && userData.role?.toLowerCase() === "delivery") {
            setUser({ ...userData, token: storedToken })
            setIsAuthenticated(true)
            setAuthToken(storedToken)
          } else {
            await AsyncStorage.removeItem("@auth:user")
            await AsyncStorage.removeItem("@auth:token")
            setUser(null)
            setIsAuthenticated(false)
            setAuthToken(null)
          }
        } else {
          setUser(null)
          setIsAuthenticated(false)
          setAuthToken(null)
        }
      } catch (error) {
        setUser(null)
        setIsAuthenticated(false)
        setAuthToken(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadStoredAuth()
  }, [])

  const login = async (
    data: SignInFormData,
    navigation?: any
  ): Promise<void> => {
    try {
      console.log("Dados antes da requicição ", data)
      const response = await api.post("/auth/login", data)
      const token = response.data && response.data.token
      const userFromApi = response.data && response.data.user
      const apiMessage = response.data && response.data.message

      if (userFromApi && token) {
        // Salva token e usuário no AsyncStorage
        await AsyncStorage.setItem("@auth:token", token)
        await AsyncStorage.setItem("@auth:user", JSON.stringify(userFromApi))

        // Configura o token na API
        setAuthToken(token)

        // Atualiza o estado
        setIsAuthenticated(true)
        setUser({ ...userFromApi, token })

        // Mensagem para outros tipos de usuário
        if (userFromApi.role !== "delivery") {
          showAppToast({
            message: apiMessage || "Usuário de setor logado.",
            type: "info",
            title: "Atenção",
          })
        }

        // Navega para Home se navigation for passado
        if (navigation) {
          navigation.navigate("Home")
        }
      } else {
        showErrorToast("Resposta inesperada da API. Contate o suporte.")
        setIsAuthenticated(false)
        setUser(null)
        setAuthToken(null)
      }
    } catch (err: any) {
      showErrorToast("Erro ao fazer login. Tente novamente mais tarde.")
      setIsAuthenticated(false)
      setUser(null)
      setAuthToken(null)
    }
  }

  const logout = async (): Promise<void> => {
    await AsyncStorage.removeItem("@auth:token")
    await AsyncStorage.removeItem("@auth:user")
    setIsAuthenticated(false)
    setUser(null)
    setAuthToken(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
