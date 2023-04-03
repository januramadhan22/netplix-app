import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    isLoading: false,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
