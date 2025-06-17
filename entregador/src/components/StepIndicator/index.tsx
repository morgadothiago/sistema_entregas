import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../global/theme";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export function StepIndicator({
  currentStep,
  totalSteps,
  stepTitles,
}: StepIndicatorProps) {
  return (
    <View style={styles.container}>
      <View style={styles.stepsContainer}>
        {stepTitles.map((title, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <View key={index} style={styles.stepWrapper}>
              <View
                style={[
                  styles.step,
                  isActive && styles.activeStep,
                  isCompleted && styles.completedStep,
                ]}
              >
                <Text
                  style={[
                    styles.stepNumber,
                    isActive && styles.activeStepNumber,
                    isCompleted && styles.completedStepNumber,
                  ]}
                >
                  {stepNumber}
                </Text>
              </View>
              <Text
                style={[
                  styles.stepTitle,
                  isActive && styles.activeStepTitle,
                  isCompleted && styles.completedStepTitle,
                ]}
              >
                {title}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: theme.colors.background,
    shadowColor: theme.colors.gray[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  stepWrapper: {
    alignItems: "center",
    flex: 1,
  },
  step: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.gray[200],
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 2,
    borderColor: theme.colors.gray[300],
    shadowColor: theme.colors.gray[900],
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  activeStep: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    shadowColor: theme.colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  completedStep: {
    backgroundColor: theme.colors.success,
    borderColor: theme.colors.success,
    shadowColor: theme.colors.success,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  stepNumber: {
    fontSize: 16,
    fontFamily: theme.fonts.title700,
    color: theme.colors.gray[700],
  },
  activeStepNumber: {
    color: theme.colors.secondary,
  },
  completedStepNumber: {
    color: theme.colors.secondary,
  },
  stepTitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.gray[700],
    textAlign: "center",
    maxWidth: 80,
    marginTop: 4,
  },
  activeStepTitle: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.title500,
  },
  completedStepTitle: {
    color: theme.colors.gray[600],
  },
});
