import { router } from "expo-router"
import React from "react"

import { useAuth } from "@/app/context/AuthContext"
import { Pressable, Text, View } from "react-native"

export default function Home() {
  const { user, signOut, token } = useAuth()

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
        <Text>{user?.DeliveryMan?.Address?.city}</Text>
        <Text>{token}</Text>
      </Pressable>

      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  )
}
