import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { theme } from "../../global/theme";

interface ProgressBarProps {
  progress: number;
  total: number;
}

export function ProgressBar({ progress, total }: ProgressBarProps) {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress / total,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress, total]);

  const width = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <Animated.View
          style={[
            styles.progress,
            {
              width,
            },
          ]}
        />
      </View>
      <View style={styles.stepsContainer}>
        {Array.from({ length: total }).map((_, index) => (
          <View
            key={index}
            style={[styles.step, index + 1 <= progress && styles.stepActive]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  track: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: theme.colors.button,
    borderRadius: 4,
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  step: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  stepActive: {
    backgroundColor: theme.colors.button,
  },
});
