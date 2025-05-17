import { Button, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "../../types/RootParamsList";
import type { StackNavigationProp } from "@react-navigation/stack";

export default function SignInScreen() {
  const { login, isAuthenticated } = useAuth();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Simulate a login function
  const handleLogin = async () => {
    await login();
    navigation.navigate("Home");
  };

  return (
    <View>
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
