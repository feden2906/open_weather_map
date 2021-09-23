import { combineReducers } from "redux";

import { locationReducer } from "./location";
import { weatherReducer } from "./weather";
import { themeReducer } from "./theme";

export const reducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  theme: themeReducer
})
