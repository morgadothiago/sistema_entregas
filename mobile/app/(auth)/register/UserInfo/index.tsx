import { Header } from "@/app/components/Header"
import { router } from "expo-router"
import React, { useEffect, useState } from "react"
import { KeyboardAvoidingView, Text, View, TextInput } from "react-native"
import { styles } from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "@/app/components/Button"
import { ImageBackground } from "expo-image"
import { useFormContext } from "react-hook-form"
import fundoBg from "@/app/assets/funndo.png"
import { UserInfoData } from "../../../types/UserData"
import Input from "@/app/components/Input"
import { api } from "@/app/service/api"

export default function UserInfo() {
  const { register, setValue } = useFormContext<UserInfoData>()
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(100)
  const [vehicleTypes, setVehicleTypes] = useState<string[]>([])

  async function loadVehicleData() {
    const response = await api.get("/vehicle-types", {
      params: { page, limit },
    })

    setVehicleTypes(response.data)
    console.log("Tipos de veículos carregados:", response.data)
  }
  useEffect(() => {
    loadVehicleData()
  }, [])

  console.log("Tipos de veículos disponíveis:", vehicleTypes)
  return (
    <View style={styles.container}>
      <ImageBackground source={fundoBg} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
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
            onPress={() => router.push("/(auth)/register/VehiclesInfo")}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
