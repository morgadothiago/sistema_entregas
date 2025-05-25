import React, { useEffect } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../types/RootParamsList";

export default function Home() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate("SignIn");
    }
  }, [isAuthenticated, navigation]);

  const handleLogout = async () => {
    await logout();
    // Após logout, isAuthenticated vai mudar e o useEffect vai redirecionar
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Bem-vindo à página inicial, {user?.email}!</Text>
      <Text>Token: {user?.token}</Text>
      <Button title="Sair" onPress={handleLogout} />
    </SafeAreaView>
  );
}
