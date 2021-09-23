import { AXIOS } from "./axiosConfig";
import { API_KEY } from "../constants/variables";

const getForecast5day3hour = async (id) => {
  const { data } = await AXIOS.get(`/forecast?id=${id}&appid=${API_KEY}`) || {};

  return data;
}

export { getForecast5day3hour };
