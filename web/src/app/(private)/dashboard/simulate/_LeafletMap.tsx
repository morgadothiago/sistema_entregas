"use client"
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

if (typeof window !== "undefined") {
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  })
}

interface LeafletMapProps {
  route: [number, number][]
}

export default function LeafletMap({ route }: LeafletMapProps) {
  return (
    <MapContainer
      center={route[0]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={route} color="blue" />
      <Marker position={route[0]}>
        <Popup>Origem</Popup>
      </Marker>
      <Marker position={route[route.length - 1]}>
        <Popup>Destino</Popup>
      </Marker>
    </MapContainer>
  )
}
