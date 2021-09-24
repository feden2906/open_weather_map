import { AXIOS } from "./axiosConfig";
import { API_KEY } from "../constants/variables";

const getForecast5day3hour = async (id) => {
  const { data } = await AXIOS.get(`/forecast?id=${id}&appid=${API_KEY}`) || {};

  return data;
}

const getForecastByLocation = async (lat, lon) => {
  const { data } = await AXIOS.get(`/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`) || {};

  return data;
}

export { getForecast5day3hour, getForecastByLocation };
