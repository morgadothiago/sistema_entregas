import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  containerInput: {
    marginBottom: 16,
  },
  labelInput: {
    fontSize: 16,
    marginBottom: 4,
    color: theme.colors.button,
  },
  input: {
    height: 48,
    borderWidth: 1,
    color: "#fff",
    borderRadius: 6,
    paddingHorizontal: 12,
    backgroundColor: theme.colors.buttonText,
  },
  errorText: {
    marginTop: 4,
    color: "red",
    fontSize: 12,
  },
});
