import Axios, { AxiosResponse } from "axios"
import Toast from "react-native-toast-message"
import { ApiResponse } from "../types/ApiResponse"
import { UserInfoData } from "../types/UserData"

interface LoginData {
  email: string
  password: string
}

// Resposta esperada do backend
interface LoginResponse {
  token: string
  user: ApiResponse
}

const api = Axios.create({
  baseURL: "http://192.168.100.97:3000",
})

// -------------------- LOGIN --------------------
async function login(data: LoginData): Promise<LoginResponse> {
  try {
    const response: AxiosResponse<LoginResponse> = await api.post(
      "/auth/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "IEMobile",
          Accept: "application/json",
        },
      }
    )

    const { token, user } = response.data

    if (!token || !user) {
      throw new Error("Resposta inválida do servidor.")
    }

    // Define token global no axios
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`

    // Aqui você pode salvar no AsyncStorage:
    // await AsyncStorage.setItem("token", token);
    // await AsyncStorage.setItem("user", JSON.stringify(user));

    return { token, user }
  } catch (error: any) {
    if (error.response) {
      console.log("Erro no login:", error.response.data)
      Toast.show({
        type: "error",
        text1: "Erro no login",
        text2: error.response.data.message || "Verifique suas credenciais.",
      })
    } else {
      console.log("Erro inesperado:", error.message)
      Toast.show({
        type: "error",
        text1: "Erro inesperado",
        text2: "Não foi possível se conectar ao servidor.",
      })
    }
    throw error
  }
}

// -------------------- NORMALIZAÇÃO DE DADOS --------------------
function normalizeData(data: UserInfoData) {
  let formattedDob = ""

  if (data.dob instanceof Date) {
    formattedDob = data.dob.toISOString()
  } else if (typeof data.dob === "object" && "year" in data.dob) {
    const date = new Date(
      Number(data.dob.year),
      Number(data.dob.month) - 1,
      Number(data.dob.day)
    )
    formattedDob = date.toISOString()
  } else if (data.dob) {
    try {
      const date = new Date(String(data.dob))
      formattedDob = date.toISOString()
    } catch {
      formattedDob = new Date().toISOString()
    }
  } else {
    formattedDob = new Date().toISOString()
  }

  // Extrai valor do vehicleType, se for objeto
  let vehicleTypeValue = data.vehicleType
  if (
    vehicleTypeValue &&
    typeof vehicleTypeValue === "object" &&
    "value" in vehicleTypeValue
  ) {
    vehicleTypeValue = (vehicleTypeValue as { value?: string }).value
  }

  return {
    ...data,
    dob: formattedDob,
    year: data.year?.toString() || "",
    vehicleType: vehicleTypeValue,
  }
}

// -------------------- NOVA CONTA --------------------
export async function newAccount(data: UserInfoData) {
  try {
    const normalizedData = normalizeData(data)
    const response = await api.post("/auth/signup/deliveryman", normalizedData)

    if (response.data) {
      Toast.show({
        type: "success",
        text1: "Sucesso!",
        text2: "Conta criada com sucesso 👌",
      })
    }

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

// -------------------- INTERCEPTOR GLOBAL --------------------
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.log("Erro da API:", error.response.data)

      if (error.response.status === 401) {
        console.log("Token expirado ou inválido:", error.response.data.message)
        // aqui você pode limpar AsyncStorage e redirecionar para login
      }
    } else if (error.request) {
      console.log("Sem resposta do servidor:", error.request)
    } else {
      console.log("Erro inesperado:", error.message)
    }

    return Promise.reject(error)
  }
)

export { api, login }
