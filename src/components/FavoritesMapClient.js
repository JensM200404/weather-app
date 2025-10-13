"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import { fetchWeatherByCity } from "../pages/api/weather";

import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const createWeatherIcon = (iconCode) => {
  return L.icon({
    iconUrl: `http://openweathermap.org/img/wn/${iconCode}@2x.png`,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
    className: "weather-marker-icon",
  });
};

export default function FavoritesMap({ favorites, units }) {
  const [weatherMarkers, setWeatherMarkers] = useState([]);

  useEffect(() => {
    const loadWeatherData = async () => {
      const results = await Promise.all(
        favorites.map(async (city) => {
          try {
            const data = await fetchWeatherByCity(city, units);
            return {
              city: data.name,
              lat: data.coord.lat,
              lon: data.coord.lon,
              temp: data.main.temp,
              description: data.weather[0].description,
              icon: data.weather[0].icon,
            };
          } catch (error) {
            console.error("Error fetching weather for map:", city, error);
            return null;
          }
        })
      );

      setWeatherMarkers(results.filter((res) => res !== null));
    };

    if (favorites.length > 0) {
      loadWeatherData();
    }
  }, [favorites, units]);

  if (weatherMarkers.length === 0) return null;

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Favorite Cities Map
      </h2>

      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
        className="h-[500px] w-full rounded-lg"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {weatherMarkers.map((marker) => (
          <Marker
            key={marker.city}
            position={[marker.lat, marker.lon]}
            icon={createWeatherIcon(marker.icon)}
          >
            <Popup>
              <div className="text-center">
                <p className="font-semibold">{marker.city}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${marker.icon}@2x.png`}
                  alt={marker.description}
                  className="mx-auto w-12 h-12"
                />
                <p className="text-gray-700 capitalize">{marker.description}</p>
                <p className="font-bold text-lg">
                  {Math.round(marker.temp)}
                  {units === "metric" ? "°C" : "°F"}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
