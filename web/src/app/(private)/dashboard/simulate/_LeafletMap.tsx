"use client"

import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"
import React from "react"

interface LeafletMapProps {
  route: [number, number][]
}

// Dynamically import react-leaflet components to avoid SSR issues
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

import { useMap } from "react-leaflet"

// Helper to fix Leaflet marker icons in Next.js
const fixLeafletIcons = () => {
  if (typeof window !== "undefined") {
    import("leaflet").then((L) => {
      // @ts-expect-error: _getIconUrl is a private property not typed in leaflet types
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      })
    })
  }
}

// Helper component to fit map bounds to route
function FitBounds({ route }: { route: [number, number][] }) {
  const map = useMap()
  React.useEffect(() => {
    if (route.length > 1) {
      // Fit bounds to all points in the route
      // @ts-ignore
      map.fitBounds(route)
    } else if (route.length === 1) {
      map.setView(route[0], 15)
    }
  }, [map, route])
  return null
}

export default function LeafletMap({ route }: LeafletMapProps) {
  React.useEffect(() => {
    fixLeafletIcons()
  }, [])

  if (!route || route.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
        Rota não disponível.
      </div>
    )
  }

  // Default center: if only one point, use it; if multiple, use the first
  const center = route.length > 0 ? route[0] : [0, 0]

  return (
    <MapContainer
      center={center as [number, number]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Fit map bounds to route */}
      <FitBounds route={route} />
      {/* Draw the route as a polyline if more than one point */}
      {route.length > 1 && <Polyline positions={route} color="blue" />}
      {/* Mark the origin */}
      <Marker position={route[0]}>
        <Popup>Origem</Popup>
      </Marker>
      {/* Mark the destination if more than one point */}
      {route.length > 1 && (
        <Marker position={route[route.length - 1]}>
          <Popup>Destino</Popup>
        </Marker>
      )}
    </MapContainer>
  )
}
