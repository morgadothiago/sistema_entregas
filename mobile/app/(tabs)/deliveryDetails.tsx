import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';

export default function DeliveryDetails() {
  const router = useRouter();
  const { item } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={() => router.back()} title={`Detalhes da Entrega ${item}`} />
      <View style={styles.content}>
        <Text style={styles.title}>Detalhes da Entrega {item}</Text>
        <Text style={styles.message}>Aqui você pode ver os detalhes completos da entrega {item}.</Text>
        {/* Adicione mais detalhes da entrega aqui */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
  },
});