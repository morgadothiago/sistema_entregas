import { Header } from "@/app/components/Header"
import { MultiStep } from "@/app/components/MultiStep"
import { router } from "expo-router"
import React, { useEffect, useState } from "react"
import { ActivityIndicator } from "react-native"
import { KeyboardAvoidingView, View } from "react-native"
import { styles } from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "@/app/components/Button"
import { ImageBackground } from "expo-image"
import { useFormContext } from "react-hook-form"
import fundoBg from "@/app/assets/funndo.png"
import { UserInfoData } from "../../../types/UserData"
import Input from "@/app/components/Input"
import { api } from "@/app/service/api"

export default function VehiclesInfo() {
  const { register, setValue } = useFormContext<UserInfoData>()
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(100)
  const [vehicleTypes, setVehicleTypes] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  async function loadVehicleData() {
    const response = await api.get("/vehicle-types", {
      params: { page, limit },
    })
    setVehicleTypes(response.data)
    console.log("Tipos de veículos carregados:", response.data)
  }
  useEffect(() => {
    setLoading(false)
    loadVehicleData()
    // Garantir que o loading sempre seja resetado ao montar
    return () => setLoading(false)
  }, [])

  console.log("Tipos de veículos disponíveis:", vehicleTypes)
  async function handleNextStep() {
    setLoading(true)
    setTimeout(() => {
      router.push("/(auth)/register/Acess")
      // Não precisa de setLoading(false) aqui
    }, 2500)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={fundoBg} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <MultiStep currentStep={1} steps={["Usuário", "Veículo", "Acesso"]} />
          <Header
            title="Dados do Veículo"
            onBackPress={() => router.replace("/(auth)/register/UserInfo")}
          />
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            {/* Área do formulário Veículo */}
            {/* ... campos de veículo */}
          </KeyboardAvoidingView>
          <Button
            title="Ir para Informações de Acesso"
            onPress={handleNextStep}
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
