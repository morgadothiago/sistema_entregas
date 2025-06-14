import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  containerInput: {
    padding: 5,
    gap: 5,
  },
  labelInput: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    color: theme.colors.button,
  },
  input: {
    backgroundColor: theme.colors.buttonText,
    width: "100%",
    height: 56,
    borderRadius: 10,
    paddingLeft: 16,
  },
});
