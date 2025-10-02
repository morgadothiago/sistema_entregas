import React from "react"
import { View, Text, StyleSheet } from "react-native"

interface MultiStepProps {
  currentStep: number
  steps: string[]
}

export const MultiStep: React.FC<MultiStepProps> = ({ currentStep, steps }) => {
  return (
    <View style={styles.container}>
      {steps.map((step, idx) => {
        const isActive = idx === currentStep
        const isCompleted = idx < currentStep
        return (
          <View key={step} style={styles.stepContainer}>
            <View
              style={[
                styles.circle,
                isActive && styles.activeCircle,
                isCompleted && styles.completedCircle,
              ]}
            >
              <Text style={styles.stepNumber}>{idx + 1}</Text>
            </View>
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {step}
            </Text>
            {idx < steps.length - 1 && <View style={styles.line} />}
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    marginTop: 8,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
  },
  activeCircle: {
    backgroundColor: "#007AFF",
  },
  completedCircle: {
    backgroundColor: "#4CAF50",
  },
  stepNumber: {
    color: "#fff",
    fontWeight: "bold",
  },
  label: {
    marginLeft: 6,
    marginRight: 12,
    color: "#888",
    fontSize: 13,
  },
  activeLabel: {
    color: "#007AFF",
    fontWeight: "bold",
  },
  line: {
    width: 24,
    height: 2,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 4,
  },
})
