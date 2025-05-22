import axios from "axios";
import { Platform } from "react-native";

// Substitua pelo IP do seu PC
const LOCAL_IP = "192.168.100.96";

const baseURL =
  Platform.OS === "android"
    ? `http://${LOCAL_IP}:3001`
    : `http://${LOCAL_IP}:3001`;

export const api = axios.create({
  baseURL,
});
