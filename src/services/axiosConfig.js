import axios from "axios";

export const AXIOS = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  headers: {

  }
})
