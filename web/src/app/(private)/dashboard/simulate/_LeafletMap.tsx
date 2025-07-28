"use client"

import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"
import React from "react"
import { useMap } from "react-leaflet"
import type L from "leaflet"

interface LeafletMapProps {
  route: [number, number][]
  addressOrigem: {
    latitude: number
    longitude: number
  }
  clientAddress: {
    latitude: number
    longitude: number
  }
}

// Dynamically import react-leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
)
const Polyline = dynamic(
  () => import("react-leaflet").then((mod) => mod.Polyline),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
})

// Ajusta o mapa para os limites da rota
function FitBounds({ route }: { route: [number, number][] }) {
  const map = useMap()
  React.useEffect(() => {
    if (route.length > 1) {
      map.fitBounds(route)
    } else if (route.length === 1) {
      map.setView(route[0], 15)
    }
  }, [map, route])
  return null
}

export default function LeafletMap({ route }: LeafletMapProps) {
  const [startIcon, setStartIcon] = React.useState<L.Icon | null>(null)
  const [endIcon, setEndIcon] = React.useState<L.Icon | null>(null)
  const [mapReady, setMapReady] = React.useState(false)

  React.useEffect(() => {
    const loadIcons = async () => {
      const L = (await import("leaflet")).default

      const start = L.icon({
        iconUrl:
          "data:image/svg+xml;charset=UTF-8," +
          encodeURIComponent(`
<svg width="32" height="32" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
</svg>
`),
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })

      const end = L.icon({
        iconUrl:
          "data:image/svg+xml;charset=UTF-8," +
          encodeURIComponent(`
<svg width="32" height="32" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
</svg>
`),
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })

      setStartIcon(start)
      setEndIcon(end)
    }

    loadIcons()
  }, [])

  if (!route || route.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
        Rota não disponível.
      </div>
    )
  }

  const center = route[0]

  return (
    <MapContainer
      center={center}
      zoom={14}
      scrollWheelZoom={false}
      whenReady={() => setMapReady(true)} // Garante que o mapa está pronto
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds route={route} />
      {route.length > 1 && <Polyline positions={route} color="blue" />}

      {/* Origem */}
      {mapReady && startIcon && (
        <Marker position={route[0]} icon={startIcon}>
          <Popup>Origem</Popup>
        </Marker>
      )}

      {/* Destino */}
      {mapReady && endIcon && route.length > 1 && (
        <Marker position={route[route.length - 1]} icon={endIcon}>
          <Popup>Destino</Popup>
        </Marker>
      )}
    </MapContainer>
  )
}
