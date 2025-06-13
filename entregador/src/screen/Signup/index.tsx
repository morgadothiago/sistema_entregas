import React from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons"; // Correção na importação do ícone
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";

export default function Signup() {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback>
      <ImageBackground
        source={require("../../../assets/SplashScreen.png")}
        style={{ flex: 1 }}
      >
        <SafeAreaView>
          <Header title="Cadastra se" icon="arrow-left" onPress={() => {}} />
        </SafeAreaView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
