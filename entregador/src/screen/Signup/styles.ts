import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  backgroudImg: {
    flex: 1,
    width: "100%",
    opacity: 0.9,
  },
  form: {
    flex: 1,
    backgroundColor: theme.colors.gray[100],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: theme.fonts.title700,
    color: theme.colors.primary,
    marginTop: 24,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
    paddingLeft: 12,
  },
  footer: {
    padding: 24,
    backgroundColor: theme.colors.gray[100],
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray[200],
    shadowColor: theme.colors.gray[900],
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  inputGroup: {
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 16,
  },
  rowItem: {
    flex: 1,
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 12,
    fontFamily: theme.fonts.text400,
    marginTop: 4,
    marginLeft: 4,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: theme.colors.gray[200],
    marginVertical: 24,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: theme.colors.gray[300],
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
    borderRadius: 12,
    paddingVertical: 16,
  },
  confirmationContainer: {
    backgroundColor: theme.colors.gray[100],
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
  },
  confirmationTitle: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.text,
    marginBottom: 12,
  },
  confirmationText: {
    fontSize: 15,
    fontFamily: theme.fonts.text400,
    color: theme.colors.text,
    marginBottom: 8,
    lineHeight: 22,
  },
});
