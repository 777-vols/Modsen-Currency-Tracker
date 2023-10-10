import * as allThemes from '@constants/themes';
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'themes',
  initialState: {
    currentTheme: allThemes.darkTheme
  },
  reducers: {
    toggleTheme(state, action) {
      const { payload } = action;
      state.currentTheme = allThemes[payload];
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
