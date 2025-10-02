import { Header } from "@/app/components/Header"
import { router } from "expo-router"
import React from "react"
import { KeyboardAvoidingView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { Button } from "@/app/components/Button"
import { ImageBackground } from "expo-image"

import fundoBg from "@/app/assets/funndo.png"
import { RegisterFormData } from "@/app/types/UserData"

export default function VehiclesInfo() {
  const onSubmit = (data: RegisterFormData) => {
    console.log("Cadastro completo:", data)
    // aqui você pode mandar pra API
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={fundoBg} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <Header
            title="Dados dos Veiculo"
            onBackPress={() => router.replace("/(auth)/register/UserInfo")}
          />
          {/* Area do formulario */}
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View>
              <Text>Cadastrado os dados do veículo</Text>
            </View>
          </KeyboardAvoidingView>

          <Button
            title="Ir para Criar conta"
            onPress={() => router.push("/(auth)/register/Acess")}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
