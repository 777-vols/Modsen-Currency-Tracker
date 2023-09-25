import allThemes from '@constants/themes';
import { getLocaleStorageItem } from '@helpers/localeStorageHelpers';
import { createSlice } from '@reduxjs/toolkit';

const theme = Boolean(Number(getLocaleStorageItem('darkTheme')));

const themeSlice = createSlice({
  name: 'themes',
  initialState: {
    dark: !theme,
    currentTheme: !theme ? allThemes.dark : allThemes.light
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
