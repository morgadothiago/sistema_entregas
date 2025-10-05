// context/AuthContext.tsx
import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { createContext, useContext, useEffect, useState } from "react"
import { api } from "../service/api"

type User = {
  id: string
  name: string
  email: string
}

type AuthContextData = {
  user: User | null
  token: string | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // Helpers para AsyncStorage
  async function saveItem(key: string, value: string) {
    await AsyncStorage.setItem(key, value)
  }

  async function getItem(key: string) {
    return await AsyncStorage.getItem(key)
  }

  async function removeItem(key: string) {
    await AsyncStorage.removeItem(key)
  }

  // Carrega token e usuário do AsyncStorage ao iniciar o app
  useEffect(() => {
    async function loadStorageData() {
      try {
        const storagedToken = await getItem("token")
        const storagedUser = await getItem("user")

        if (storagedToken && storagedUser) {
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${storagedToken}`
          setToken(storagedToken)
          setUser(JSON.parse(storagedUser))
        }
      } catch (error) {
        console.log("Erro ao carregar storage:", error)
      } finally {
        setLoading(false)
      }
    }

    loadStorageData()
  }, [])

  // Login
  async function signIn(email: string, password: string) {
    try {
      // 👉 Se tiver API real, usa isso
      const response = await api.post(
        "/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "IEMobile",
            Accept: "application/json",
          },
        }
      )
      const { token, user } = response.data

      console.log("Aqui", response)

      // 👉 Para teste sem API, descomenta isso:
      // const token = "fake-token-123"
      // const user = { id: "1", name: "Usuário Teste", email }

      setToken(token)
      setUser(user)
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      await saveItem("token", token)
      await saveItem("user", JSON.stringify(user))
    } catch (error: any) {
      console.log("Erro no login:", error)
      throw error
    }
  }

  // Logout
  async function signOut() {
    setUser(null)
    setToken(null)
    await removeItem("token")
    await removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
