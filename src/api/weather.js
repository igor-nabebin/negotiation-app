import axios from "axios";

const APIKey = "d7cf9c0a0f85ae1b25248e16e0c027dd";

export async function getWeatherByCityName(cityName) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: cityName,
          units: "metric",
          APPID: APIKey
        }
      }
    );
    return response && response.data;
  } catch (error) {
    throw error;
  }
}
