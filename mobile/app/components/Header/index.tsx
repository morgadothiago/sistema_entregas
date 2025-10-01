import { Feather } from "@expo/vector-icons"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { colors } from "@/app/theme"
import { router } from "expo-router"

type HeaderProps = {
  title?: string
}

export function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.back()
        }}
      >
        <Feather name="arrow-left" size={35} color={colors.buttons} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
