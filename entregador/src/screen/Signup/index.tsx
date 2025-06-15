// src/screens/Signup/index.tsx
import React from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Alert,
} from "react-native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signUpSchema, SignUpFormData } from "../../util/schemasValidations";

import { styles } from "./styles";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { theme } from "../../global/theme";

export default function Signup() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    alert("aqui");
    console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ImageBackground
          style={styles.backgroudImg}
          source={require("../../../assets/SplashScreen.png")}
        >
          <Header icon="arrow-left" title="Cadastre-se" onPress={() => {}} />

          <View style={styles.form}>
            <ScrollView
              contentContainerStyle={{ paddingBottom: 20 }}
              showsVerticalScrollIndicator={false}
            >
              {/* 🔹 Dados Pessoais */}
              <Text style={styles.sectionTitle}>Dados Pessoais</Text>
              {/** Nome */}
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
              {/** Email */}
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
              {/** Outras entradas seguem o mesmo padrão */}
              <Controller
                control={control}
                name="birthDate"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Data de Nascimento"
                    placeholder="DD/MM/AAAA"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.birthDate?.message}
                  />
                )}
              />
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

              {/* 🔹 Endereço */}
              <Text style={styles.sectionTitle}>Endereço</Text>
              {/** Os inputs do endereço seguem o mesmo padrão */}
              <Controller
                control={control}
                name="address"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Endereço"
                    placeholder="Rua, avenida, etc"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.address?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="number"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Número"
                    placeholder="Número da residência"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.number?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="complement"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Complemento"
                    placeholder="Opcional"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.complement?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="city"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Cidade"
                    placeholder="Cidade"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.city?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="state"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Estado"
                    placeholder="Estado"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.state?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="cep"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="CEP"
                    placeholder="CEP"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.cep?.message}
                  />
                )}
              />

              {/* 🔹 Dados do Veículo */}
              <Text style={styles.sectionTitle}>Dados do Veículo</Text>
              {/** Inputs de veículo */}
              <Controller
                control={control}
                name="plate"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Placa"
                    placeholder="Placa do veículo"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.plate?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="brand"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Marca"
                    placeholder="Marca do veículo"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.brand?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="model"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Modelo"
                    placeholder="Modelo do veículo"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.model?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="year"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Ano de Fabricação"
                    placeholder="Ano do veículo"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.year?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="color"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Cor"
                    placeholder="Cor do veículo"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.color?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="type"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Tipo"
                    placeholder="Moto, carro, etc"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={theme.colors.button}
                    error={errors.type?.message}
                  />
                )}
              />
            </ScrollView>
          </View>

          <View style={styles.footer}>
            <Button title="Cadastrar" onPress={handleSubmit(onSubmit)} />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
