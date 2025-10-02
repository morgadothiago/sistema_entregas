import fundoBg from "@/app/assets/funndo.png"
import { Button } from "@/app/components/Button"
import { Header } from "@/app/components/Header"
import Input from "@/app/components/Input"
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
  ScrollView,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { AppPicker } from "@/app/components/Select"
import signinStyles from "../../Signin/styles"

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

  // Observa os campos para habilitar o botão de avançar
  const selectedVehicleType = watch("vehicleType.value")
  const licensePlate = watch("licensePlate")
  const brand = watch("brand")
  const model = watch("model")
  const year = watch("year")
  const color = watch("color")
  const isButtonDisabled =
    !selectedVehicleType || !licensePlate || !brand || !model || !year || !color

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
    console.log("Dados coletados até o StepVehicles:", data)

    // 3. Navega para o próximo passo (descomente para ativar)
    router.push("/(auth)/register/StepAcess")
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={fundoBg} style={{ flex: 1 }}>
        <View style={styles.overlay} />
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <Header
            title="Dados do Veículo"
            onBackPress={() => router.replace("/(auth)/register/StepAddress")}
          />
          <MultiStep
            currentStep={2}
            steps={["Usuário", "Endereco", "Veículo", "Acesso"]}
          />
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            <ScrollView
              contentContainerStyle={{ paddingBottom: 20 }}
              showsVerticalScrollIndicator={false}
            >
              {loading && vehicleTypes.length === 0 ? (
                <ActivityIndicator size="large" color="#fff" />
              ) : (
                <Controller
                  control={control}
                  name="vehicleType"
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
              <Controller
                control={control}
                name="licensePlate"
                rules={{ required: "A placa é obrigatória" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    icon="credit-card"
                    placeholder="Placa do Veículo"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    autoCapitalize="characters"
                    containerStyle={signinStyles.input}
                  />
                )}
              />
              <Controller
                control={control}
                name="brand"
                rules={{ required: "A marca é obrigatória" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    icon="tag"
                    placeholder="Marca"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    containerStyle={signinStyles.input}
                  />
                )}
              />
              <Controller
                control={control}
                name="model"
                rules={{ required: "O modelo é obrigatório" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    icon="truck"
                    placeholder="Modelo"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    containerStyle={signinStyles.input}
                  />
                )}
              />
              <View style={{ flexDirection: "row", gap: 8 }}>
                <View style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    name="year"
                    rules={{ required: "O ano é obrigatório" }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        icon="calendar"
                        placeholder="Ano"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="numeric"
                        containerStyle={signinStyles.input}
                      />
                    )}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    name="color"
                    rules={{ required: "A cor é obrigatória" }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        icon="droplet"
                        placeholder="Cor"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        containerStyle={signinStyles.input}
                      />
                    )}
                  />
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
          <Button
            title="Ir para Informações de Acesso"
            onPress={handleSubmit(handleNextStep)}
            disabled={loading || isButtonDisabled}
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
