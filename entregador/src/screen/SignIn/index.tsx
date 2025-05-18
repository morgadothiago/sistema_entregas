import { Button } from "react-native";

import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

import type { RootStackParamList } from "../../types/RootParamsList";
import type { StackNavigationProp } from "@react-navigation/stack";

import { Input } from "../../components/Input";
import { GradientBackground } from "./styles";

export default function SignInScreen() {
  const { login, isAuthenticated } = useAuth();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  // Simulate a login function
  const handleLogin = async () => {
    try {
      // Simulate an API call

      await login();

      // Check authentication status after login
      if (isAuthenticated) {
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <GradientBackground>
      <Button title="Entrar" onPress={handleLogin} />
      <Input />
    </GradientBackground>
  );
}
