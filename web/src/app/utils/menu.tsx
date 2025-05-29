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
    menuTitle: "Início",
    url: "/",
    icon: Home,
  },
  {
    title: "Simulação de entrega",
    menuTitle: "Simulação de Entrega",
    url: "/simulate",
    icon: RefreshCcw,
  },
  {
    title: "Entregador",
    menuTitle: "Entregador",
    url: "/delivery",
    icon: Car,
  },
  {
    title: "Débitos",
    menuTitle: "Débitos",
    url: "/debts",
    icon: DollarSign,
  },
  {
    title: "Notificações",
    menuTitle: "Notificações",
    url: "/dashboard/notifications",
    icon: Bell,
  },
];

export const itemAdm = [
  {
    title: "Cadastro de Entregador",
    menuTitle: "Cadastro de Entregador",
    url: "/dashboard/admin/delivery",
    icon: Car,
  },
  {
    title: "Repasse de valores",
    menuTitle: "Repasse de Valores",
    url: "/admin/repassar-valores",
    icon: DollarSign,
  },
  {
    title: "Solicitação de acesso",
    menuTitle: "Solicitação de Acesso",
    url: "/admin/solicitacao-acesso",
    icon: User,
  },
  {
    title: "listuser",
    menuTitle: "Lista de Usuários",
    url: "/listuser",
    icon: User,
  },
];
export const itemSupport = [
  {
    title: "Email",
    menuTitle: "Email",
    action: () => {
      // Lógica para ação de email
    },
    icon: Mail,
  },
  {
    title: "WhatsApp",
    menuTitle: "WhatsApp",
    action: () => {
      // Lógica para ação do WhatsApp
    },
    icon: FaWhatsapp,
  },
];
