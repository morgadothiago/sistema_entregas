import React, { useState } from "react"
import { useLocalSearchParams, useRouter } from "expo-router"
import { Text, View, StyleSheet } from "react-native"
import { colors } from "../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../components/Header"

export default function DeliveryDetails() {
  const router = useRouter()
  const { id, title, message, address, fee, items, status } =
    useLocalSearchParams<any>()

  return (
    <SafeAreaView style={localStyles.container}>
      <Header onBackPress={() => router.back()} title="Detalhes da Entrega" />

      <View style={localStyles.content}>
        <Text style={localStyles.message}>{message}</Text>

        <View style={localStyles.detailsContainer}>
          <Text style={localStyles.label}>ID da Entrega:</Text>
          <Text style={localStyles.value}>{id}</Text>

          <Text style={localStyles.label}>Endereço:</Text>
          <Text style={localStyles.value}>{address}</Text>

          <Text style={localStyles.label}>Itens:</Text>
          <Text style={localStyles.value}>{items}</Text>

          <Text style={localStyles.label}>Taxa:</Text>
          <Text style={localStyles.value}>R$ {Number(fee).toFixed(2)}</Text>

          <Text style={localStyles.label}>Status:</Text>
          <Text
            style={[
              localStyles.value,
              status === "pending"
                ? localStyles.statusPending
                : status === "enroute"
                ? localStyles.statusEnroute
                : localStyles.statusDelivered,
            ]}
          >
            {status === "pending"
              ? "Pendente"
              : status === "enroute"
              ? "A caminho"
              : "Entregue"}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  content: {
    padding: 16,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    marginTop: 10,
    height: "100%",
  },

  message: {
    fontSize: 18,
    color: colors.secondary,

    lineHeight: 24,
  },
  detailsContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.support,
    paddingTop: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.secondary,

    marginBottom: 4,
  },
  value: {
    fontSize: 17,
    color: colors.text,
    marginBottom: 8,
  },
  statusPending: {
    color: colors.buttons,
    fontWeight: "bold",
  },
  statusEnroute: {
    color: colors.active,
    fontWeight: "bold",
  },
  statusDelivered: {
    color: colors.stars,
    fontWeight: "bold",
  },
})
