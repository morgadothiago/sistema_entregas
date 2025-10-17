import React from "react"
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import { Header } from "../components/Header"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"
import { colors } from "../theme"

export default function Delivery() {
  const routes = useRouter()
  const handleOpenModal = (item: any) => {
    routes.push({
      pathname: "/deliveryDetails",
      params: { item: item },
    })
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Header onBackPress={() => routes.back()} title="Minha Carteira" />
      </View>

      <View style={styles.content}>
        <Text>Listagem de entregas...</Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.toString()}
          ListEmptyComponent={() => (
            <View style={styles.item}>
              <Text>Não há entregas disponíveis</Text>
            </View>
          )}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>Entrega {item}</Text>
              <Pressable
                style={styles.button}
                onPress={() => handleOpenModal(item)}
              >
                <Text style={styles.buttonText}>Detalhes</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 16,
  },
  item: {
    padding: 16,
    backgroundColor: colors.buttons,
    borderRadius: 8,
    marginBottom: 8,
    gap: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: "bold",
  },
})
