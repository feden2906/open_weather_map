import { SET_CITY, SET_WEATHERS } from "../action-types";

const initialState = { weather: null, city: null };

export const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
      case SET_WEATHERS: {
        return { ...state, weather: payload };
      }

      case SET_CITY: {
        return { ...state, city: payload };
      }

    default: {
      return state;
    }
  }
}
