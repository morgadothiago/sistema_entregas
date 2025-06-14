import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
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
} from "./styles";
import Logo from "../../../assets/ios-light.png";
import { LinkButton } from "../../components/Link";
import { SigninSchema } from "../../util/schemasValidations";
import { ValidationError } from "yup";

export default function SignInScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { login } = useAuth();

  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true)
    );
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false)
    );
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
            <FormArea keyboardOpen={keyboardOpen}></FormArea>
          </KeyboardAvoidingView>

          <Footer>
            <LinkButton
              linkTitle="Esqueceu sua senha"
              onPress={() => navigation.navigate("ResetPassword")}
            />
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
