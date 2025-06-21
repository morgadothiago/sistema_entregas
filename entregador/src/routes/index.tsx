import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./MainStack";
import { useAuth } from "../context/AuthContext";
import AuthRoutes from "./AuthRoutes";

import { ToastProvider } from "react-native-toastier";

export default function AppRoutes() {
  const { isAuthenticated, user } = useAuth();

  return (
    <ToastProvider>
      <NavigationContainer>
        {isAuthenticated && user?.role === "delivery" ? (
          <MainStack />
        ) : (
          <AuthRoutes />
        )}
      </NavigationContainer>
    </ToastProvider>
  );
}
