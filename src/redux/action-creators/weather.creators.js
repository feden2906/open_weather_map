import { SET_CITY, SET_WEATHERS } from "../action-types";

export const setWeather = (payload) => ({type: SET_WEATHERS, payload: payload});
export const setCity = (payload) => ({type: SET_CITY, payload: payload});
