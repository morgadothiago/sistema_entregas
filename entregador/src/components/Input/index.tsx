import React from "react";
import { View, TextInput, Text, type TextInputProps } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
  label: string;
};

export function Input({ label, ...rest }: Props) {
  return (
    <View style={styles.containerInput}>
      <Text style={styles.labelInput}>{label}</Text>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
}
