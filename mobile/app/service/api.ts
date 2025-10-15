import AsyncStorage from "@react-native-async-storage/async-storage"
import Axios, { AxiosResponse } from "axios"
import Toast from "react-native-toast-message"
import { ApiResponse } from "../types/ApiResponse"

interface LoginData {
  email: string
  password: string
}

// Resposta esperada do backend
interface LoginResponse {
  token: string
  user: ApiResponse
}

// -------------------- INSTÂNCIA AXIOS --------------------
const api = Axios.create({
  baseURL: "http://192.168.100.97:3000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

// -------------------- LOGIN --------------------
export async function login(data: LoginData): Promise<LoginResponse> {
  try {
    const response: AxiosResponse<LoginResponse> = await api.post(
      "/auth/login",
      data
    )

    const { token, user } = response.data

    if (!token || !user) {
      throw new Error("Resposta inválida do servidor.")
    }

    // Define token global no axios
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`

    // Salva no AsyncStorage
    await AsyncStorage.setItem("@token", token)
    await AsyncStorage.setItem("@user", JSON.stringify(user))

    Toast.show({
      type: "success",
      text1: "Login bem-sucedido!",
      text2: `Bem-vindo, ${user.name || "usuário"} 👋`,
    })

    return { token, user }
  } catch (error: any) {
    console.log("Erro no login:", error.response?.data || error.message)

    Toast.show({
      type: "error",
      text1: "Erro no login",
      text2: error.response?.data?.message || "Verifique suas credenciais.",
    })

    throw error
  }
}

// -------------------- CRIAÇÃO DE CONTA --------------------
export async function newAccount(data: any) {
  try {
    const response = await api.post("/auth/signup/deliveryman", data)

    Toast.show({
      type: "success",
      text1: "Sucesso!",
      text2: "Conta criada com sucesso 👌",
    })

    return response.data
  } catch (error: any) {
    console.error(
      "Erro ao criar nova conta:",
      error.response?.data || error.message
    )

    Toast.show({
      type: "error",
      text1: "Erro!",
      text2: error.response?.data?.message || "Verifique os dados enviados.",
    })

    throw new Error(
      error.response?.data?.message ||
        "Erro ao criar nova conta. Verifique os dados enviados."
    )
  }
}

// -------------------- INTERCEPTORES GLOBAIS --------------------
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("@token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error("Erro ao enviar requisição:", error)
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      const status = error.response.status
      const message = error.response.data?.message

      console.log(`Erro da API [${status}]:`, message || error.response.data)

      // 🔒 Token inválido ou expirado
      if (status === 401) {
        Toast.show({
          type: "error",
          text1: "Sessão expirada",
          text2: "Faça login novamente.",
        })

        await AsyncStorage.multiRemove(["@token", "@user"])
        // Aqui você pode redirecionar o usuário para a tela de login
      }

      // ⚠️ Erros de validação ou requisição
      if (status >= 400 && status < 500) {
        Toast.show({
          type: "error",
          text1: "Erro",
          text2: message || "Algo deu errado na sua solicitação.",
        })
      }
    } else if (error.request) {
      console.log("Sem resposta do servidor:", error.request)
      Toast.show({
        type: "error",
        text1: "Falha na conexão",
        text2: "Não foi possível se conectar ao servidor.",
      })
    } else {
      console.log("Erro inesperado:", error.message)
      Toast.show({
        type: "error",
        text1: "Erro inesperado",
        text2: error.message,
      })
    }

    return Promise.reject(error)
  }
)

export { api }
