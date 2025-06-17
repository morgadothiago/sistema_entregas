// src/components/Input/index.tsx
import React from "react";
import { View, TextInput, Text, type TextInputProps } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/theme";

type Props = TextInputProps & {
  label: string;
  error?: string;
};

export function Input({ label, error, ...rest }: Props) {
  return (
    <View style={styles.containerInput}>
      <Text style={styles.labelInput}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.error}
        {...rest}
      />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
}
