import React from "react";
import { ActivityIndicator } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";
import { theme } from "../../global/theme";

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export function Button({
  label,
  onPress,
  disabled = false,
  loading = false,
}: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress} disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.buttonText} />
      ) : (
        <ButtonText>{label}</ButtonText>
      )}
    </ButtonContainer>
  );
}
