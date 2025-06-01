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
    title: "simulate",
    subTile: "Simulação de entrega",
    url: "/simulate",
    icon: RefreshCcw,
  },
  {
    title: "delivry",
    subTile: "Entregador",
    url: "/delivery",
    icon: Car,
  },
  {
    title: "debts",
    subTile: "Débitos",
    url: "/debts",
    icon: DollarSign,
  },
  {
    title: "notifications",
    subTile: "Notificações",
    url: "/dashboard/notifications",
    icon: Bell,
  },
];

export const itemAdm = [
  {
    title: "add-new-delivery",
    subTile: "Cadastro de Entregador",
    url: "/admin/delivery",
    icon: Car,
  },
  {
    title: "payments",
    subTile: "Repasse de valores",
    url: "/admin/repassar-valores",
    icon: DollarSign,
  },
  {
    title: "acess-user",
    subTile: "Solicitação de acesso",
    url: "/admin/solicitacao-acesso",
    icon: User,
  },
  {
    title: "listuser",
    subTile: "Listagem de Usuario",
    url: "/listuser",
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
