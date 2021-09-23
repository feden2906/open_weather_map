import { AXIOS } from "./axiosConfig";
import { API_KEY } from "../constants/variables";

const getForecast5day3hour = async (city) => {
  const { data } = await AXIOS.get(`/find?$appid=${API_KEY}`) || {};

  return data;
}

export { getForecast5day3hour };
