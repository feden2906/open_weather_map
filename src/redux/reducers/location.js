import { SET_USER_LOCATION } from "../action-types";

const initialState = { userLocation: null };

export const locationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_LOCATION: {
      return { ...state, userLocation: payload };
    }

    default: {
      return state;
    }
  }
}
