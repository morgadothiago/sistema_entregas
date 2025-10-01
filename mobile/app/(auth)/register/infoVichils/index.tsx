import { router } from "expo-router"
import React from "react"
import { Text, View } from "react-native"

export default function VichlelsInfo() {
  return (
    <View>
      <Text>Vichlels Info Screen</Text>
      <Text onPress={() => router.push("/(auth)/register/Acess")}>
        Go to Acees
      </Text>
    </View>
  )
}
