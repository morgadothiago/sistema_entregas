import React from "react";

import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "../../components/Input";
import { theme } from "../../global/theme";

export default function Signup() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroudImg}
          source={require("../../../assets/SplashScreen.png")}
        >
          <Header icon="arrow-left" title="Cadastra-se" onPress={() => {}} />

          <View style={styles.form}>
            <ScrollView>
              <Input
                label="Nome"
                placeholder="Nome"
                placeholderTextColor={theme.colors.button}
              />
              <Input
                label="email"
                placeholder="E-mail"
                placeholderTextColor={theme.colors.button}
              />
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
