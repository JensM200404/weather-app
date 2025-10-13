const { getWeatherData } = require("../services/WeatherService");
const logger = require("../utils/logger");

const getWeather = async (req, res, next) => {
  try {
    const { city, units } = req.query;

    if (!city) {
      logger.warn("Missing city parameter in request");
      return res.status(400).json({ error: "City parameter is required" });
    }

    const weatherData = await getWeatherData(city, units || "metric");

    logger.info(`Weather data retrieved for city: ${city}`, {
      city,
      units: units || "metric",
    });

    res.json(weatherData);
  } catch (error) {
    logger.error("Error in getWeather:", {
      message: error.message,
      stack: error.stack,
    });

    next(error);
  }
};

module.exports = { getWeather };
