import {
  Keyboard,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

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
  Title,
  FormArea,
  Footer,
  SocialLoginArea,
  SocialButton,
  SocialButtons,
} from "./styles";

import Logo from "../../../assets/ios-light.png";
import { KeyboardAvoidingView } from "react-native";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { LinkButton } from "../../components/Link";
import { theme } from "../../global/theme";

export default function SignInScreen() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { control } = useForm();
  const { login, isAuthenticated } = useAuth();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      console.log("Keyboard shown");
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      console.log("Keyboard hidden");
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

  // Simulate a login function
  const handleLogin = async () => {
    try {
      setLoading(true);

      // Simula requisição
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
      setButtonDisabled(true);
      console.log("Login");
    } catch (error) {
      console.error("Login failed", error);
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
                ref={emailRef}
                formProps={{
                  name: "email",
                  control,
                }}
                inputProps={{
                  placeholder: "Email",
                  placeholderTextColor: "#FFF",
                }}
                icon="user"
              />

              <Input
                formProps={{
                  name: "email",
                  control,
                }}
                inputProps={{
                  placeholder: "Password",
                  placeholderTextColor: "#FFF",
                }}
                icon="lock"
              />

              <Button
                onPress={handleLogin}
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
