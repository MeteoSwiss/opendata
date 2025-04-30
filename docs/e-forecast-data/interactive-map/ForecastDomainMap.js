import React from 'react';
import { MapContainer, TileLayer, Rectangle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function ForecastDomainMap() {
  const bounds = [
    [42.08, 0.77],
    [50.48, 17.68],
  ];

  return (
    <div  style={{ display: 'flex', justifyContent: 'center' }}>

    <MapContainer
      center={[46.3, 9.2]}
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: '270px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Rectangle bounds={bounds} pathOptions={{ color: "#FF8833", weight: 2 }} />
    </MapContainer>
  </div>
  );
}
