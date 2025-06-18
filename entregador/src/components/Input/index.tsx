// src/components/Input/index.tsx
import React, { useState } from "react";
import { View, TextInput, Text, type TextInputProps } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/theme";

type Props = TextInputProps & {
  label: string;
  error?: string;
  value?: string;
  inputRef?: React.Ref<any>;
  containerStyle?: any;
  inputStyle?: any;
  labelStyle?: any;
  errorStyle?: any;
  children?: React.ReactNode;
};

export function Input({
  label,
  error,
  value,
  inputRef,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  children,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[styles.containerInput, containerStyle]}>
      <Text style={[styles.labelInput, labelStyle]}>{label}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {children}
        <TextInput
          ref={inputRef}
          style={[
            styles.input,
            isFocused && styles.inputFocused,
            error && { borderColor: theme.colors.error },
            inputStyle,
          ]}
          placeholderTextColor={theme.colors.gray[400]}
          value={value ?? ""}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            rest.onBlur && rest.onBlur(e);
          }}
          {...rest}
        />
      </View>
      {error && <Text style={[styles.errorText, errorStyle]}>{error}</Text>}
    </View>
  );
}
