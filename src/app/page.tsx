'use client'

import { useState } from 'react';
import CitySelector from '../components/CitySelector';
import WeatherCard from '../components/WeatherCard';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <CitySelector setWeatherData={setWeatherData} />
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
}
