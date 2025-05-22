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
  type = "default", // use "default" para não exibir ícone
  duration = 3000,
}: ShowToastProps) => {
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
      color: theme.colors.button,
      fontWeight: "500",
    },
    titleStyle: {
      color: theme.colors.button,
      fontSize: 18,
      fontWeight: "bold",
    },
    contentContainerStyle: {
      backgroundColor: theme.colors.buttonText,
      borderRadius: 8,
      marginTop: 30,
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
      backgroundColor: theme.colors.buttonText,
      borderColor: theme.colors.Error,
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
