import React from "react-native";
import { View } from "react-native";
import { GradientBackground } from "./styles";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function resetPassword() {
  const navigation = useNavigation();
  return (
    <GradientBackground>
      <Header
        icon="arrow-left"
        title="Esqueceu a senha"
        onPress={() => navigation.goBack()}
      />
    </GradientBackground>
  );
}
