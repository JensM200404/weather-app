import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5001";

export const fetchWeatherByCity = async (city, units = "metric") => {
  try {
    const response = await axios.get(`${BASE_URL}/api/weather`, {
      params: {
        city,
        units,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Weather API error:", error);

    if (error.response) {
      throw new Error(
        error.response.data.error || "Failed to fetch weather data"
      );
    } else if (error.request) {
      throw new Error(
        "No response from server. Please check if backend is running."
      );
    } else {
      throw new Error("Failed to fetch weather data");
    }
  }
};
