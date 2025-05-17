import { StyleSheet, Text, View, StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { useEffect, useState } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_600SemiBold,
    Roboto_700Bold,
  });
  const [appReady, setAppReady] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  // Mostra a splash personalizada até chamar onFinish no Loading
  if (!appReady) {
    return <Loading onFinish={() => setAppReady(true)} />;
  }

  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar barStyle={"light-content"} />
    </View>
  );
}
