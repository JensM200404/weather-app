export default function WeatherCard({ weather }) {
  if (!weather) return <p>Loading...</p>;

  const { main, weather: weatherDetails, wind } = weather;

  return (
    <div>
      <h3>{weather.name}</h3>
      <p>{weatherDetails[0].description}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
}
