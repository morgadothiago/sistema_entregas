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
import { RegisterFormData } from "@/app/types/UserData"
import { AppPicker } from "@/app/components/Select"

type VehicleTypeOption = { label: string; value: string }

export default function VehiclesInfo() {
  const { userInfo, setUserInfo } = useMultiStep()
  const { vehicleInfo, setVehicleInfo } = useMultiStep()
  const { control, handleSubmit, setValue } = useForm<RegisterFormData>({
    defaultValues: vehicleInfo || {},
  })

  const [page] = useState(1)
  const [limit] = useState(100)
  const [vehicleTypes, setVehicleTypes] = useState<VehicleTypeOption[]>([])
  const [loading, setLoading] = useState(false)

  const [selected, setSelected] = useState<VehicleTypeOption | undefined>(
    undefined
  )

  async function loadVehicleData() {
    try {
      setLoading(true)
      const response = await api.get("/vehicle-types", {
        params: { page, limit },
      })

      // Corrigido: acessa response.data.data
      const data = Array.isArray(response.data?.data) ? response.data.data : []

      const formattedOptions = data.map((item: { type: string }) => ({
        label: item.type,
        value: item.type,
      }))

      setVehicleTypes(formattedOptions)

      // Seleciona automaticamente a primeira opção
      if (formattedOptions.length > 0 && !selected) {
        setSelected(formattedOptions[0])
      }

      console.log("Resposta completa da API:", response)
      console.log("response.data:", response.data)
      console.log("Tipo de veiculo", formattedOptions)
    } catch (error) {
      console.error("Erro ao carregar os tipos de veículo:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadVehicleData()
  }, [])

  async function handleNextStep() {
    if (selected) {
      // Salva o objeto completo no contexto
      setVehicleInfo({ ...vehicleTypes, vehicleType: selected })
    }

    setLoading(true)
    setTimeout(() => {
      router.push("/(auth)/register/StepAcess")
    }, 2500)
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
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            {vehicleTypes.length > 0 ? (
              <AppPicker
                label="Selecione o tipo de veículo"
                selectedValue={selected}
                onValueChange={(v: VehicleTypeOption) => setSelected(v)}
                options={vehicleTypes}
              />
            ) : (
              <ActivityIndicator size="small" color="#fff" />
            )}
          </KeyboardAvoidingView>
          <Button
            title="Ir para Informações de Acesso"
            onPress={handleNextStep}
            disabled={loading || vehicleTypes.length === 0}
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
