import { colors } from "@/app/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  button: {
    padding: 8,
  },
  title: {
    color: colors.buttons,
    fontSize: 22,
    fontWeight: "bold",
  },
})
