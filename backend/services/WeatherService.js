const getWeatherData = async (city) => {
  return {
    name: city || "Mock City",
    main: { temp: 22.5, humidity: 60 },
    weather: [{ description: "clear sky" }],
    wind: { speed: 3.6 },
  };
};

module.exports = { getWeatherData };
