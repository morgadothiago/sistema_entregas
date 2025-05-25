import Axios from "axios";
import { Platform } from "react-native";

// Substitua pelo IP do seu PC
const LOCAL_IP = "192.168.100.96";

const baseURL =
  Platform.OS === "android"
    ? `http://${LOCAL_IP}:8080`
    : `http://${LOCAL_IP}:8080`;

export const api = Axios.create({
  baseURL,
});
