"use client";

import CitySelector from "../components/CitySelector";
import WeatherCard from "../components/WeatherCard";

export default function SearchWeatherCard({
  weatherData,
  setWeatherData,
  favorites,
  addFavorite,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Search Weather
      </h2>
      <CitySelector setWeatherData={setWeatherData} />
      {weatherData && (
        <>
          <WeatherCard weather={weatherData} />
          {!favorites.includes(weatherData.name) && (
            <button
              onClick={() => addFavorite(weatherData.name)}
              className="mt-4 w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-500 transition"
            >
              Add to Favorites
            </button>
          )}
        </>
      )}
    </div>
  );
}
