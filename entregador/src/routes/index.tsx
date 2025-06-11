import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./MainStack";
import AuthRoutes from "./AuthRoutes";
import { ToastProvider } from "react-native-toastier";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../context/AuthContext";

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated);

  if (isAuthenticated === null) {
    // Pode exibir um loading aqui se quiser
    return null;
  }

  return (
    <ToastProvider>
      <NavigationContainer>
        {isAuthenticated ? <MainStack /> : <AuthRoutes />}
      </NavigationContainer>
    </ToastProvider>
  );
}
