import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";
import hamburgerMenu from "../features/hamburgerSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    hamburger: hamburgerMenu,
  },
});
