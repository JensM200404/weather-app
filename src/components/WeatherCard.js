import { Droplets, Wind, Thermometer } from "lucide-react";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    name,
    main: { temp, humidity, feels_like },
    weather: weatherDetails,
    wind: { speed },
  } = weather;

  const description = weatherDetails[0]?.description || "";
  const iconCode = weatherDetails[0]?.icon || "01d";
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600 capitalize mt-1">{description}</p>
        </div>
        <img src={iconUrl} alt={description} className="w-20 h-20" />
      </div>

      <div className="text-5xl font-bold text-gray-900 mb-6">
        {Math.round(temp)}°C
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Thermometer className="w-4 h-4" />
            <span className="text-xs font-medium text-gray-600">
              Feels Like
            </span>
          </div>
          <span className="text-lg font-semibold text-gray-900">
            {Math.round(feels_like)}°C
          </span>
        </div>

        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Droplets className="w-4 h-4" />
            <span className="text-xs font-medium text-gray-600">Humidity</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">
            {Math.round(humidity)}%
          </span>
        </div>

        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Wind className="w-4 h-4" />
            <span className="text-xs font-medium text-gray-600">Wind</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">
            {speed.toFixed(1)} m/s
          </span>
        </div>
      </div>
    </div>
  );
}
