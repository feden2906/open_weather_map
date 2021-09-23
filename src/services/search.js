import { AXIOS } from "./axiosConfig";
import { API_KEY } from "../constants/variables";

const getSearchCity = async (city) => {
  const { data } = await AXIOS.get(`/find?q=${city}&appid=${API_KEY}&units=metric&lang=ua`) || {};

  return data;
}

export { getSearchCity };
