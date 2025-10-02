import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { styles } from "./styles"

type ButtonProps = {
  title?: string
  onPress?: () => void
  disabled?: boolean
}
export function Button({ title, onPress, disabled }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, disabled && { opacity: 0.6 }]}
      disabled={disabled}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
