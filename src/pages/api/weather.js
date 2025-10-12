import axios from 'axios';
export default async function handler(req, res) {
  const { city } = req.query;

  const mockWeatherData = {
    coord: { lon: -0.1257, lat: 51.5085 },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 22.5,
      feels_like: 22.1,
      temp_min: 21,
      temp_max: 24,
      pressure: 1012,
      humidity: 60,
    },
    visibility: 10000,
    wind: {
      speed: 3.6,
      deg: 90,
    },
    clouds: {
      all: 0,
    },
    dt: 1633790400,
    sys: {
      type: 2,
      id: 2019646,
      country: "GB",
      sunrise: 1633768442,
      sunset: 1633808442,
    },
    timezone: 3600,
    id: 2643743,
    name: city || "Mock City",
    cod: 200,
  };

  res.status(200).json(mockWeatherData);
}
