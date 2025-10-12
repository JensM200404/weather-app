
'use client';

import { useState } from 'react';
import { Cloud, Star} from 'lucide-react';
import CitySelector from '../components/CitySelector';
import WeatherCard from '../components/WeatherCard';

export default function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Cloud className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Weather Dashboard</h1>
          </div>
          <p className="text-gray-600">Get real-time weather information for any city</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Search Weather</h2>
            <CitySelector setWeatherData={setWeatherData} />
            {weatherData && <WeatherCard weather={weatherData} />}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-xl font-semibold text-gray-900">Favorite Cities</h2>
            </div>
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Star className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500">No favorite cities yet</p>
              <p className="text-sm text-gray-400 mt-2">Search for cities to add them to your favorites</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}