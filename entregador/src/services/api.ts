import Axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Platform } from "react-native"

const baseURL =
  Platform.OS === "ios"
    ? "http://localhost:3000"
    : "http://192.168.100.101:3000" // para Android Emulator

export const api = Axios.create({
  baseURL,
})

// Função para definir o token de autorização
export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common["Authorization"]
  }
}

// Interceptor para adicionar o token automaticamente em todas as requisições
api.interceptors.request.use(
  async (config) => {
    try {
      // Só busca o token do AsyncStorage se não houver um token já configurado
      if (!config.headers.Authorization) {
        const token = await AsyncStorage.getItem("@auth:token")
        console.log("🔍 Token no interceptor:", token) // Debug

        if (token) {
          config.headers.Authorization = `Bearer ${token}`
          console.log("✅ Header adicionado:", config.headers.Authorization)
        } else {
          console.log("❌ Token não encontrado")
        }
      }
      // Adiciona o User-Agent
      config.headers["User-Agent"] = `MeuApp/1.0 (${Platform.OS})`
      // User-Agent que é reconhecido como dispositivo móvel
      if (Platform.OS === "ios") {
        config.headers[
          "User-Agent"
        ] = `MeuApp/1.0 (iPhone; iOS 15.0; like Mac OS X)`
      } else {
        config.headers[
          "User-Agent"
        ] = `MeuApp/1.0 (Linux; Android 12; SM-G991B)`
      }
    } catch (error) {
      console.error("Erro ao obter token do AsyncStorage:", error)
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor para tratar erros de resposta
api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    // Se receber erro 401 (não autorizado), limpa o token
    if (error.response?.status === 401) {
      try {
        await AsyncStorage.removeItem("@auth:token")
        await AsyncStorage.removeItem("@auth:user")
        setAuthToken(null)
      } catch (storageError) {
        console.error("Erro ao limpar dados de autenticação:", storageError)
      }
    } else {
    }
    return Promise.reject(error)
  }
)
