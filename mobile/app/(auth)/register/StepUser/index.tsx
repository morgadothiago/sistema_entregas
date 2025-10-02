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

export default function UserInfo() {
  const { userInfo, setUserInfo } = useMultiStep()
  const [loading, setLoading] = useState(false)
  const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    dob: yup.string().required("Data de nascimento é obrigatória"),
    cpf: yup.string().required("CPF é obrigatório"),
    phone: yup.string().required("Telefone é obrigatório"),
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
    formState: { errors },
  } = useForm({
    defaultValues: userInfo,
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
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <MultiStep currentStep={0} steps={["Usuário", "Veículo", "Acesso"]} />
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
                        <Text style={{ color: "red", marginLeft: 8 }}>
                          {errors.name.message}
                        </Text>
                      )}
                    </>
                  )}
                />
                <Controller
                  control={control}
                  name="dob"
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Input
                        icon="calendar"
                        placeholder="Data de Nascimento"
                        value={value}
                        onChangeText={onChange}
                        containerStyle={signinStyles.input}
                      />
                      {errors.dob && (
                        <Text style={{ color: "red", marginLeft: 8 }}>
                          {errors.dob.message}
                        </Text>
                      )}
                    </>
                  )}
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
                        <Text style={{ color: "red", marginLeft: 2 }}>
                          {errors.cpf.message}
                        </Text>
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
                        <Text style={{ color: "red", marginLeft: 8 }}>
                          {errors.phone.message}
                        </Text>
                      )}
                    </>
                  )}
                />
              </View>
              <View style={{ marginBottom: 8 }}>
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
                <Controller
                  control={control}
                  name="zipCode"
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Input
                        icon="mail"
                        placeholder="CEP"
                        value={value}
                        onChangeText={onChange}
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
