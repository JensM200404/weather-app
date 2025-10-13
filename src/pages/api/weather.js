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
    if (!error.response) {
      console.error("No response from server:", error);
      throw new Error("No response from server. Is the backend running?");
    }

    const status = error.response.status;
    const message = error.response.data?.error || "Unexpected error occurred";

    if (status === 404) {
      throw new Error("City not found");
    }

    console.error("Unexpected error from backend:", {
      status,
      message,
      fullError: error,
    });

    throw new Error(message);
  }
};
