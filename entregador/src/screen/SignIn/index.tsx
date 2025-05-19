import { Button, Keyboard, TouchableWithoutFeedback } from "react-native";

import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import type { RootStackParamList } from "../../types/RootParamsList";
import type { StackNavigationProp } from "@react-navigation/stack";

import { TextInput } from "../../components/Input";
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
  SocialText,
} from "./styles";

import Logo from "../../../assets/ios-light.png";
import { KeyboardAvoidingView } from "react-native";
import { useForm } from "react-hook-form";

export default function SignInScreen() {
  const { control } = useForm();
  const { login, isAuthenticated } = useAuth();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  // Simulate a login function
  const handleLogin = async () => {
    try {
      // Simulate an API call

      await login();

      // Check authentication status after login
      if (isAuthenticated) {
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <GradientBackground>
        <>
          <ImageContainer>
            <Image source={Logo} resizeMode="cover" />
            <Title>Sign In</Title>
          </ImageContainer>

          <KeyboardAvoidingView behavior="padding">
            <FormArea>
              <TextInput
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

              <TextInput
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

              <Button title="Login" onPress={() => {}} />
            </FormArea>
          </KeyboardAvoidingView>

          <SocialLoginArea>
            <SocialText>Or continue with</SocialText>
            <SocialButtons>
              <SocialButton>
                <AntDesign name="apple1" size={24} color="#000" />
              </SocialButton>
              <SocialButton>
                <AntDesign name="google" size={24} color="black" />
              </SocialButton>
            </SocialButtons>
          </SocialLoginArea>

          <Footer>
            <Button title="Login" onPress={handleLogin} />
          </Footer>
        </>
      </GradientBackground>
    </TouchableWithoutFeedback>
  );
}
