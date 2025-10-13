"use client";

import { useState } from "react";
import { Cloud } from "lucide-react";
import SearchWeatherCard from "../components/SearchWeatherCard";
import FavoritesCard from "../components/FavoritesCard";
import { useFavorites } from "../context/favoritesContext";
import { fetchWeatherByCity } from "../pages/api/weather";

export default function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState("metric");
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleCityClick = async (city) => {
    try {
      const data = await fetchWeatherByCity(city, units);
      setWeatherData(data);
    } catch (error) {
      console.error("Failed to fetch weather for city:", city, error);
    }
  };

  const handleUnitChange = async (newUnits) => {
    setUnits(newUnits);

    if (weatherData && weatherData.name) {
      try {
        const data = await fetchWeatherByCity(weatherData.name, newUnits);
        setWeatherData(data);
      } catch (error) {
        console.error("Failed to refetch weather with new units:", error);
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <Cloud className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Weather Dashboard
            </h1>
          </div>
          <p className="text-gray-600 mb-4">
            Get real-time weather information for any city
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <SearchWeatherCard
            weatherData={weatherData}
            setWeatherData={setWeatherData}
            favorites={favorites}
            addFavorite={addFavorite}
            units={units}
            setUnits={handleUnitChange}
          />
          <FavoritesCard
            favorites={favorites}
            removeFavorite={removeFavorite}
            onCityClick={handleCityClick}
          />
        </div>
      </div>
    </main>
  );
}
