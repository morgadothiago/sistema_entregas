import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./MainStack";
import { AuthProvider, useAuth } from "../context/AuthContext";
import AuthRoutes from "./AuthRoutes";
import Home from "../screen/Home";

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
