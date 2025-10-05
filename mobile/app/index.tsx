import React, { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Signin from "./(auth)/Signin"

import Loading from "./components/Loading"
import Home from "./(tabs)/home"

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    async function checkToken() {
      try {
        const token = await AsyncStorage.getItem("token")
        setIsAuthenticated(!!token) // true se token existir
      } catch (error) {
        console.log("Erro ao verificar token:", error)
      } finally {
        setLoading(false)
      }
    }

    checkToken()
  }, [])

  if (loading) {
    return <Loading /> // Splash screen
  }

  return (
    <SafeAreaProvider>
      {isAuthenticated ? <Home /> : <Signin />}
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
