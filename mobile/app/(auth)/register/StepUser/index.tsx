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
    dob: yup
      .mixed()
      .required("Data de nascimento é obrigatória")
      .test('is-valid-date', 'Data inválida ou futura', function(value) {
        // Se não tiver valor, é inválido
        if (!value) return false;
        
        // Se for string vazia, é inválido
        if (typeof value === 'string' && value.trim() === '') return false;
        
        // Se for string no formato DD/MM/YYYY, converte para Date
        if (typeof value === 'string') {
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
          return false;
        }
        
        // Se for uma data válida, verifica se não é futura
        if (value instanceof Date) {
          return !isNaN(value.getTime()) && value <= new Date();
        }
        
        return false;
      }),
    cpf: yup.string().required("CPF é obrigatório"),
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
      dob: userInfo.dob ? new Date(userInfo.dob) : new Date(),
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
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Input
                        icon="user"
                        placeholder="Nome"
                        value={value}
                        onChangeText={onChange}
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
                  render={({ field: { onChange, value } }) => {
                    // Estado local para controlar o texto do input
                    const [inputText, setInputText] = useState(
                      value instanceof Date
                        ? `${value.getDate().toString().padStart(2, "0")}/${(
                            value.getMonth() + 1
                          )
                            .toString()
                            .padStart(2, "0")}/${value.getFullYear()}`
                        : ""
                    )
                    
                    // Função para validar e converter o texto para objeto Date
                    const handleDateChange = (text: string) => {
                      // Verifica se o formato é válido (DD/MM/YYYY)
                      const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/
                      const match = text.match(dateRegex)
                      
                      if (match) {
                        // Se o formato for válido, converte para Date
                        const day = parseInt(match[1])
                        const month = parseInt(match[2]) - 1 // Mês em JS é 0-indexed
                        const year = parseInt(match[3])
                        
                        // Verifica se a data é válida
                        const date = new Date(year, month, day)
                        if (
                          date.getFullYear() === year &&
                          date.getMonth() === month &&
                          date.getDate() === day &&
                          date <= new Date() // Não permite datas futuras
                        ) {
                          onChange(date) // Atualiza o valor do formulário com o objeto Date
                        }
                      }
                    }

                    return (
                      <>
                        <Input
                          icon="calendar"
                          placeholder="Data de Nascimento (DD/MM/AAAA)"
                          value={inputText}
                          onChangeText={(text) => {
                            // Remove caracteres não numéricos, exceto barras
                            let cleanText = text.replace(/[^\d\/]/g, '')
                            
                            // Formata automaticamente com as barras
                            if (cleanText.length > 0) {
                              // Remove barras existentes e mantém apenas números
                              const numbers = cleanText.replace(/\//g, '')
                              
                              // Reformata com barras nas posições corretas
                              if (numbers.length > 4) {
                                cleanText = `${numbers.substring(0, 2)}/${numbers.substring(2, 4)}/${numbers.substring(4, 8)}`
                              } else if (numbers.length > 2) {
                                cleanText = `${numbers.substring(0, 2)}/${numbers.substring(2)}`
                              } else {
                                cleanText = numbers
                              }
                            }
                            
                            // Limita a 10 caracteres (DD/MM/AAAA)
                            if (cleanText.length <= 10) {
                              setInputText(cleanText)
                              
                              // Tenta converter para Date se estiver no formato completo
                              if (cleanText.length === 10) {
                                handleDateChange(cleanText)
                              }
                            }
                          }}
                          keyboardType="numeric"
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
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Input
                        icon="credit-card"
                        placeholder="CPF"
                        value={value}
                        onChangeText={onChange}
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
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Input
                        icon="phone"
                        placeholder="Telefone"
                        value={value}
                        onChangeText={onChange}
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
