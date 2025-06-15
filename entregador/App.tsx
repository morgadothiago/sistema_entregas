import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { useState } from "react";
import AppRoutes from "./src/routes";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_600SemiBold,
    Roboto_700Bold,
  });
  const [appReady, setAppReady] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  // Mostra a splash personalizada até chamar onFinish no Loading
  if (!appReady) {
    return <Loading onFinish={() => setAppReady(true)} />;
  }

  return (
    <AuthProvider>
      <StatusBar
        barStyle="light-content" // ou "dark-content" dependendo do fundo
      />

      <AppRoutes />
    </AuthProvider>
  );
}
