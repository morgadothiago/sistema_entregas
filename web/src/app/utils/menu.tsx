import {
  Home,
  Car,
  DollarSign,
  User,
  RefreshCcw,
  Bell,
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Simulação de entrega",
    url: "/simulate",
    icon: RefreshCcw,
  },
  {
    title: "Entregador",
    url: "/delivery",
    icon: Car,
  },
  {
    title: "Débitos",
    url: "/debts",
    icon: DollarSign,
  },
  {
    title: "Notificações",
    url: "/dashboard/notifications",
    icon: Bell,
  },
];

export const itemAdm = [
  {
    title: "Cadastro de Entregador",
    url: "/admin/delivery",
    icon: Car,
  },
  {
    title: "Repasse de valores",
    url: "/admin/repassar-valores",
    icon: DollarSign,
  },
  {
    title: "Solicitação de acesso",
    url: "/admin/solicitacao-acesso",
    icon: User,
  },
  {
    title: "Listagem de Usuarios",
    url: "/admin/solicitacao-acesso",
    icon: User,
  },
];

export const itemSupport = [
  {
    title: "Email",
    action: () => {
      // Add your email action logic here
    },
    icon: Mail,
  },
  {
    title: "WhatsApp",
    action: () => {
      // Add your WhatsApp action logic here
    },
    icon: FaWhatsapp,
  },
];
