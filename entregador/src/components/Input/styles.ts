import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  containerInput: {
    marginBottom: 16,
  },
  labelInput: {
    fontSize: 16,
    marginBottom: 4,
    color: theme.colors.gray[700],
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
    color: theme.colors.button,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: theme.colors.primary,

    shadowColor: theme.colors.gray[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  errorText: {
    marginTop: 4,
    color: theme.colors.error,
    fontSize: 12,
  },
});
