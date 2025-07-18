import { ToastService } from "react-native-toastier";
import { theme } from "../global/theme";

type ToastType = "success" | "danger" | "warning" | "info" | "default";

interface ShowToastProps {
  message: string;
  title?: string;
  type?: ToastType;
  duration?: number;
}

export const showAppToast = ({
  message,
  title = "",
  type = "default",
  duration = 3000,
}: ShowToastProps) => {
  const getToastStyles = (toastType: ToastType) => {
    switch (toastType) {
      case "success":
        return {
          backgroundColor: "#4CAF50", // Verde
          borderColor: "#45a049",
          textColor: "#fff",
        };
      case "danger":
        return {
          backgroundColor: "#f44336", // Vermelho
          borderColor: "#d32f2f",
          textColor: "#fff",
        };
      case "warning":
        return {
          backgroundColor: "#ff9800", // Laranja
          borderColor: "#f57c00",
          textColor: "#fff",
        };
      default:
        return {
          backgroundColor: theme.colors.buttonText,
          borderColor: theme.colors.button,
          textColor: theme.colors.button,
        };
    }
  };

  const styles = getToastStyles(type);

  ToastService.show({
    message,
    title,
    type,
    duration,
    animation: "slideRight",
    position: "top",
    messageStyle: {
      textAlign: "center",
      fontSize: 16,
      color: styles.textColor,
      fontWeight: "500",
    },
    titleStyle: {
      color: styles.textColor,
      fontSize: 18,
      fontWeight: "bold",
    },
    contentContainerStyle: {
      backgroundColor: styles.backgroundColor,
      borderColor: styles.borderColor,
      borderWidth: 1,
      borderRadius: 8,
      marginTop: 30,
      paddingVertical: 16,
      paddingHorizontal: 24,
    },
  });
};

export const showErrorToast = (message: string, title = "Erro") => {
  ToastService.show({
    title,
    message,
    type: "danger",
    animation: "slideRight",
    position: "top",
    duration: 4000,
    titleStyle: {
      color: "#fff",
      fontWeight: "bold",
    },
    messageStyle: {
      color: "#fff",
      textAlign: "center",
    },
    contentContainerStyle: {
      backgroundColor: "#f44336", // Vermelho
      borderColor: "#d32f2f",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 8,
      marginTop: 30,
    },
  });
};
