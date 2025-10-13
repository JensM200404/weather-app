import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { fetchWeatherByCity } from "../pages/api/weather";

export default function CitySelector({ setWeatherData, units }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCityChange = async (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const data = await fetchWeatherByCity(city, units);
      setWeatherData(data);
      setCity("");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          className="w-full bg-gray-50 placeholder:text-gray-400 text-gray-900 text-base border border-gray-200 rounded-lg pl-12 pr-4 py-3.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-300"
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleCityChange(e)}
          disabled={isLoading}
        />
        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2 rounded-lg bg-blue-600 py-2 px-4 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 disabled:cursor-not-allowed"
          type="button"
          onClick={handleCityChange}
          disabled={!city.trim() || isLoading}
        >
          <Search className="w-4 h-4" />
          <span className="hidden sm:inline">
            {isLoading ? "Loading..." : "Search"}
          </span>
        </button>
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
