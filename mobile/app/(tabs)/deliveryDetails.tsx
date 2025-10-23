import React, { useEffect, useState } from "react"
import { useLocalSearchParams, useRouter } from "expo-router"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../components/Header"
import { ApiOrder } from "../types/order"

import { ScrollView } from "react-native"
import { api } from "../service/api"
import { useAuth } from "../context/AuthContext"

export default function DeliveryDetails() {
  const router = useRouter()
  const order = useLocalSearchParams<ApiOrder>()
  const { token } = useAuth()

  useEffect(() => {
    async function getDeliveryDetailOrCode() {
      try {
        const response = await api.get(`/deliver/${order.code}`)
        console.log("response:", response.data)
        // você pode setar estado aqui, se precisar exibir dados adicionais
      } catch (error) {
        console.error("Erro ao buscar detalhes da entrega:", error)
      }
    }

    if (!token) return
    getDeliveryDetailOrCode()
  }, [token, order.code])

  const statusLabel =
    order.status === "PENDING"
      ? "Pendente"
      : order.status === "IN_TRANSIT"
      ? "A caminho"
      : "Entregue"

  const statusColor =
    order.status === "PENDING"
      ? colors.buttons
      : order.status === "IN_TRANSIT"
      ? colors.active
      : colors.stars

  return (
    <SafeAreaView style={localStyles.container}>
      <Header title="Detalhes da Entrega" />

      <View style={localStyles.content}>
        <Text style={localStyles.message}>{order.information}</Text>

        <ScrollView>
          <View style={localStyles.detailsContainer}>
            <Text style={localStyles.sectionTitle}>Detalhes da Encomenda</Text>
            <Text style={localStyles.label}>ID da Entrega:</Text>
            <Text style={localStyles.value}>{order.code}</Text>

            <Text style={localStyles.label}>Empresa:</Text>
            <Text style={localStyles.value}>{order.Company?.name}</Text>

            <Text style={localStyles.label}>Endereço da Empresa:</Text>
            <Text style={localStyles.value}>{order.Company?.andress}</Text>

            <Text style={localStyles.label}>Telefone da Empresa:</Text>
            <Text style={localStyles.value}>{order.Company?.phone}</Text>

            <Text style={localStyles.label}>Tipo de Veículo:</Text>
            <Text style={localStyles.value}>{order.vehicleType}</Text>

            <Text style={localStyles.label}>Dimensões (AxLxC):</Text>
            <Text style={localStyles.value}>
              {order.height} x {order.width} x {order.length}
            </Text>

            <Text style={localStyles.label}>Peso:</Text>
            <Text style={localStyles.value}>{order.weight} kg</Text>

            <Text style={localStyles.label}>Fragilidade:</Text>
            <Text style={localStyles.value}>
              {order.isFragile ? "Sim" : "Não"}
            </Text>

            <Text style={localStyles.label}>Preço:</Text>
            <Text style={localStyles.value}>R$ {order.price}</Text>

            <Text style={localStyles.label}>Status:</Text>
            <Text style={[localStyles.value, { color: statusColor }]}>
              {statusLabel}
            </Text>
          </View>
        </ScrollView>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: colors.buttons }}>Voltar</Text>
        </TouchableOpacity>
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
    flex: 1,
    padding: 16,
    backgroundColor: colors.secondary,
  },
  detailsContainer: {
    backgroundColor: colors.support,
    borderRadius: 8,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: colors.secondary,
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: colors.secondary,
  },
  message: {
    marginBottom: 12,
    color: colors.secondary,
  },
})
