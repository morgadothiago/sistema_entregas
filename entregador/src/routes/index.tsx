import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./MainStack";
import { useAuth } from "../context/AuthContext";
import AuthRoutes from "./AuthRoutes";

import { ToastProvider } from "react-native-toastier";

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <ToastProvider>
      <NavigationContainer>
        {isAuthenticated ? <MainStack /> : <AuthRoutes />}
      </NavigationContainer>
    </ToastProvider>
  );
}
