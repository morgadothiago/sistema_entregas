import { colors } from "@/app/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  FormArea: {
    backgroundColor: "red",
    flex: 1,
  },
  content: {
    marginBottom: 20,
    gap: 10,
    justifyContent: "space-between",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
  },
})
