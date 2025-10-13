"use client";

import { useState } from "react";
import CitySelector from "../components/CitySelector";
import WeatherCard from "../components/WeatherCard";
import UnitToggle from "../components/UnitToggle";
import Toast from "../components/Toast";

export default function SearchWeatherCard({
  weatherData,
  setWeatherData,
  favorites,
  addFavorite,
  units,
  setUnits,
}) {
  const [showToast, setShowToast] = useState(false);

  const handleAddFavorite = (city) => {
    addFavorite(city);
    setShowToast(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Search Weather</h2>
        <UnitToggle units={units} setUnits={setUnits} />
      </div>

      <CitySelector setWeatherData={setWeatherData} units={units} />

      {weatherData && (
        <>
          <WeatherCard weather={weatherData} units={units} />
          {!favorites.includes(weatherData.name) && (
            <button
              onClick={() => handleAddFavorite(weatherData.name)}
              className="mt-4 w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-500 transition"
            >
              Add to Favorites
            </button>
          )}
        </>
      )}

      <Toast
        message="Added to favorites!"
        visible={showToast}
        onClose={() => setShowToast(false)}
        duration={3000}
      />
    </div>
  );
}
