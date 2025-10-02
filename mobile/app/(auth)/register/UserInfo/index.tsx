import { Header } from "@/app/components/Header"
import { router } from "expo-router"
import React from "react"
import { KeyboardAvoidingView, Text, View } from "react-native"
import { styles } from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "@/app/components/Button"
import { ImageBackground } from "expo-image"

import fundoBg from "@/app/assets/funndo.png"

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <ImageBackground source={fundoBg} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <Header
            title="Dados dos Usuários"
            onBackPress={() => router.replace("/(auth)/Signin")}
          />
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View>
              <Text>Foto do Usuário</Text>
            </View>
            <Text>Dados dos Usuários</Text>
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
