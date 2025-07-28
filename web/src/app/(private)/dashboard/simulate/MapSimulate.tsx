"use client"
import dynamic from "next/dynamic"
import type { ComponentType } from "react"
import L from "leaflet"

import carIcon from "../../../../../public/car.png"

const LeafletMap = dynamic(() => import("./_LeafletMap"), {
  ssr: false,
}) as ComponentType<{ route: [number, number][] }>

export const customIcon = L.icon({
  iconUrl: carIcon.src, // Caminho do seu ícone
  iconSize: [32, 32], // Tamanho do ícone [largura, altura]
  iconAnchor: [16, 16], // Ponto do ícone que será o "pino"
  popupAnchor: [0, -32], // Posição do popup em relação ao ícone
})

interface MapSimulateProps {
  route: [number, number][]
}

export default function MapSimulate({ route }: MapSimulateProps) {
  if (typeof window === "undefined") return null
  return <LeafletMap route={route} />
}
