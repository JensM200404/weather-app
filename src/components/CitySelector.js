import { useState } from 'react';
import { fetchWeatherByCity } from '../pages/api/weather';

export default function CitySelector({ setWeatherData }) {
  const [city, setCity] = useState('');

  const handleCityChange = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleCityChange}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
}
