import React from "react";
import { Keyboard, ScrollView, Platform, View } from "react-native";
import { GradientBackground } from "./styles";
import { TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { theme } from "../../global/theme";
import { Button } from "../../components/Button";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log("Dados do formulário:", data);
    try {
      const respponse = await api.post("/");
    } catch (err) {}
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <GradientBackground style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
          >
            <Header
              icon="arrow-left"
              title="Criar conta"
              onPress={() => navigation.goBack()}
            />
            <ScrollView
              contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 24,
                flexGrow: 1,
                justifyContent: "center",
              }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <Input
                label="Nome"
                icon="user"
                inputProps={{
                  placeholder: "Informe seu nome",
                  placeholderTextColor: theme.colors.button,
                }}
                formProps={{
                  name: "name",
                  control,
                  rules: { required: "Nome é obrigatório" },
                }}
                error={
                  typeof errors.name?.message === "string"
                    ? errors.name.message
                    : undefined
                }
              />

              <Input
                label="Sobrenome"
                icon="user"
                inputProps={{
                  placeholder: "Informe seu sobrenome",
                  placeholderTextColor: theme.colors.button,
                }}
                formProps={{
                  name: "lastname",
                  control,
                  rules: { required: "Sobrenome é obrigatório" },
                }}
                error={
                  typeof errors.lastname?.message === "string"
                    ? errors.lastname.message
                    : undefined
                }
              />
              <Input
                label="Email"
                icon="mail"
                inputProps={{
                  placeholder: "Informe seu email",
                  placeholderTextColor: theme.colors.button,
                  keyboardType: "email-address",
                  autoCapitalize: "none",
                }}
                formProps={{
                  name: "email",
                  control,
                  rules: {
                    required: "Email é obrigatório",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Email inválido",
                    },
                  },
                }}
                error={
                  typeof errors.email?.message === "string"
                    ? errors.email.message
                    : undefined
                }
              />
              <Input
                label="Telefone"
                icon="phone"
                inputProps={{
                  placeholder: "Informe seu telefone",
                  placeholderTextColor: theme.colors.button,
                  keyboardType: "phone-pad",
                }}
                formProps={{
                  name: "phone",
                  control,
                  rules: { required: "Telefone é obrigatório" },
                }}
                error={
                  typeof errors.phone?.message === "string"
                    ? errors.phone.message
                    : undefined
                }
              />
              <Input
                label="Senha"
                icon="lock"
                inputProps={{
                  placeholder: "Informe sua senha",
                  placeholderTextColor: theme.colors.button,
                  secureTextEntry: true,
                }}
                formProps={{
                  name: "password",
                  control,
                  rules: {
                    required: "Senha é obrigatória",
                    minLength: {
                      value: 6,
                      message: "A senha deve ter pelo menos 6 caracteres",
                    },
                  },
                }}
                error={
                  typeof errors.password?.message === "string"
                    ? errors.password.message
                    : undefined
                }
              />

              <View style={{ marginTop: 16 }}>
                <Button
                  label="Cadastra-se"
                  onPress={handleSubmit(onSubmit)}
                  loading={false}
                  disabled={false}
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </GradientBackground>
    </SafeAreaView>
  );
}
