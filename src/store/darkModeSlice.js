import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: false,
  },

  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
