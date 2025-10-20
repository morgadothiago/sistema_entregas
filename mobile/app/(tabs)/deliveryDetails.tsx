import React, { useState } from "react"
import { useLocalSearchParams, useRouter } from "expo-router"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../components/Header"

import { ScrollView } from "react-native"

export default function DeliveryDetails() {
  const router = useRouter()
  const { id, title, message, address, fee, items, status } =
    useLocalSearchParams<any>()

  return (
    <SafeAreaView style={localStyles.container}>
      <Header onBackPress={() => router.back()} title="Detalhes da Entrega" />

      <View style={localStyles.content}>
        <Text style={localStyles.message}>{message}</Text>

        <ScrollView>
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

          <View>
            <TouchableOpacity>
              <Text>Ir para o mapa</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    paddingBottom: 20, // Adicionado para dar espaço abaixo do mapa
  },
  message: {
    fontSize: 18,
    color: colors.text,
    lineHeight: 24,
    marginBottom: 15, // Adicionado para espaçamento
  },
  detailsContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.support,
    paddingTop: 20,
    paddingBottom: 10, // Adicionado para espaçamento
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 2,
  },
  value: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 10,
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
