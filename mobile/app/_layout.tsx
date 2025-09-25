import { toastConfig } from "@/toastConfig"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import React from "react"
import Toast from "react-native-toast-message"

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <Toast config={toastConfig} />
    </>
  )
}
