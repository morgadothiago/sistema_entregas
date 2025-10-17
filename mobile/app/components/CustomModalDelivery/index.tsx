import React, { useCallback, useMemo, useRef } from "react"
import { Pressable, Text, View, StyleSheet } from "react-native"
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { colors } from "@/app/theme"

interface CustomModalDeliveryProps {
  isModalVisible: boolean
  modalData: {
    title: string
    message: string
  } | null
  onConfirm: () => void
  onClose: () => void
}

export function CustomModalDelivery({
  isModalVisible,
  modalData,
  onConfirm,
  onClose,
}: CustomModalDeliveryProps) {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = useMemo(() => ["100%", "100%"], [])

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose()
      }
    },
    [onClose]
  )

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0} // Set opacity to 0 for a fully transparent backdrop
      />
    ),
    []
  )

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {isModalVisible && (
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={renderBackdrop}
          enablePanDownToClose={true}
          backgroundStyle={styles.bottomSheetBackground} // Apply white background
        >
          <BottomSheetView style={styles.contentContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>{modalData?.title}</Text>
              <Pressable onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>X</Text>
              </Pressable>
            </View>
            <Text style={styles.message}>{modalData?.message}</Text>
            <Pressable onPress={onConfirm} style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirmar</Text>
            </Pressable>
          </BottomSheetView>
        </BottomSheet>
      )}
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    // flex: 1, // Removed flex: 1 to allow content-based sizing
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  bottomSheetBackground: {
    backgroundColor: colors.secondary, // Make the BottomSheet background white
  },
})
