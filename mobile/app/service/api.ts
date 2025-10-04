import Axios, { AxiosResponse } from "axios"
import { UserInfoData } from "../types/UserData"
import Toast from "react-native-toast-message"

interface User {
  id: string
  name: string
  email: string
}

interface LoginResponse {
  token: string
  user: User
}

interface LoginData {
  email: string
  password: string
}

const api = Axios.create({
  baseURL: "http://localhost:3000",
})

async function login(data: LoginData): Promise<LoginResponse> {
  try {
    const response: AxiosResponse<LoginResponse> = await api.post(
      "/auth/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "MeuApp/1.0",
          Accept: "application/json",
        },
      }
    )

    // Supondo que o backend retorne token e usuário
    const { token, user } = response.data

    // Salvar token no AsyncStorage (React Native) ou localStorage (Web)
    // await AsyncStorage.setItem("token", token);

    return { token, user }
  } catch (error: any) {
    if (error.response) {
      console.log("Erro no login:", error.response.data)
    } else {
      console.log("Erro inesperado:", error.message)
    }
    throw error
  }
}

function normalizeData(data: UserInfoData) {
  // Formata a data de nascimento para o formato ISO completo (YYYY-MM-DDTHH:MM:SS.sssZ)
  let formattedDob = ""
  if (data.dob instanceof Date) {
    // Usar toISOString() para obter o formato completo que a API espera
    formattedDob = data.dob.toISOString()
  } else if (typeof data.dob === "object" && "year" in data.dob) {
    // se for {day, month, year}, criar um objeto Date e converter para ISO
    const date = new Date(
      Number(data.dob.year),
      Number(data.dob.month) - 1, // mês em JS é 0-indexed
      Number(data.dob.day)
    )
    formattedDob = date.toISOString()
  } else if (data.dob) {
    // Se já for uma string, verificar se já está no formato ISO
    if (String(data.dob).includes("T")) {
      formattedDob = String(data.dob)
    } else {
      // Tentar converter para Date e depois para ISO
      try {
        const date = new Date(String(data.dob))
        formattedDob = date.toISOString()
      } catch (e) {
        // Fallback para data atual
        formattedDob = new Date().toISOString()
      }
    }
  } else {
    // Caso não tenha data, usar data atual no formato ISO
    formattedDob = new Date().toISOString()
  }

  // Verifica se vehicleType é um objeto e extrai o valor
  let vehicleTypeValue = data.vehicleType
  if (
    vehicleTypeValue &&
    typeof vehicleTypeValue === "object" &&
    "value" in vehicleTypeValue
  ) {
    vehicleTypeValue = (vehicleTypeValue as { value: string | undefined }).value
  }

  return {
    ...data,
    dob: formattedDob,
    year: data.year?.toString() || "",
    vehicleType: vehicleTypeValue,
  }
}

export async function newAccount(data: UserInfoData) {
  try {
    const normalizedData = normalizeData(data)

    // Envia os dados para o endpoint
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
    })

    throw new Error(
      error.response?.data?.message ||
        "Erro ao criar nova conta. Verifique os dados enviados."
    )
  }
}
// Intercepta respostas de erro
api.interceptors.response.use(
  (response) => response, // se deu certo, só retorna
  (error) => {
    if (error.response) {
      // Erro da API (status code 4xx ou 5xx)
      console.log("Erro da API:", error.response.data)

      // exemplo: se for 401, deslogar usuário
      if (error.response.status === 401) {
        console.log(error.response.data.message)
        // aqui você pode limpar token, redirecionar login, etc
      }
    } else if (error.request) {
      // Nenhuma resposta do servidor
      console.log("Sem resposta do servidor:", error.request)
    } else {
      // Erro inesperado
      console.log("Erro inesperado:", error.message)
    }

    // importante: sempre rejeitar de novo para não "esconder" o erro
    return Promise.reject(error)
  }
)

export { api, login }
