import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.button,
    margin: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "100%",
  },
  btnTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: theme.colors.primary,
  },
});
