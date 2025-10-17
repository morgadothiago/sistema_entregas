import React, { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"
import { Header } from "../components/Header"
import { colors } from "../theme"
import { DeliveryItem, Order } from "../components/DeliveryItem"
import * as Location from "expo-location"

export default function Delivery() {
  const router = useRouter()

  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-001",
      customer: "Mariana Silva",
      address: "Rua das Flores, 123",
      message: "Entregar antes das 18:00",
      items: ["Sushi Box", "Ginger Tea"],
      fee: 6.5,
      status: "pending",
    },
    {
      id: "ORD-002",
      customer: "Carlos Almeida",
      address: "Av. Brasil, 987",
      message: "Tocar campainha, entregar para porteiro",
      items: ["Pizza Pepperoni"],
      fee: 4.0,
      status: "pending",
    },
    {
      id: "ORD-003",
      customer: "João Pereira",
      address: "Praça Central, 5",
      message: "Cliente prefere contato via telefone",
      items: ["Caesar Salad", "Iced Coffee"],
      fee: 5.0,
      status: "enroute",
    },
  ])

  const [currentLocation, setCurrentLocation] = useState<Location.LocationObject | null>(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        console.error("Permission to access location was denied")
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setCurrentLocation(location)
    })()
  }, [])

  const handleOpenDetails = (order: Order) => {
    router.push({
      pathname: "/deliveryDetails",
      params: { ...order, currentLocation: JSON.stringify(currentLocation) },
    })
  }

  const handleAccept = (acceptedOrder: Order) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === acceptedOrder.id ? { ...order, status: "enroute" } : order
      )
    )
  }

  const handleDecline = (declinedOrder: Order) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== declinedOrder.id)
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={() => router.back()} title="Minhas Entregas" />

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DeliveryItem
            item={item}
            onPress={handleOpenDetails}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhuma entrega disponível</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  emptyText: {
    color: colors.text,
    fontSize: 15,
  },
})
