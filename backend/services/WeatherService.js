const getWeatherData = async (city, units = "metric") => {
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error("OpenWeather API key is not configured");
  }

  if (!city) {
    throw new Error("City name is required");
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=${units}`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("City not found");
    }
    throw new Error(`Weather API error: ${response.status}`);
  }

  const weatherData = await response.json();
  return weatherData;
};

module.exports = { getWeatherData };
