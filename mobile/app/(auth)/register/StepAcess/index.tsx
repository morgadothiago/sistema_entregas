import { Header } from "@/app/components/Header"
import { MultiStep } from "@/app/components/MultiStep"
import { router } from "expo-router"
import React, { useState } from "react"
import {
  KeyboardAvoidingView,
  Text,
  View,
  ActivityIndicator,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { Button } from "@/app/components/Button"
import { ImageBackground } from "expo-image"

import fundoBg from "@/app/assets/funndo.png"

export default function Acess() {
  const [loading, setLoading] = useState(false)
  React.useEffect(() => {
    setLoading(false)
    return () => setLoading(false)
  }, [])

  function handleFinish() {
    setLoading(true)
    setTimeout(() => {
      router.replace("/(auth)/Signin")
      // Não precisa de setLoading(false) aqui
    }, 1200)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={fundoBg} style={{ flex: 1 }}>
        <View style={styles.overlay} />
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <Header
            title="ACESSO AO APLICATIVO"
            onBackPress={() => router.replace("/(auth)/register/StepVehicles")}
          />
          <MultiStep
            currentStep={3}
            steps={["Usuário", "Endereco", "Veículo", "Acesso"]}
          />
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View>
              <Text>Criar acesso ao app</Text>
            </View>
          </KeyboardAvoidingView>
          <Button
            title="Finalizar Cadastro"
            onPress={handleFinish}
            disabled={loading}
          />
          {loading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#fff" />
            </View>
          )}
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
