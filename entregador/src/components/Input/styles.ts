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
    width: "100%",
    height: 52,
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
    color: theme.colors.button,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.primary,
    fontSize: 18,
    shadowColor: theme.colors.gray[900],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 2,
  },
  inputFocused: {
    borderColor: "#4A90E2",
    borderWidth: 2,
    shadowColor: "#4A90E2",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 6,
  },
  errorText: {
    marginTop: 4,
    color: theme.colors.error,
    fontSize: 12,
  },
});
