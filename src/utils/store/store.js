import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../favoriteSlice/favoriteSlice";
import userReducer from "../userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorite: favoriteReducer,
  },
});
