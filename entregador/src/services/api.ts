import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { showErrorToast } from "../util/Toast";

export const api = axios.create({
  baseURL:
    Platform.OS === "ios"
      ? "http://localhost:8080/"
      : "http://192.168.100.96:8080/",
});

// Função para definir o token de autorização
export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Interceptor para adicionar o token automaticamente em todas as requisições
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("@auth:token");
      console.log("🔍 Token no interceptor:", token); // Debug

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("✅ Header adicionado:", config.headers.Authorization);
      } else {
        console.log("❌ Token não encontrado");
      }
      // Adiciona o User-Agent
      config.headers["User-Agent"] = `MeuApp/1.0 (${Platform.OS})`;
      // Mostra no console o User-Agent
      console.log("User-Agent enviado:", config.headers["User-Agent"]);
    } catch (error) {
      console.error("Erro ao obter token do AsyncStorage:", error);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros de resposta
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // Se receber erro 401 (não autorizado), limpa o token
    if (error.response?.status === 401) {
      try {
        await AsyncStorage.removeItem("@auth:token");
        await AsyncStorage.removeItem("@auth:user");
        setAuthToken(null);
        showErrorToast("Usuário ou senha inválidos.");
      } catch (storageError) {
        console.error("Erro ao limpar dados de autenticação:", storageError);
      }
    } else {
      showErrorToast("Erro ao fazer login. Tente novamente mais tarde.");
    }
    return Promise.reject(error);
  }
);
