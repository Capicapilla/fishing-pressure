import axios from "axios";

export async function getWeather(lat, lon) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  const response = await axios.get(url);
  return response.data;
}
