import React, { useRef, useState } from "react";
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
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Logo from "../../../assets/ios-light.png";
import backImg from "../../../assets/SplashScreen.png";
import { theme } from "../../global/theme";
import { styles } from "./styles";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

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
  const { login } = useAuth();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { login, isAuthenticated } = useAuth();

  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardOpen(true)
    );
    const hideSub = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardOpen(false)
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const emailRef = useRef<TextInput>(null);

  const handleLogin = async (data: any) => {
    setLoading(true);
    try {
      await login(data, navigation);
      console.log(data);
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Erro ao fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <GradientBackground>
        <>
          {!keyboardVisible && (
            <ImageContainer>
              <Image source={Logo} resizeMode="cover" />
            </ImageContainer>
          )}

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            <FormArea keyboardOpen={keyboardOpen}>
              <Input
                label="E-mail"
                error={errors.email?.message}
                formProps={{
                  name: "email",
                  control,
                  rules: {
                    required: "Email e obrigatorio",
                  },
                }}
                inputProps={{
                  placeholder: "Email",
                  placeholderTextColor: "#FFF",
                  onSubmitEditing: () => emailRef.current?.focus(),
                  returnKeyType: "next",
                  autoCapitalize: "none",
                }}
                icon="user"
              />

              <Input
                label="Senha"
                error={errors.password?.message}
                ref={emailRef}
                formProps={{
                  name: "password",
                  control,
                  rules: {
                    required: "Senha e obrigatorio",
                  },
                }}
                inputProps={{
                  placeholder: "Password",
                  placeholderTextColor: "#FFF",
                  onSubmitEditing: handleSubmit(handleLogin),
                  secureTextEntry: true,
                  autoCapitalize: "none",
                }}
                icon="lock"
              />

              <Button
                onPress={handleSubmit(handleLogin)}
                disabled={loading}
                loading={loading}
                label="Entrar"
              />
            </FormArea>
          </KeyboardAvoidingView>

          <SocialLoginArea>
            <SocialButtons>
              <SocialButton>
                <AntDesign
                  name="apple1"
                  size={24}
                  color={theme.colors.buttonText}
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
  );
}
