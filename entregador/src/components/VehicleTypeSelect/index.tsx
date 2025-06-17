import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  FlatList,
  Platform,
  Pressable,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { api } from "../../services/api";
import { theme } from "../../global/theme";

interface VehicleType {
  id: number;
  type: string;
}

interface VehicleTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function VehicleTypeSelect({
  value,
  onChange,
  error,
}: VehicleTypeSelectProps) {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [arrowAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    async function loadVehicleTypes() {
      try {
        const response = await api.get("/vehicle-types");
        let types: VehicleType[] = [];
        if (Array.isArray(response.data)) {
          types = response.data;
        } else if (response.data && Array.isArray(response.data.data)) {
          types = response.data.data;
        } else if (response.data && Array.isArray(response.data.results)) {
          types = response.data.results;
        } else {
          const possibleArray = Object.values(response.data).find((v) =>
            Array.isArray(v)
          );
          if (possibleArray) {
            types = possibleArray as VehicleType[];
          }
        }
        setVehicleTypes(types);
        if (types.length === 0) {
          console.error(
            "Nenhum tipo de veículo encontrado na resposta da API:",
            response.data
          );
        }
      } catch (error) {
        console.error("Erro ao carregar tipos de veículo:", error);
        setVehicleTypes([]);
      } finally {
        setLoading(false);
      }
    }
    loadVehicleTypes();
  }, []);

  // Animação da seta
  useEffect(() => {
    Animated.timing(arrowAnim, {
      toValue: modalVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [modalVisible]);

  const rotate = arrowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const selectedType =
    Array.isArray(vehicleTypes) && vehicleTypes.length > 0
      ? vehicleTypes.find((type) => type.type === value)
      : null;

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={theme.colors.button} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo do Veículo</Text>
      <Pressable
        style={({ pressed }) => [
          styles.selectButton,
          error && styles.errorBorder,
          pressed && styles.selectButtonPressed,
        ]}
        onPress={() => setModalVisible(true)}
        accessibilityRole="button"
        accessibilityLabel="Selecionar tipo de veículo"
      >
        <View style={styles.selectContent}>
          <Text style={styles.selectButtonText} numberOfLines={1}>
            {selectedType ? selectedType.type : "Selecione um tipo"}
          </Text>
          <Animated.View style={{ transform: [{ rotate }] }}>
            <Ionicons
              name="chevron-down"
              size={22}
              color={theme.colors.button}
            />
          </Animated.View>
        </View>
      </Pressable>
      {error && <Text style={styles.errorText}>{error}</Text>}

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>
                  Selecione o tipo de veículo
                </Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Ionicons
                    name="close"
                    size={24}
                    color={theme.colors.button}
                  />
                </TouchableOpacity>
              </View>
              <FlatList
                data={vehicleTypes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.option,
                      value === item.type && styles.optionSelected,
                    ]}
                    onPress={() => {
                      onChange(item.type);
                      setModalVisible(false);
                    }}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        value === item.type && styles.optionTextSelected,
                      ]}
                    >
                      {item.type}
                    </Text>
                  </TouchableOpacity>
                )}
                ListEmptyComponent={
                  <Text
                    style={{ textAlign: "center", color: theme.colors.error }}
                  >
                    Nenhum tipo de veículo encontrado.
                  </Text>
                }
                contentContainerStyle={{ paddingBottom: 20 }}
              />
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,

    fontWeight: "600",
    letterSpacing: 0.5,
  },
  selectButton: {
    borderWidth: 1.5,
    borderColor: theme.colors.button,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: theme.colors.primary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 2,
  },
  selectButtonPressed: {
    backgroundColor: theme.colors.primary,
    opacity: 0.95,
  },
  selectContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectButtonText: {
    color: theme.colors.button,
    fontSize: 17,
    fontWeight: "500",
    flex: 1,
  },
  errorBorder: {
    borderColor: theme.colors.error,
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 13,
    marginTop: 4,
    marginLeft: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.18)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
    minHeight: 180,
    maxHeight: "60%",
  },
  modalContent: {
    padding: 20,
    backgroundColor: theme.colors.primary,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.button,
  },
  closeButton: {
    color: theme.colors.button,
    fontSize: 16,
  },
  option: {
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.buttonText,
    borderRadius: 8,
    marginBottom: 2,
  },
  optionSelected: {},
  optionText: {
    fontSize: 16,
    color: theme.colors.start,
  },
  optionTextSelected: {
    color: theme.colors.buttonText,
    fontWeight: "bold",
  },
});
