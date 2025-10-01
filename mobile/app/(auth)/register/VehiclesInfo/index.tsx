import { Header } from "@/app/components/Header"
import { router } from "expo-router"
import React from "react"
import { KeyboardAvoidingView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { Button } from "@/app/components/Button"

export default function VehiclesInfo() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Dados dos Veículos" />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={styles.content}>
            <Text>Modelo:</Text>
            <Text>Dados dos Veículos</Text>
          </View>

          <Button
            title="Ir para proxima etapa"
            onPress={() => router.push("/(auth)/register/Acess")}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  )
}
