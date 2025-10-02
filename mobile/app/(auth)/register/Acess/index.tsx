import { Header } from "@/app/components/Header"
import { router } from "expo-router"
import React from "react"
import { KeyboardAvoidingView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { Button } from "@/app/components/Button"
import { ImageBackground } from "expo-image"

import fundoBg from "@/app/assets/funndo.png"

export default function Acess() {
  return (
    <View style={styles.container}>
      <ImageBackground source={fundoBg} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <Header
            title="ACESSO AO APLICATIVO"
            onBackPress={() => router.replace("/(auth)/register/VehiclesInfo")}
          />
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View>
              <Text>Criar acesso ao app</Text>
            </View>
          </KeyboardAvoidingView>
          <Button
            title="Finalizar Cadastro"
            onPress={() => router.replace("/(auth)/register/VehiclesInfo")}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
