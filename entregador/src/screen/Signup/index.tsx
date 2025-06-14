import React from "react";

import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";

export default function Signup() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroudImg}
          source={require("../../../assets/SplashScreen.png")}
        >
          <Header icon="arrow-left" title="Cadastra-se" onPress={() => {}} />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
