import React from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapWithPolyline = () => {
  // Defina as coordenadas para a Polyline
  const polylinePositions = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  // Defina as coordenadas para os marcadores
  const markerPositions = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline
        positions={polylinePositions as [number, number][]}
        color="blue"
      />
      {markerPositions.map((position, idx) => (
        <Marker key={idx} position={position as [number, number]}>
          <Popup>Marcador {idx + 1}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithPolyline;
