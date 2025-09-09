import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { MainStack } from "./MainStack"
import { useAuth } from "../context/AuthContext"
import AuthRoutes from "./AuthRoutes"
import { Loading } from "../components/Loading"

import { ToastProvider } from "react-native-toastier"

export default function AppRoutes() {
  const { isAuthenticated, user, isLoading } = useAuth()

  if (isLoading) {
    return <Loading onFinish={() => {}} simple={true} />
  }

  return (
    <ToastProvider>
      <NavigationContainer>
        {isAuthenticated ? <MainStack /> : <AuthRoutes />}
      </NavigationContainer>
    </ToastProvider>
  )
}
