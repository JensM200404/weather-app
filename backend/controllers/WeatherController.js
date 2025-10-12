const { getWeatherData } = require("../services/WeatherService");

const getWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ error: "City parameter is required" });
    }

    const weatherData = await getWeatherData(city);
    res.json(weatherData);
  } catch (error) {
    console.error("Error in getWeather:", error);

    if (error.message === "City not found") {
      return res.status(404).json({ error: "City not found" });
    }

    if (error.message.includes("API key")) {
      return res.status(500).json({ error: "Server configuration error" });
    }

    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};

module.exports = { getWeather };
