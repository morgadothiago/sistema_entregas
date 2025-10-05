import fundoBg from "@/app/assets/funndo.png"
import { Button } from "@/app/components/Button"
import { Header } from "@/app/components/Header"
import Input from "@/app/components/Input"
import { MultiStep } from "@/app/components/MultiStep"
import { useMultiStep } from "@/app/context/MultiStepContext"
import { newAccount } from "@/app/service/api"
import { ImageBackground } from "expo-image"

import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import signinStyles from "../../Signin/styles"
import { styles } from "./styles"
import { Route } from "expo-router"
import { router } from "expo-router"

type AccessFormData = {
  email: string
  password: string
  confirmPassword: string
}

export default function AccessStep() {
  const [loading, setLoading] = useState(false)
  const { userInfo, setUserInfo } = useMultiStep()

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<AccessFormData>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function handleFinish(data: AccessFormData) {
    setLoading(true)

    // pega todos os dados coletados nos steps anteriores
    const completeData = {
      ...userInfo, // dados dos steps anteriores
      email: data.email,
      password: data.password,
    }
    console.log(data)

    // envia para a API
    newAccount(completeData)
      .then((res) => {
        router.replace("/(auth)/Signin")
      })
      .catch((err) => {
        console.log("Erro no cadastro:", err.message)
      })
      .finally(() => setLoading(false))
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={fundoBg} style={{ flex: 1 }}>
        <View style={styles.overlay} />
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <Header
            title="ACESSO AO APLICATIVO"
            onBackPress={() => router.replace("/(auth)/register/StepVehicles")}
          />
          <MultiStep
            currentStep={3}
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
              {/* Email */}
              <Controller
                control={control}
                name="email"
                rules={{
                  required: "Email é obrigatório",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email inválido",
                  },
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <>
                    <Input
                      icon="mail"
                      placeholder="Email"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      containerStyle={signinStyles.input}
                    />
                    {errors.email && (
                      <Text style={styles.error}>{errors.email.message}</Text>
                    )}
                  </>
                )}
              />

              {/* Senha */}
              <Controller
                control={control}
                name="password"
                rules={{
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 6,
                    message: "Senha deve ter pelo menos 6 caracteres",
                  },
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <>
                    <Input
                      icon="lock"
                      placeholder="Senha"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      containerStyle={signinStyles.input}
                      secureTextEntry
                    />
                    {errors.password && (
                      <Text style={styles.error}>
                        {errors.password.message}
                      </Text>
                    )}
                  </>
                )}
              />

              {/* Confirmar Senha */}
              <Controller
                control={control}
                name="confirmPassword"
                rules={{
                  required: "Confirme sua senha",
                  validate: (value) =>
                    value === getValues("password") ||
                    "As senhas não coincidem",
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <>
                    <Input
                      icon="lock"
                      placeholder="Confirmar Senha"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      containerStyle={signinStyles.input}
                      secureTextEntry
                    />
                    {errors.confirmPassword && (
                      <Text style={styles.error}>
                        {errors.confirmPassword.message}
                      </Text>
                    )}
                  </>
                )}
              />
            </ScrollView>

            <Button
              title="Finalizar Cadastro"
              onPress={handleSubmit(handleFinish)}
              disabled={loading}
            />

            {loading && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" color="#fff" />
              </View>
            )}
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
