import fundoBg from "@/app/assets/funndo.png"
import { Button } from "@/app/components/Button"
import { Header } from "@/app/components/Header"
import { MultiStep } from "@/app/components/MultiStep"
import { useMultiStep } from "@/app/context/MultiStepContext"
import { yupResolver } from "@hookform/resolvers/yup"

import { ImageBackground } from "expo-image"
import { router } from "expo-router"
import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import * as yup from "yup"
import signinStyles from "../../Signin/styles"
import { styles } from "./styles"

import Input from "@/app/components/Input"

export default function UserInfo() {
  const { userInfo, setUserInfo } = useMultiStep()
  const [loading, setLoading] = useState(false)

  const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    dob: yup
      .mixed()
      .required("Data de nascimento é obrigatória")
      .test("is-valid-date", "Data inválida ou futura", function (value) {
        // Se não tiver valor, é inválido
        if (!value) return false

        // Se for string vazia, é inválido
        if (typeof value === "string" && value.trim() === "") return false

        // Se for string no formato DD/MM/YYYY, converte para Date
        if (typeof value === "string") {
          const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/
          const match = value.match(dateRegex)

          if (match) {
            const day = parseInt(match[1])
            const month = parseInt(match[2]) - 1
            const year = parseInt(match[3])

            const date = new Date(year, month, day)
            return (
              date.getFullYear() === year &&
              date.getMonth() === month &&
              date.getDate() === day &&
              date <= new Date()
            )
          }
          return false
        }

        // Se for uma data válida, verifica se não é futura
        if (value instanceof Date) {
          return !isNaN(value.getTime()) && value <= new Date()
        }

        return false
      }),
    cpf: yup
      .string()
      .required("CPF é obrigatório")
      .test("is-cpf", "CPF inválido", (value) => {
        if (!value) return false
        return true
      }),
    phone: yup.string().required("Telefone é obrigatório"),
  })
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...userInfo,
      dob: userInfo.dob
        ? typeof userInfo.dob === "string" || typeof userInfo.dob === "number"
          ? new Date(userInfo.dob)
          : userInfo.dob instanceof Date
          ? userInfo.dob
          : new Date()
        : new Date(),
    },
    resolver: yupResolver(schema),
  })
  useEffect(() => {
    setLoading(false)
    return () => setLoading(false)
  }, [])

  function onSubmit(data: any) {
    setLoading(true)
    setUserInfo(data)
    setTimeout(() => {
      router.push("/(auth)/register/StepAddress")
    }, 1200)
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={fundoBg} style={{ flex: 1 }}>
        <View style={styles.overlay} />
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <MultiStep
            currentStep={0}
            steps={["Usuário", "Endereco", "Veículo", "Acesso"]}
          />
          <Header
            title="Dados dos Usuários"
            onBackPress={() => router.replace("/(auth)/Signin")}
          />
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView
              contentContainerStyle={{ paddingBottom: 20 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              {/* Agrupamento visual dos campos para melhor UX */}
              <View style={{ marginBottom: 18 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginBottom: 20,
                    marginTop: 20,
                    color: "#00FFB3",
                  }}
                >
                  Dados Pessoais
                </Text>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Input
                        icon="user"
                        placeholder="Nome"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        containerStyle={signinStyles.input}
                      />
                      {errors.name && (
                        <Text style={styles.error}>{errors.name.message}</Text>
                      )}
                    </>
                  )}
                />
                <Controller
                  control={control}
                  name="dob"
                  render={({ field: { onChange, onBlur, value } }) => {
                    // Formatar a data para exibição no formato DD/MM/AAAA
                    const formatDateForDisplay = (
                      date: Date | null
                    ): string => {
                      if (!date) return ""
                      return `${date.getDate().toString().padStart(2, "0")}/${(
                        date.getMonth() + 1
                      )
                        .toString()
                        .padStart(2, "0")}/${date.getFullYear()}`
                    }

                    // Formatar o texto de entrada e converter para Date
                    const formatAndConvertDate = (text: string) => {
                      // Formata o texto para o padrão DD/MM/AAAA
                      let formattedText = text.replace(/\D/g, "")

                      if (formattedText.length > 0) {
                        if (formattedText.length > 4) {
                          formattedText = `${formattedText.substring(
                            0,
                            2
                          )}/${formattedText.substring(
                            2,
                            4
                          )}/${formattedText.substring(4, 8)}`
                        } else if (formattedText.length > 2) {
                          formattedText = `${formattedText.substring(
                            0,
                            2
                          )}/${formattedText.substring(2)}`
                        }
                      }

                      // Verifica se o formato é válido (DD/MM/AAAA)
                      const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/
                      const match = formattedText.match(dateRegex)

                      if (match && formattedText.length === 10) {
                        const day = parseInt(match[1])
                        const month = parseInt(match[2]) - 1 // Mês em JS é 0-indexed
                        const year = parseInt(match[3])

                        // Cria e valida a data
                        const date = new Date(year, month, day)
                        if (
                          date.getFullYear() === year &&
                          date.getMonth() === month &&
                          date.getDate() === day &&
                          date <= new Date() // Não permite datas futuras
                        ) {
                          return { formattedText, date }
                        }
                      }

                      return { formattedText, date: null }
                    }

                    return (
                      <>
                        <Input
                          icon="calendar"
                          placeholder="Data de Nascimento (DD/MM/AAAA)"
                          value={
                            value instanceof Date
                              ? formatDateForDisplay(value)
                              : ""
                          }
                          onChangeText={(text) => {
                            const { formattedText, date } =
                              formatAndConvertDate(text)

                            // Atualiza o campo com o texto formatado para visualização
                            setValue("dob", date || (formattedText as any), {
                              shouldValidate: true,
                              shouldDirty: true,
                            })
                          }}
                          onBlur={onBlur}
                          keyboardType="numeric"
                          maxLength={10}
                          containerStyle={signinStyles.input}
                        />

                        {errors.dob && (
                          <Text style={styles.error}>{errors.dob.message}</Text>
                        )}
                      </>
                    )
                  }}
                />
                <Controller
                  control={control}
                  name="cpf"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Input
                        icon="credit-card"
                        placeholder="CPF"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="numeric"
                        containerStyle={signinStyles.input}
                      />
                      {errors.cpf && (
                        <Text style={styles.error}>{errors.cpf.message}</Text>
                      )}
                    </>
                  )}
                />
              </View>
              <View style={{ marginBottom: 18 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginBottom: 2,
                    marginTop: 1,
                    color: "#00FFB3",
                  }}
                >
                  Contato
                </Text>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Input
                        icon="phone"
                        placeholder="Telefone"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="phone-pad"
                        containerStyle={signinStyles.input}
                      />
                      {errors.phone && (
                        <Text style={styles.error}>{errors.phone.message}</Text>
                      )}
                    </>
                  )}
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
          <Button
            title="Endereco "
            onPress={handleSubmit(onSubmit)}
            disabled={loading}
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
