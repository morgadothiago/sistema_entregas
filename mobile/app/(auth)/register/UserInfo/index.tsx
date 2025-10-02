import { Header } from "@/app/components/Header"
import { MultiStep } from "@/app/components/MultiStep"
import { router } from "expo-router"
import React, { useEffect, useState } from "react"
import {
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native"
import { styles } from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "@/app/components/Button"
import { ImageBackground } from "expo-image"
import { set, useFormContext } from "react-hook-form"
import fundoBg from "@/app/assets/funndo.png"
import { UserInfoData } from "../../../types/UserData"
import Input from "@/app/components/Input"
import { api } from "@/app/service/api"

export default function UserInfo() {
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
      router.push("/(auth)/register/VehiclesInfo")
      // Não precisa de setLoading(false) aqui
    }, 1200)
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={fundoBg} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <MultiStep currentStep={0} steps={["Usuário", "Veículo", "Acesso"]} />
          <Header
            title="Dados dos Usuários"
            onBackPress={() => router.replace("/(auth)/Signin")}
          />
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            {/* Area do formulario Usuario */}
            {/* ... demais campos */}
          </KeyboardAvoidingView>
          <Button
            title="Ir para Informações dos Veículos"
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
