import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudImg: {
    flex: 1,
    resizeMode: "cover",
  },
  form: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: theme.colors.button,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 20,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});
