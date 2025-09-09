import React, { useRef, useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  Image,
  Keyboard,
} from "react-native"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import Logo from "../../assets/banner.png"
import backImg from "../../assets/spash.png"
import { theme } from "../../global/theme"
import { styles } from "./styles"

import { useAuth } from "../../context/AuthContext"
import { useNavigation } from "@react-navigation/native"

// Schema de validação
const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .min(4, "Mínimo 4 caracteres")
    .required("Senha obrigatória"),
})

export default function SignIn() {
  const senhaRef = useRef<TextInput>(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()
  const navigation = useNavigation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  })

  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true)
    try {
      await login(data, navigation)
      console.log(data)
    } catch (error) {
      console.error("Erro no login:", error)
      alert("Erro ao fazer login. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ImageBackground source={backImg as any} style={styles.background}>
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.innerContainer}>
              <View style={styles.logoContainer}>
                <Image source={Logo as any} style={styles.logoImage} />
              </View>

              <View style={styles.form}>
                <Controller
                  control={control}
                  name="email"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <View
                      style={[
                        styles.inputWrapper,
                        error && styles.inputWrapperError,
                      ]}
                    >
                      <Ionicons
                        name="mail-outline"
                        size={22}
                        color={error ? "#f44336" : "#A9CCE3"}
                        style={styles.inputIcon}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#A9CCE3"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={value}
                        onChangeText={onChange}
                        returnKeyType="next"
                        onSubmitEditing={() => senhaRef.current?.focus()}
                        editable={!loading}
                        autoFocus
                      />
                      {error && (
                        <Text style={styles.errorText}>{error.message}</Text>
                      )}
                    </View>
                  )}
                />

                <Controller
                  control={control}
                  name="password"
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => (
                    <>
                      <View
                        style={[
                          styles.inputWrapper,
                          error && styles.inputWrapperError,
                        ]}
                      >
                        <MaterialCommunityIcons
                          name="lock-outline"
                          size={22}
                          color={error ? "#f44336" : "#A9CCE3"}
                          style={styles.inputIcon}
                        />
                        <TextInput
                          ref={senhaRef}
                          style={styles.input}
                          placeholder="Senha"
                          placeholderTextColor="#A9CCE3"
                          autoCapitalize="none"
                          secureTextEntry={!showPassword}
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          returnKeyType="done"
                          onSubmitEditing={handleSubmit(onSubmit)}
                          editable={!loading}
                        />
                        <TouchableOpacity
                          onPress={() => setShowPassword((v) => !v)}
                          style={styles.eyeButton}
                          activeOpacity={0.7}
                          disabled={loading}
                        >
                          <Ionicons
                            name={
                              showPassword ? "eye-off-outline" : "eye-outline"
                            }
                            size={22}
                            color="#A9CCE3"
                          />
                        </TouchableOpacity>
                      </View>
                      {error && (
                        <Text style={styles.errorText}>{error.message}</Text>
                      )}
                    </>
                  )}
                />

                <TouchableOpacity
                  style={[
                    styles.button,
                    loading && { opacity: 0.7 },
                    { flexDirection: "row" },
                  ]}
                  onPress={handleSubmit(onSubmit)}
                  disabled={loading}
                  activeOpacity={0.85}
                >
                  {loading ? (
                    <ActivityIndicator color={theme.colors.primary} />
                  ) : (
                    <>
                      <Ionicons
                        name="log-in-outline"
                        size={22}
                        color={theme.colors.primary}
                        style={{ marginRight: 8 }}
                      />
                      <Text style={styles.buttonText}>Entrar</Text>
                    </>
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.links}>
                <TouchableOpacity style={styles.linkButton} activeOpacity={0.7}>
                  <Text style={styles.linkText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignUp")}
                  style={styles.linkButton}
                  activeOpacity={0.7}
                >
                  <Text style={styles.linkText}>Criar conta</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
