import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "expo-router"
import { colors } from "../theme"
import { ImageBackground } from "expo-image"

import fundoBg from "@/app/assets/funndo.png"

interface PixInfo {
  key: string
  type: string
}

interface DocumentInfo {
  rg: string
  cpf: string
  cnh: string
  category: string
  validity: string
  type: string
  payments: string[]
  pix?: PixInfo
}

interface PaymentsData {
  document: DocumentInfo
}

const MOCK_PAYMENTS_DATA: PaymentsData = {
  document: {
    rg: "368694963",
    cpf: "123.456.789-00",
    cnh: "12345678900",
    category: "AD",
    validity: "2028-12-31",
    type: "DeliveryMan",
    payments: ["Pix", "CreditCard"],
    pix: {
      key: "sua_chave_pix@email.com",
      type: "email",
    },
  },
}

export default function Payments() {
  const { user } = useAuth()
  const routes = useRouter()

  console.log(user?.Status)

  return (
    <View style={styles.container}>
      {user?.Status ? (
        <View style={styles.infoWallet}>
          <Text style={styles.title}>Informações de Pagamento:</Text>
          <Text style={styles.text}>RG: {MOCK_PAYMENTS_DATA.document.rg}</Text>
          <Text style={styles.text}>
            CPF: {MOCK_PAYMENTS_DATA.document.cpf}
          </Text>
          <Text style={styles.text}>
            CNH: {MOCK_PAYMENTS_DATA.document.cnh}
          </Text>
          <Text style={styles.text}>
            Categoria: {MOCK_PAYMENTS_DATA.document.category}
          </Text>
          <Text style={styles.text}>
            Validade: {MOCK_PAYMENTS_DATA.document.validity}
          </Text>
          <Text style={styles.text}>
            Tipo: {MOCK_PAYMENTS_DATA.document.type}
          </Text>
          {MOCK_PAYMENTS_DATA.document.pix && (
            <View>
              <Text style={styles.text}>
                Pix Key: {MOCK_PAYMENTS_DATA.document.pix.key}
              </Text>
              <Text style={styles.text}>
                Pix Type: {MOCK_PAYMENTS_DATA.document.pix.type}
              </Text>
            </View>
          )}
        </View>
      ) : (
        <ImageBackground
          source={fundoBg}
          resizeMode="cover"
          imageStyle={{ opacity: 0.5 }}
          style={styles.bgImage}
        >
          <View style={styles.infoWallet}>
            <Text style={styles.title}>
              Nenhuma informação de pagamento disponível.
            </Text>
            <Pressable
              onPress={() => routes.replace("/(auth)/Payments")}
              style={styles.button}
            >
              <Text style={styles.text}>Cadastra o pagamento</Text>
            </Pressable>
          </View>
        </ImageBackground>
      )}
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  infoWallet: {
    width: "90%", // Define uma largura para o card
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.buttons,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
})
