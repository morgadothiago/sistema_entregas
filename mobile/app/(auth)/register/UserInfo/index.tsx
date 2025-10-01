import { router } from "expo-router"
import React from "react"
import { Button, Text, View } from "react-native"

export default function UserInfo() {
  return (
    <View>
      <Text>User Info Screen</Text>
      <Button
        title="Go to Vichlels Info"
        onPress={() => router.push("/(auth)/register/infoVichils")}
      />
    </View>
  )
}
