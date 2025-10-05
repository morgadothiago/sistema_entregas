import { Redirect, router } from "expo-router"
import React from "react"

import { Pressable, Text, View } from "react-native"
import { useAuth } from "../context/AuthContext"

export default function Home() {
  const { user, signOut } = useAuth()

  const handleLogout = async () => {
    await signOut() // limpa token e usuário
    router.replace("/(auth)/Signin") // redireciona para login
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tela Home: {user?.DeliveryMan?.name}</Text>
      <Pressable onPress={() => router.back()}>
        <Text>Voltar</Text>
      </Pressable>

      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  )
}
