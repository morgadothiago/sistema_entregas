import React, { useEffect, useRef, useState } from "react";

import {
  Keyboard,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import type { RootStackParamList } from "../../types/RootParamsList";
import type { StackNavigationProp } from "@react-navigation/stack";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {
  GradientBackground,
  ImageContainer,
  Image,
  FormArea,
  Footer,
  SocialLoginArea,
  SocialButton,
  SocialButtons,
} from "./styles";

import Logo from "../../../assets/ios-light.png";

import { LinkButton } from "../../components/Link";
import { theme } from "../../global/theme";

import { SigninSchema } from "../../util/schemasValidations";
import { ValidationError } from "yup";

export default function SignInScreen() {
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
    setButtonDisabled(true);

    await login(data);

    setLoading(false);
    setButtonDisabled(false);
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
              </SocialButton>
              <SocialButton>
                <AntDesign
                  name="google"
                  size={24}
                  color={theme.colors.buttonText}
                />
              </SocialButton>
            </SocialButtons>
          </SocialLoginArea>

          <Footer>
            <LinkButton linkTitle="Esqueceu sua senha" onPress={() => {}} />
            <LinkButton
              linkTitle="Criar conta"
              onPress={() => navigation.navigate("SignUp")}
            />
          </Footer>
        </>
      </GradientBackground>
    </TouchableWithoutFeedback>
  );
}
