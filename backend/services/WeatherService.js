const logger = require("../utils/logger");
const config = require("../config");

const getWeatherData = async (city, units = "metric") => {
  const apiKey = config.weatherApiKey;

  if (!apiKey) {
    throw new Error("OpenWeather API key is not configured");
  }

  if (!city) {
    throw new Error("City name is required");
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=${units}`;

  logger.info(`Fetching weather data from OpenWeather API`, { city, units });

  const response = await fetch(url);
  const weatherData = await response.json();

  if (!response.ok) {
    logger.warn("OpenWeather API responded with an error", {
      status: response.status,
      response: weatherData,
    });

    if (response.status === 404) {
      throw new Error("City not found");
    }

    const errorMsg = weatherData.message || "Unknown weather API error";
    throw new Error(`Weather API error: ${errorMsg}`);
  }

  logger.debug("Weather API response", weatherData);
  return weatherData;
};

module.exports = { getWeatherData };
