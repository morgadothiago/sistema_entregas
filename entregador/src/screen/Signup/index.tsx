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

export default function SignUpScreen() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Dados do formulário:", data);
    // Aqui você pode enviar os dados para sua API ou fazer outra ação
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
                error={errors.name?.message}
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
                error={errors.lastname?.message}
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
                error={errors.email?.message}
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
                error={errors.phone?.message}
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
                error={errors.password?.message}
              />

              <View style={{ marginTop: 16 }}>
                <Button
                  label="Cadastra-se"
                  onPress={handleSubmit(onSubmit)}
                  loading={false}
                  disabled={false}
                >
                  Enviar dados
                </Button>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </GradientBackground>
    </SafeAreaView>
  );
}
