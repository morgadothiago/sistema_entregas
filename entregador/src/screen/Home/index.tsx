import React, { useEffect } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../types/RootParamsList";

import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function Home() {
  const { logout, user } = useAuth();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogout = async () => {
    await logout();
    // Após logout, isAuthenticated vai mudar e o useEffect vai redirecionar
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Bem-vindo à página inicial, {user?.name}!</Text>
      <Text>Aguandando Informacoes da api de mapa do google,</Text>
      <Button
        title="Sair"
        onPress={() => {
          logout();
        }}
      />
    </SafeAreaView>
  );
}
