import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { styles } from "./styles"

type ButtonProps = {
  title?: string
  onPress?: () => void
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
