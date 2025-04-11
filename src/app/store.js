import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";
import hamburgerMenu from "../features/hamburgerSlice";
import heroReducer from "../features/HeroSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    hamburger: hamburgerMenu,
    hero:heroReducer,
  },
});
