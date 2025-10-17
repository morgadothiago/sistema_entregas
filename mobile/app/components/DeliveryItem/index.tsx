import { colors } from "@/app/theme"
import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

export interface Order {
  id: string
  customer: string
  address: string
  message: string
  items: string[]
  fee: number
  status: "pending" | "enroute" | "delivered"
}

interface DeliveryItemProps {
  item: Order
  onPress: (order: Order) => void
}

export function DeliveryItem({ item, onPress }: DeliveryItemProps) {
  const statusLabel =
    item.status === "pending"
      ? "Pendente"
      : item.status === "enroute"
      ? "A caminho"
      : "Entregue"

  const statusColor =
    item.status === "pending"
      ? colors.buttons
      : item.status === "enroute"
      ? colors.active
      : colors.stars

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.orderId}>{item.id}</Text>
        <Text style={[styles.status, { color: statusColor }]}>
          {statusLabel}
        </Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.customer}>{item.customer}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.items}>Itens: {item.items.join(", ")}</Text>
        <Text style={styles.fee}>Taxa: R$ {item.fee.toFixed(2)}</Text>
      </View>

      <Pressable style={styles.button} onPress={() => onPress(item)}>
        <Text style={styles.buttonText}>Ver detalhes</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  orderId: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
  },
  body: {
    marginBottom: 10,
  },
  customer: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  address: {
    fontSize: 14,
    color: colors.text,
    marginTop: 2,
  },
  message: {
    fontSize: 13,
    color: colors.text,
    marginTop: 4,
    fontStyle: "italic",
  },
  items: {
    fontSize: 13,
    color: colors.text,
    marginTop: 4,
  },
  fee: {
    fontSize: 13,
    color: colors.text,
    marginTop: 4,
  },
  button: {
    backgroundColor: colors.buttons,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 15,
  },
})
