
const initialState = { weather: null };

export const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
      // case SET_GENRES: {
      //   return { ...state, genres: payload };
      // }

    default: {
      return state;
    }
  }
}
