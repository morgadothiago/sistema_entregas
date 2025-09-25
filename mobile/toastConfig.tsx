import React from "react"
import { BaseToast, ErrorToast } from "react-native-toast-message"

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: "#00C851",
        backgroundColor: "#e6fffa",
        marginTop: 20,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontSize: 16, fontWeight: "bold", color: "#004d40" }}
      text2Style={{ fontSize: 14, color: "#00695c" }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "#ff4444", backgroundColor: "#ffebee" }}
      text1Style={{ fontSize: 16, fontWeight: "bold", color: "#b71c1c" }}
      text2Style={{ fontSize: 14, color: "#d32f2f" }}
    />
  ),
}
