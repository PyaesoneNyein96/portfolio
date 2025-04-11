import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import heroData from "../defaultData/heroData";

const URL = "https://dummyjson.com/posts"; // example

const initialState = {
  hero: heroData,
  status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

// const getHeroData = createAsyncThunk("fetch-hero", async () => {
//   try {
//     const res = await axios.get(URL);
//     return res.data;
//   } catch (e) {
//     throw new Error(e.message);
//   }
// });

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {},
  //   extraReducers(builder) {
  //     builder
  //       .addCase(getHeroData.pending, (state) => {
  //         state.status = "loading";
  //       })
  //       .addCase(getHeroData.fulfilled, (state, action) => {
  //         state.status = "succeeded";
  //         state.hero = action.payload;
  //       })
  //       .addCase(getHeroData.rejected, (state, action) => {
  //         state.status = "failed";
  //         state.error = action.error.message;
  //       });
  //   },
});

export const getHero = (state) => state.hero.hero;
export const getHeroStatus = (state) => state.hero.status;
export const getHeroError = (state) => state.hero.error;

export default heroSlice.reducer;
