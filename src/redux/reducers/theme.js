
const initialState = { theme: null };

export const themeReducer = (state = initialState, action) => {
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
