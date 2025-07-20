import {
  Home,
  Car,
  DollarSign,
  User,
  RefreshCcw,
  Bell,
  Mail,
  Settings,
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export const items = [
  {
    title: "Home",
    subTile: "Home",
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
    title: "delivryDetails",
    subTile: "Detalhes da entrega",
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
]

export const itemAdm = [
  {
    title: "/admin/type-vehicle",
    subTile: "Tipo de veiculos",
    url: "/type-vehicle",
    icon: Car,
  },
  {
    title: "/admin/listuser",
    subTile: "Listagem de Usuario",
    url: "/user",
    icon: User,
  },
]

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
]
