export type ToastType = "default" | "success" | "danger" | "warning" | "info";

export interface ShowToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
}
