import React from 'react'
// React leaflet
import { MapContainer, TileLayer,  Marker,Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

function Listing() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>  
    </div>
  )
}

export default Listing