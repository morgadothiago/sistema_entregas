import { Header } from "@/app/components/Header"
import { MultiStep } from "@/app/components/MultiStep"
import { router } from "expo-router"
import React, { useEffect, useState } from "react"
import {
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  ScrollView,
  Text,
} from "react-native"
import { styles } from "./styles"
import signinStyles from "../../Signin/styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "@/app/components/Button"
import { ImageBackground } from "expo-image"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useMultiStep } from "@/app/context/MultiStepContext"
import fundoBg from "@/app/assets/funndo.png"

import Input from "@/app/components/Input"
import api from "@/app/service/viaCep"

type AndressType = {
  address: string
  city: string
  number: string
  complement: string
  state: string
  zipCode: string
}

export default function UserInfo() {
  const { userInfo, setUserInfo } = useMultiStep()
  const [endereco, setEndereco] = useState<AndressType | null>(null)

  const [loading, setLoading] = useState(false)
  const schema = yup.object().shape({
    address: yup.string().required("Endereço é obrigatório"),
    city: yup.string().required("Cidade é obrigatória"),
    number: yup.string().required("Número é obrigatório"),
    complement: yup.string(),
    state: yup.string().required("Estado é obrigatório"),
    zipCode: yup.string().required("CEP é obrigatório"),
  })
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: userInfo,
    resolver: yupResolver(schema),
  })
  useEffect(() => {
    setLoading(false)
    return () => setLoading(false)
  }, [])

  async function handleGetAndressCepApi() {
    // Pega o valor atual do campo zipCode do react-hook-form
    const zipCode = control._formValues?.zipCode || ""
    const cepLimpo = zipCode.replace(/\D/g, "")

    // Só valida se o campo não estiver vazio
    if (!cepLimpo) return

    if (cepLimpo.length !== 8) {
      alert("Digite o CEP válido com 8 dígitos")
      return
    }

    try {
      const { data } = await api.get(`${cepLimpo}/json/`)

      if (data.erro) {
        alert("CEP não encontrado")
        return
      }

      // Preenche os campos do formulário com os dados do ViaCEP
      // Os campos continuam editáveis normalmente
      if (data.logradouro) setValue("address", data.logradouro)
      if (data.localidade) setValue("city", data.localidade)
      if (data.uf) setValue("state", data.uf)
      if (data.cep) setValue("zipCode", data.cep)
      // number e complement ficam para o usuário preencher
      console.log("Retorno da API ViaCEP:", data)
    } catch (err) {
      alert("Erro ao buscar CEP. Tente novamente.")
    }
  }

  // Removido o useEffect que chama handleGetAndressCepApi no mount

  function onSubmit(data: any) {
    setLoading(true)
    setUserInfo(data) // Salva no contexto global
    console.log("Dados do step endereço:", data)
    setTimeout(() => {
      router.push("/(auth)/register/StepVehicles")
    }, 1200)
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={fundoBg} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <MultiStep
            currentStep={2}
            steps={["Usuário", "Endereco", "Veículo", "Acesso"]}
          />
          <Header
            title="Dados dos Enderco"
            onBackPress={() => router.replace("/(auth)/Signin")}
          />
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView
              contentContainerStyle={{ paddingBottom: 20 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={{ marginBottom: 8 }}>
                <Controller
                  control={control}
                  name="zipCode"
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Input
                        icon="map-pin"
                        placeholder="CEP"
                        value={value}
                        onChangeText={onChange}
                        onBlur={handleGetAndressCepApi}
                        keyboardType="numeric"
                        containerStyle={signinStyles.input}
                      />
                      {errors.zipCode && (
                        <Text style={{ color: "red", marginLeft: 8 }}>
                          {errors.zipCode.message}
                        </Text>
                      )}
                    </>
                  )}
                />

                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,

                    marginBottom: 5,

                    color: "#00FFB3",
                  }}
                >
                  Endereço
                </Text>
                <Controller
                  control={control}
                  name="address"
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Input
                        icon="map"
                        placeholder="Endereço"
                        value={value}
                        onChangeText={onChange}
                        containerStyle={signinStyles.input}
                      />
                      {errors.address && (
                        <Text style={{ color: "red", marginLeft: 8 }}>
                          {errors.address.message}
                        </Text>
                      )}
                    </>
                  )}
                />
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <View style={{ flex: 2 }}>
                    <Controller
                      control={control}
                      name="city"
                      render={({ field: { onChange, value } }) => (
                        <>
                          <Input
                            icon="home"
                            placeholder="Cidade"
                            value={value}
                            onChangeText={onChange}
                            containerStyle={signinStyles.input}
                          />
                          {errors.city && (
                            <Text style={{ color: "red", marginLeft: 8 }}>
                              {errors.city.message}
                            </Text>
                          )}
                        </>
                      )}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Controller
                      control={control}
                      name="state"
                      render={({ field: { onChange, value } }) => (
                        <>
                          <Input
                            icon="flag"
                            placeholder="Estado"
                            value={value}
                            onChangeText={onChange}
                            containerStyle={signinStyles.input}
                          />
                          {errors.state && (
                            <Text style={{ color: "red", marginLeft: 8 }}>
                              {errors.state.message}
                            </Text>
                          )}
                        </>
                      )}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <View style={{ flex: 1 }}>
                    <Controller
                      control={control}
                      name="number"
                      render={({ field: { onChange, value } }) => (
                        <>
                          <Input
                            icon="hash"
                            placeholder="Número"
                            value={value}
                            onChangeText={onChange}
                            keyboardType="numeric"
                            containerStyle={signinStyles.input}
                          />
                          {errors.number && (
                            <Text style={{ color: "red", marginLeft: 8 }}>
                              {errors.number.message}
                            </Text>
                          )}
                        </>
                      )}
                    />
                  </View>
                  <View style={{ flex: 2 }}>
                    <Controller
                      control={control}
                      name="complement"
                      render={({ field: { onChange, value } }) => (
                        <Input
                          icon="info"
                          placeholder="Complemento"
                          value={value}
                          onChangeText={onChange}
                          containerStyle={signinStyles.input}
                        />
                      )}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
          <Button
            title="Ir para Informações dos Veículos"
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
