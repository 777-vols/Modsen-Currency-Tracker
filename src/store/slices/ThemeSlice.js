import allThemes from '@constants/themes';
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'themes',
  initialState: {
    dark: true,
    currentTheme: allThemes.dark
  },
  reducers: {
    toggleTheme(state) {
      state.dark = !state.dark;
      if (state.dark) state.currentTheme = allThemes.dark;
      else state.currentTheme = allThemes.light;
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
