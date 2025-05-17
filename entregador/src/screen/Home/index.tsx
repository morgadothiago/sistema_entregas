import { Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { Button } from "react-native";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../types/RootParamsList";

export default function Home() {
  const { isAuthenticated, logout, checkAuthStatus } = useAuth();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  console.log("isAuthenticated", checkAuthStatus());

  // Simulate a logout function
  const handleLogout = async () => {
    try {
      // Simulate an API call

      logout();
      console.log("Logout successful", checkAuthStatus());
      // Navigate to the login screen after successful logout

      if (!isAuthenticated) {
        navigation.navigate("SignIn");
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Bem-vindo à página inicial!</Text>
      <Button title="Sair" onPress={handleLogout} />
    </SafeAreaView>
  );
}
