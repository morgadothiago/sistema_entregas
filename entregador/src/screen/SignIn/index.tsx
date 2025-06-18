import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Logo from "../../../assets/ios-light.png";
import backImg from "../../../assets/SplashScreen.png";
import { theme } from "../../global/theme";
import { styles } from "./styles";

// Schema de validação
const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .min(4, "Mínimo 4 caracteres")
    .required("Senha obrigatória"),
});

export default function SignIn() {
  const senhaRef = useRef<TextInput>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Login:\n${JSON.stringify(data, null, 2)}`);
    }, 1200);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground source={backImg as any} style={styles.background}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.overlay} />
          <View style={styles.innerContainer}>
            <View style={styles.logoContainer}>
              <Image source={Logo as any} style={styles.logoImage} />
              <Text style={styles.logoText}>Entrar</Text>
            </View>
            <Text style={styles.subtitle}>Bem-vindo de volta!</Text>
            <View style={styles.form}>
              <Controller
                control={control}
                name="email"
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
                        onBlur={onBlur}
                        returnKeyType="next"
                        onSubmitEditing={() => senhaRef.current?.focus()}
                        editable={!loading}
                        autoFocus
                      />
                    </View>
                    {error && (
                      <Text style={styles.errorText}>{error.message}</Text>
                    )}
                  </>
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
                  <ActivityIndicator color="#fff" />
                ) : (
                  <>
                    <Ionicons
                      name="log-in-outline"
                      size={22}
                      color="#fff"
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
              <TouchableOpacity style={styles.linkButton} activeOpacity={0.7}>
                <Text style={styles.linkText}>Criar conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
