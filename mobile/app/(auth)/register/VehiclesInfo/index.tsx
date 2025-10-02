import fundoBg from "@/app/assets/funndo.png"
import { Button } from "@/app/components/Button"
import { Header } from "@/app/components/Header"
import { MultiStep } from "@/app/components/MultiStep"
import { useMultiStep } from "@/app/context/MultiStepContext"
import { api } from "@/app/service/api"
import { ImageBackground } from "expo-image"
import { router } from "expo-router"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { ActivityIndicator, KeyboardAvoidingView, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"

export default function VehiclesInfo() {
  const { userInfo, setUserInfo } = useMultiStep()
  const { vehicleInfo, setVehicleInfo } = useMultiStep()
  const { control, handleSubmit } = useForm({
    defaultValues: userInfo,
  })
  // Mostrar no console o que está sendo passado
  useEffect(() => {
    console.log("UserInfo recebido no VehiclesInfo:", userInfo)
  }, [userInfo])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(100)
  const [vehicleTypes, setVehicleTypes] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  async function loadVehicleData() {
    const response = await api.get("/vehicle-types", {
      params: { page, limit },
    })
    setVehicleTypes(response.data)
  }
  useEffect(() => {
    setLoading(false)
    loadVehicleData()
    // Garantir que o loading sempre seja resetado ao montar
    return () => setLoading(false)
  }, [])
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
          {/* Removido quadro branco e bloco extra, apenas campos do veículo devem aparecer aqui */}
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
          ></KeyboardAvoidingView>
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
