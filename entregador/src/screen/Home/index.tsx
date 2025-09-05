import React, { useEffect } from "react"
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native"
import { useAuth } from "../../context/AuthContext"
import { useNavigation } from "@react-navigation/native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RootStackParamList } from "../../types/RootParamsList"
import Header from "../../components/Header"
import { theme } from "../../global/theme"
import Button from "../../components/Button"
import { Feather } from "@expo/vector-icons"

const IconFeather = Feather
export default function Home() {
  const { isAuthenticated, logout, user } = useAuth()
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate("SignIn")
    }
    console.log(isAuthenticated)
  }, [isAuthenticated, navigation])

  const handleLogout = async () => {
    await logout()
    navigation.navigate("SignIn")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Entregas" icon="truck" onPress={handleLogout} />
      <View style={styles.scrollContainer}>
        <View>
          <Text>Nome: {user?.name}</Text>
          <Text>Email: {user?.email}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleLogout} style={styles.btnLogout}>
            <Feather name="log-out" size={24} color={theme.colors.button} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnLogout: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 8,
  },
})
