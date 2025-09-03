import React from "react"
import {
  View,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native"

import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { signUpSchema, SignUpFormData } from "../../util/schemasValidations"

import { styles } from "./styles"
import Header from "../../components/Header"
import { Input } from "../../components/Input"
import Button from "../../components/Button"
import { theme } from "../../global/theme"
import { useNavigation } from "@react-navigation/native"
import { api } from "../../services/api"
import { showAppToast, showErrorToast } from "../../util/Toast"
import { VehicleTypeSelect } from "../../components/VehicleTypeSelect"

const convertValuesToStrings = (obj: any): any => {
  const newObj: any = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (
        obj[key] !== null &&
        typeof obj[key] === "object" &&
        !Array.isArray(obj[key])
      ) {
        newObj[key] = convertValuesToStrings(obj[key])
      } else if (Array.isArray(obj[key])) {
        newObj[key] = obj[key].map((item: any) => {
          if (typeof item === "object" && item !== null) {
            return convertValuesToStrings(item)
          }
          return String(item === null || item === undefined ? "" : item)
        })
      } else {
        newObj[key] = String(
          obj[key] === null || obj[key] === undefined ? "" : obj[key]
        )
      }
    }
  }
  return newObj
}

export default function Signup() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  })

  const navigation = useNavigation()

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    try {
      // Verifica se as senhas são iguais
      if (data.password !== data.confirmPassword) {
        showAppToast({
          message:
            "As senhas não coincidem. Por favor, verifique e tente novamente.",
          type: "danger",
          title: "Atenção ⚠️",
        })
        return
      }

      // Formata a data para ISO 8601
      const [day, month, year] = data.dob.split("-")
      const isoDate = `${year}-${month}-${day}T00:00:00.000Z`

      // Prepara os dados no formato exato que a API espera
      const formattedData = {
        name: data.name,
        email: data.email,
        dob: isoDate,
        cpf: data.cpf,
        password: data.password,
        phone: data.phone,
        address: data.address.street,
        city: data.address.city,
        number: data.address.number,
        complement: data.address.complement || "",
        state: data.address.state,
        zipCode: data.address.zipCode,
        licensePlate: data.vehicle.licensePlate,
        brand: data.vehicle.brand,
        model: data.vehicle.model,
        year: data.vehicle.year,
        color: data.vehicle.color,
        vehicleType: data.vehicle.vehicleType,
      }

      console.log(
        "Dados formatados para envio:",
        JSON.stringify(formattedData, null, 2)
      )
      const response = await api.post("/auth/signup/deliveryman", formattedData)
      console.log("Resposta da API:", response.data)

      console.log("Resposta de satus", response.statusText)

      showAppToast({
        message: response.data.message || "",
        type: "success",
      })

      navigation.navigate("SignIn")
    } catch (err: any) {
      console.log("Erro completo:", JSON.stringify(err.response?.data, null, 2))

      if (err.response?.status === 422) {
        // Verifica campos vazios nos dados enviados
        const checkEmptyFields = (obj: any, prefix = "") => {
          const emptyFields: string[] = []

          for (const [key, value] of Object.entries(obj)) {
            const fieldName = prefix ? `${prefix}.${key}` : key

            if (value === null || value === undefined || value === "") {
              emptyFields.push(fieldName)
            } else if (typeof value === "object" && !Array.isArray(value)) {
              emptyFields.push(...checkEmptyFields(value, fieldName))
            }
          }

          return emptyFields
        }

        const emptyFields = checkEmptyFields(data)
        console.log("Campos vazios encontrados:", emptyFields)

        // Mostra os erros de validação da API
        if (err.response.data.message) {
          const errorMessages = err.response.data.message
            .map((error: any) => {
              if (typeof error === "object") {
                return Object.entries(error)
                  .map(([field, messages]) => {
                    const fieldName =
                      {
                        dob: "Data de nascimento",
                        licensePlate: "Placa",
                        brand: "Marca",
                        model: "Modelo",
                        year: "Ano",
                        color: "Cor",
                        vehicleType: "Tipo do veículo",
                        address: "Endereço",
                        city: "Cidade",
                        number: "Número",
                        complement: "Complemento",
                        state: "Estado",
                        zipCode: "CEP",
                      }[field] || field

                    return `${fieldName}: ${
                      Array.isArray(messages) ? messages.join(", ") : messages
                    }`
                  })
                  .join("\n")
              }
              return error
            })
            .join("\n")

          showAppToast({
            message: `Ops! Encontramos alguns problemas:\n\n${errorMessages}`,
            type: "danger",
            title: "Atenção ⚠️",
          })
        }
      } else if (err.response?.status === 409) {
        showAppToast({
          message: err.response?.data?.message || "",
          type: "danger",
        })
      } else {
        showErrorToast(err.response?.data?.message || "")
      }
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Header
              title="Cadastre-se"
              icon="arrow-left"
              onPress={() => navigation.goBack()}
            />
            <ScrollView
              style={styles.form}
              contentContainerStyle={{ paddingBottom: 10 }}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.sectionTitle}>Dados Pessoais</Text>
              <View style={styles.inputGroup}>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label="Nome"
                      placeholder="Digite seu nome"
                      value={value}
                      onChangeText={onChange}
                      placeholderTextColor={theme.colors.button}
                      error={errors.name?.message}
                    />
                  )}
                />
              </View>

              <View style={styles.inputGroup}>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label="Email"
                      placeholder="Digite seu email"
                      value={value}
                      onChangeText={onChange}
                      placeholderTextColor={theme.colors.button}
                      error={errors.email?.message}
                    />
                  )}
                />
              </View>

              <View style={styles.inputGroup}>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label="Telefone"
                      placeholder="(XX) XXXXX-XXXX"
                      value={value}
                      onChangeText={onChange}
                      placeholderTextColor={theme.colors.button}
                      error={errors.phone?.message}
                    />
                  )}
                />
              </View>

              <View style={styles.row}>
                <View style={styles.rowItem}>
                  <Controller
                    control={control}
                    name="dob"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        label="Data de Nascimento"
                        placeholder="DD-MM-AAAA"
                        value={value}
                        onChangeText={(text) => {
                          const numbers = text.replace(/\D/g, "")
                          let formatted = numbers
                          if (numbers.length > 2) {
                            formatted = `${numbers.slice(0, 2)}-${numbers.slice(
                              2,
                              4
                            )}`
                            if (numbers.length > 4) {
                              formatted += `-${numbers.slice(4, 8)}`
                            }
                          }
                          onChange(formatted)
                        }}
                        placeholderTextColor={theme.colors.button}
                        error={errors.dob?.message}
                      />
                    )}
                  />
                </View>
                <View style={styles.rowItem}>
                  <Controller
                    control={control}
                    name="cpf"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        label="CPF"
                        placeholder="Digite seu CPF"
                        value={value}
                        onChangeText={onChange}
                        placeholderTextColor={theme.colors.button}
                        error={errors.cpf?.message}
                      />
                    )}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label="Senha"
                      placeholder="Digite sua senha"
                      value={value}
                      onChangeText={onChange}
                      secureTextEntry
                      placeholderTextColor={theme.colors.button}
                      error={errors.password?.message}
                    />
                  )}
                />
              </View>

              <View style={styles.inputGroup}>
                <Controller
                  control={control}
                  name="confirmPassword"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label="Confirmar Senha"
                      placeholder="Confirme sua senha"
                      value={value}
                      onChangeText={onChange}
                      secureTextEntry
                      placeholderTextColor={theme.colors.button}
                      error={errors.confirmPassword?.message}
                    />
                  )}
                />
              </View>

              <Text style={styles.sectionTitle}>Dados de Endereço</Text>
              <View style={styles.inputGroup}>
                <Controller
                  control={control}
                  name="address.street"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label="Rua"
                      placeholder="Digite o nome da rua"
                      value={value}
                      onChangeText={onChange}
                      placeholderTextColor={theme.colors.button}
                      error={errors.address?.street?.message}
                    />
                  )}
                />
              </View>

              <View style={styles.row}>
                <View style={styles.rowItem}>
                  <Controller
                    control={control}
                    name="address.number"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        label="Número"
                        placeholder="123"
                        value={value}
                        onChangeText={onChange}
                        keyboardType="numeric"
                        placeholderTextColor={theme.colors.button}
                        error={errors.address?.number?.message}
                      />
                    )}
                  />
                </View>
                <View style={styles.rowItem}>
                  <Controller
                    control={control}
                    name="address.complement"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        label="Complemento"
                        placeholder="Apto, Bloco, etc. (Opcional)"
                        value={value ?? ""}
                        onChangeText={onChange}
                        placeholderTextColor={theme.colors.button}
                        error={errors.address?.complement?.message}
                      />
                    )}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Controller
                  control={control}
                  name="address.neighborhood"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label="Bairro"
                      placeholder="Digite o bairro"
                      value={value}
                      onChangeText={onChange}
                      placeholderTextColor={theme.colors.button}
                      error={errors.address?.neighborhood?.message}
                    />
                  )}
                />
              </View>

              <View style={styles.row}>
                <View style={styles.rowItem}>
                  <Controller
                    control={control}
                    name="address.city"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        label="Cidade"
                        placeholder="Digite a cidade"
                        value={value}
                        onChangeText={onChange}
                        placeholderTextColor={theme.colors.button}
                        error={errors.address?.city?.message}
                      />
                    )}
                  />
                </View>
                <View style={styles.rowItem}>
                  <Controller
                    control={control}
                    name="address.state"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        label="Estado"
                        placeholder="Digite o estado"
                        value={value}
                        onChangeText={onChange}
                        placeholderTextColor={theme.colors.button}
                        error={errors.address?.state?.message}
                      />
                    )}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Controller
                  control={control}
                  name="address.zipCode"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label="CEP"
                      placeholder="Digite o CEP"
                      value={value}
                      onChangeText={onChange}
                      keyboardType="numeric"
                      placeholderTextColor={theme.colors.button}
                      error={errors.address?.zipCode?.message}
                    />
                  )}
                />
              </View>

              <Text style={styles.sectionTitle}>Dados do Veículo</Text>

              <View style={styles.inputGroup}>
                <Controller
                  control={control}
                  name="vehicle.licensePlate"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label="Placa do Veículo"
                      placeholder="Ex: ABC-1234"
                      value={value}
                      onChangeText={onChange}
                      placeholderTextColor={theme.colors.button}
                      error={errors.vehicle?.licensePlate?.message}
                    />
                  )}
                />
              </View>

              <View style={styles.inputGroup}>
                <Controller
                  control={control}
                  name="vehicle.brand"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label="Marca"
                      placeholder="Ex: Honda"
                      value={value}
                      onChangeText={onChange}
                      placeholderTextColor={theme.colors.button}
                      error={errors.vehicle?.brand?.message}
                    />
                  )}
                />
              </View>

              <View style={styles.inputGroup}>
                <Controller
                  control={control}
                  name="vehicle.model"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      label="Modelo"
                      placeholder="Ex: CG 160"
                      value={value}
                      onChangeText={onChange}
                      placeholderTextColor={theme.colors.button}
                      error={errors.vehicle?.model?.message}
                    />
                  )}
                />
              </View>

              <View style={styles.row}>
                <View style={styles.rowItem}>
                  <Controller
                    control={control}
                    name="vehicle.year"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        label="Ano"
                        placeholder="Ex: 2020"
                        value={value}
                        onChangeText={onChange}
                        keyboardType="numeric"
                        placeholderTextColor={theme.colors.button}
                        error={errors.vehicle?.year?.message}
                      />
                    )}
                  />
                </View>
                <View style={styles.rowItem}>
                  <Controller
                    control={control}
                    name="vehicle.color"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        label="Cor"
                        placeholder="Ex: Preta"
                        value={value}
                        onChangeText={onChange}
                        placeholderTextColor={theme.colors.button}
                        error={errors.vehicle?.color?.message}
                      />
                    )}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Controller
                  control={control}
                  name="vehicle.vehicleType"
                  render={({ field: { onChange, value } }) => (
                    <VehicleTypeSelect
                      value={value}
                      onChange={onChange}
                      error={errors.vehicle?.vehicleType?.message}
                    />
                  )}
                />
              </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
              <Button title="Cadastrar" onPress={handleSubmit(onSubmit)} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
