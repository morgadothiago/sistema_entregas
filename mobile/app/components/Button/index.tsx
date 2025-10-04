import React from "react"
import { Text, TouchableOpacity } from "react-native"
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
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
