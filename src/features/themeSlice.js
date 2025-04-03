import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem('theme', state.isDark ? 'dark' : 'light');
    },

    setInitialTheme: (state) =>{
      const localTheme = localStorage.getItem('theme');
      state.isDark = localTheme === 'dark' ? true : false;
    },

  },
});

export const theme = state => state.theme.isDark;

export const { toggleTheme ,setInitialTheme} = themeSlice.actions;
export default themeSlice.reducer;
