import fundoBg from "@/app/assets/funndo.png"
import { Button } from "@/app/components/Button"
import { Header } from "@/app/components/Header"
import { MultiStep } from "@/app/components/MultiStep"
import { useMultiStep } from "@/app/context/MultiStepContext"
import { api } from "@/app/service/api"
import { RegisterFormData } from "@/app/types/UserData"
import { ImageBackground } from "expo-image"
import { router } from "expo-router"
import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { AppPicker } from "@/app/components/Select"

type VehicleTypeOption = {
  label: string
  value: string
}

export default function VehiclesInfo() {
  const { userInfo, setUserInfo } = useMultiStep()
  const { control, handleSubmit, watch } = useForm<RegisterFormData>({
    defaultValues: userInfo,
  })

  const [page] = useState(1)
  const [limit] = useState(100)
  const [vehicleTypes, setVehicleTypes] = useState<VehicleTypeOption[]>([])
  const [loading, setLoading] = useState(false)

  const selectedVehicleType = watch("vehicleType")

  async function loadVehicleData() {
    try {
      setLoading(true)

      const response = await api.get("/vehicle-types", {
        params: { page, limit },
      })

      const data = Array.isArray(response.data?.data) ? response.data.data : []

      const formattedOptions = data.map(
        (item: { id: number; type: string }) => ({
          label: item.type,
          value: item.type, // Usar o nome como valor simplifica o controle
        })
      )

      setVehicleTypes(formattedOptions)
    } catch (error) {
      console.error("Erro ao carregar os tipos de veículo:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadVehicleData()
  }, [])

  // Esta função será chamada pelo react-hook-form com os dados atualizados
  function handleNextStep(data: RegisterFormData) {
    setLoading(true)
    // 1. Atualiza o contexto com os dados do formulário
    setUserInfo(data)

    // 2. Mostra no console todos os dados coletados até agora
    console.log(
      "dados do step ate agora",
      "Dados coletados até o StepVehicles:",
      data
    )

    setLoading(false)

    // 3. Navega para o próximo passo
    // router.push("/(auth)/register/StepAcess")
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={fundoBg} style={{ flex: 1 }}>
        <View style={styles.overlay} />
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <Header
            title="Dados do Veículo"
            onBackPress={() => router.replace("/(auth)/register/StepUser")}
          />
          <MultiStep
            currentStep={2}
            steps={["Usuário", "Endereco", "Veículo", "Acesso"]}
          />
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            {loading && vehicleTypes.length === 0 ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Controller
                control={control}
                name="vehicleType" // Nome do campo no formulário
                rules={{ required: "Selecione um tipo de veículo" }}
                render={({ field: { onChange, value } }) => (
                  <AppPicker
                    label="Selecione o tipo de veículo"
                    selectedValue={value?.value?.toString()}
                    onValueChange={(itemValue: string) =>
                      onChange({ label: itemValue, value: itemValue })
                    }
                    options={vehicleTypes}
                  />
                )}
              />
            )}
          </KeyboardAvoidingView>
          <Button
            title="Ir para Informações de Acesso"
            onPress={handleSubmit(handleNextStep)}
            disabled={loading || !selectedVehicleType}
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
