const { getWeatherData } = require('../services/WeatherService');

const getWeather = async (req, res) => {
  try {
    const { city } = req.query;
    const weatherData = await getWeatherData(city);
    res.json(weatherData);
  } catch (error) {
    console.error('Error in getWeather:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getWeather };
