import { toastConfig } from "@/toastConfig"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import React from "react"
import Toast from "react-native-toast-message"
import { AuthProvider } from "./context/AuthContext"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        <Toast config={toastConfig} />
      </AuthProvider>
    </SafeAreaProvider>
  )
}
