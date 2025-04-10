import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: 0,
    theme: 0,
  },
  reducers: {
    toggleTheme: (state) => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      // Rotate between 0 (light), 1 (dark), 2 (system)
      state.theme = (state.theme + 1) % 3;

      if (state.theme === 0) {
        localStorage.setItem("theme", "light");
        state.isDark = 0;
      } else if (state.theme === 1) {
        localStorage.setItem("theme", "dark");
        state.isDark = 1;
      } else if (state.theme === 2) {
        localStorage.removeItem("theme");
        state.isDark = mediaQuery.matches ? 1 : 0;
      }

    },

    setInitialTheme: (state) =>{
      const localTheme = localStorage.getItem('theme');
      if(localTheme){
        state.isDark = localTheme === 'dark' ? 1 : 0;
        state.theme = localTheme === 'dark' ? 1 : 0;
      }else{
        
        let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.matches ? state.isDark = 1 : state.isDark = 0;
        mediaQuery.matches ? state.theme = 2 : state.theme = 2;
      }
      
    },

  },
});

export const isDark = state => state.theme.isDark;
export const theme = state => state.theme.theme;

export const { toggleTheme ,setInitialTheme} = themeSlice.actions;
export default themeSlice.reducer;
