import * as allThemes from '@constants/themes';
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'themes',
  initialState: {
    currentTheme: allThemes.darkTheme
  },
  reducers: {
    toggleTheme(state, action) {
      state.currentTheme = allThemes[action.payload];
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
