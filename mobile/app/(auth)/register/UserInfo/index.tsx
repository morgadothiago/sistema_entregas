import { Header } from "@/app/components/Header"
import { router } from "expo-router"
import React from "react"
import { KeyboardAvoidingView, Text, View } from "react-native"
import { styles } from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "@/app/components/Button"

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Dados dos Usuários" />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <Text>Dados dos Usuários</Text>
        </KeyboardAvoidingView>
        <Button
          title="Ir para Informações dos Veículos"
          onPress={() => router.push("/(auth)/register/VehiclesInfo")}
        />
      </SafeAreaView>
    </View>
  )
}
