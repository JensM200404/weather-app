import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5001';

export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather?city=${city}`);
    return response.data;
  } catch (error) {
    console.error('Weather API error:', error);
    throw error;
  }
};