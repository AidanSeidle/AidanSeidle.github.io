import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom PNG Fort Icon
const fortIcon = L.icon({
  iconUrl: 'assets/media/icons/castle.png',
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [80, 41],
  shadowAnchor: [30, 41],
});

const DOLLAR_GENERAL_LOCS = [
  {
    id: '01',
    title: '08/15/2026',
    description: 'Movie: Zhu Zhu Pets Quest for Zhu\n Dinner: Kraft Mac n Cheese\n Drink: \n>Aidan: Strawberry Fanta\n>Megan: Pineapple Fanta',
    lat: 40.4573545,
    lng: -86.9615855,
  },
];

export default function MapPage() {
  const cartoApiKey = import.meta.env.VITE_CARTO_API_KEY;

  const tileUrl = cartoApiKey
    ? `https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}.png?key=${cartoApiKey}`
    : 'https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}.png';

  return (
    <div className="flex flex-col h-screen w-full bg-neutral-900 text-neutral-100 overflow-hidden">
      {/* Header */}
      <header className="p-4 border-b border-neutral-800 flex justify-between items-center bg-neutral-900 z-10">
        <div>
          <h2>"Slaying the General" Map of Conquest</h2>
          <p className="text-xs text-neutral-400">Slaying a General requires going to a Dollar General location and purchasing a DVD, drink, and meal. Then, you must complete the movie and drink over the meal.</p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
          {DOLLAR_GENERAL_LOCS.length} General(s) Slain
        </span>
      </header>

      {/* Map Container */}
      <div className="flex-1 w-full h-full relative">
        <MapContainer
          center={[40, -83]}
          zoom={6}
          style={{ height: 'calc(100vh - 200px)', width: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url={tileUrl}
          />

          {/* Render static markers */}
          {DOLLAR_GENERAL_LOCS.map((loc) => (
            <Marker
              key={loc.id}
              position={[loc.lat, loc.lng]}
              icon={fortIcon}
            >
              <Popup minWidth={250}>
                <div className="p-1 min-w-[140px] text-neutral-900">
                  <h3 className="font-custom text-base font-semibold leading-tight text-neutral-900">
                    {loc.title}
                  </h3>

                  {loc.description && (
                    <p className="text-xs text-neutral-600 mt-1 whitespace-pre-line" style={{ whiteSpace: 'pre-line' }}>
                      {loc.description}
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}