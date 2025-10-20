import React, { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"
import { Header } from "../components/Header"
import { colors } from "../theme"
import { DeliveryItem, Order } from "../components/DeliveryItem"
import * as Location from "expo-location"
import { api } from "../service/api"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Delivery() {
  const [token, setToken] = useState("")
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem("token")
      if (storedToken) setToken(storedToken)
    }
    loadToken()
  }, [])

  const getAllDeliverys = async () => {
    const response = await api.get("/delivery", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setOrders(response.data)
  }
  console.log()

  // const handleOpenDetails = (order: Order) => {
  //   router.push({
  //     pathname: "/deliveryDetails",
  //     params: { ...order },
  //   })
  // }

  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={() => router.back()} title="Minhas Entregas" />

      <View style={styles.listContainer}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DeliveryItem item={item} onPress={() => {}} />
          )}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Nenhuma entrega disponível</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  listContent: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
