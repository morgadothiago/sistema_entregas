import logo from "@/app/assets/logo.png"
import { Image } from "expo-image"
import * as ImagePicker from "expo-image-picker"
import { router } from "expo-router"
import React, { useEffect, useState } from "react"
import { Alert, Pressable, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../components/Header"
import { useAuth } from "../context/AuthContext"
import { colors } from "../theme"

export default function Profile() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("Usuario")
  const [profileImage, setProfileImage] = useState<string | null>(null)

  // 🔹 Pedir permissão de câmera e galeria
  useEffect(() => {
    ;(async () => {
      const { status: mediaStatus } =
        await ImagePicker.requestMediaLibraryPermissionsAsync()
      const { status: cameraStatus } =
        await ImagePicker.requestCameraPermissionsAsync()
      if (mediaStatus !== "granted" || cameraStatus !== "granted") {
        alert("Precisamos de permissão para acessar a câmera e galeria!")
      }
    })()
  }, [])

  // 🔹 Escolher da galeria
  const pickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    })
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri)
    }
  }

  // 🔹 Tirar foto com a câmera
  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    })
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri)
    }
  }

  // 🔹 Exibir alerta de escolha
  const chooseImageOption = () => {
    Alert.alert("Selecionar Imagem", "Escolha uma opção:", [
      { text: "Tirar foto", onPress: takePhoto },
      { text: "Escolher da galeria", onPress: pickFromGallery },
      { text: "Cancelar", style: "cancel" },
    ])
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          title="Perfil"
          onBackPress={() => router.back()}
          tabs={true}
          tabsTitle="Meu Perfil"
        />

        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Pressable onPress={chooseImageOption}>
              <Image
                source={profileImage ? { uri: profileImage } : logo}
                style={{ width: 90, height: 90, borderRadius: 45 }}
              />
            </Pressable>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.userNameText}>
              Nome: {user?.DeliveryMan?.name}
            </Text>
            <Text style={styles.userNameText}>Email: {user?.email}</Text>
          </View>

          {/* Abas */}
          <View style={styles.tabInfoUser}>
            <Pressable
              style={[
                styles.tabButton,
                activeTab === "Usuario" && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab("Usuario")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "Usuario" && styles.activeTabText,
                ]}
              >
                Usuario
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.tabButton,
                activeTab === "Veiculo" && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab("Veiculo")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "Veiculo" && styles.activeTabText,
                ]}
              >
                Veiculo
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.tabButton,
                activeTab === "Dados Bancarios" && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab("Dados Bancarios")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "Dados Bancarios" && styles.activeTabText,
                ]}
              >
                Dados Bancarios
              </Text>
            </Pressable>
          </View>

          {/* Conteúdo das abas */}
          {activeTab === "Usuario" && (
            <View style={styles.tabContent}>
              <Text style={styles.tabContentText}>Conteúdo do Usuário</Text>
            </View>
          )}
          {activeTab === "Veiculo" && (
            <View style={styles.tabContent}>
              <Text style={styles.tabContentText}>Conteúdo do Veículo</Text>
            </View>
          )}
          {activeTab === "Dados Bancarios" && (
            <View style={styles.tabContent}>
              <Text style={styles.tabContentText}>
                Conteúdo dos Dados Bancários
              </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  content: {
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: colors.secondary,
    paddingTop: 50,
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: colors.primary,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: colors.support,
    marginBottom: 20,
  },
  userInfoContainer: {
    padding: 16,
    borderRadius: 12,
    gap: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  userNameText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
  },
  tabInfoUser: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    gap: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTabButton: {
    backgroundColor: colors.buttons,
  },
  activeTabText: {
    color: colors.primary,
  },
  tabContent: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    padding: 20,
    backgroundColor: colors.secondary,
    borderRadius: 12,
  },
  tabContentText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
})
