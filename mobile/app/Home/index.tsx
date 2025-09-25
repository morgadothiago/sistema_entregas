import { router } from "expo-router"
import React from "react"

import { Pressable, Text, View } from "react-native"

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tela Home</Text>
      <Pressable onPress={() => router.back()}>
        <Text>Voltar</Text>
      </Pressable>
    </View>
  )
}
