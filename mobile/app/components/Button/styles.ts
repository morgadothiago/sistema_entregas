import { colors } from "@/app/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    minWidth: 180,
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.active,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginVertical: 8,
  },
  default: {},

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
  },
})
