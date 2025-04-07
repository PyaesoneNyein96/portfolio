import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: 0,
    theme: 0,
  },
  reducers: {
toggleTheme: (state) => {
  // console.log(state.isDark);

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // Rotate through 0 (light), 1 (dark), 2 (system)
  state.theme  = (state.theme + 1) % 3;


   
  if (state.theme === 0) {
    localStorage.setItem('theme', 'light');
    state.dark = 0;
    console.log(['dark' ,state.isDark]);
    console.log(['theme',state.theme]);
 
  } else if (state.theme === 1) {
    localStorage.setItem('theme', 'dark');
    state.dark = 1;
    console.log(['dark' ,state.isDark]);
    console.log(['theme',state.theme]);
 
  } else if (state.theme === 2) {
    // System theme
    localStorage.setItem('theme',null);
    state.isDark = mediaQuery.matches ? 1 : 0;
      console.log(['dark' ,state.isDark]);
      console.log(['theme',state.theme]);
    
    // Optional: update state based on actual system theme
  }
// console.log(['dark' ,state.isDark]);
// console.log(['theme',state.theme]);
 
 
},

    setInitialTheme: (state) =>{
      const localTheme = localStorage.getItem('theme');
      if(localTheme){
        state.isDark = localTheme === 'dark' ? 1 : 0;
      }else{
        let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.matches ? state.isDark = 1 : state.isDark = 0;
      }
      
    },

  },
});

export const isDark = state => state.theme.isDark;
export const theme = state => state.theme.theme;

export const { toggleTheme ,setInitialTheme} = themeSlice.actions;
export default themeSlice.reducer;
