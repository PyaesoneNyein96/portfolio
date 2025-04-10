import { createSlice } from "@reduxjs/toolkit";

const harmburgerSlice = createSlice({
  name: "hamburger",
  initialState: {
    isOpen: 0,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
      console.log(state.isOpen);
    },
  },
});

export const isOpenMenu = (state) => state.hamburger.isOpen;

export const { toggleMenu } = harmburgerSlice.actions;

export default harmburgerSlice.reducer;
