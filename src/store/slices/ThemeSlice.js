import * as allThemes from '@constants/themes';
import { getLocaleStorageItem } from '@helpers/localeStorageHelpers';
import { createSlice } from '@reduxjs/toolkit';

const theme = Boolean(Number(getLocaleStorageItem('darkTheme')));

const themeSlice = createSlice({
  name: 'themes',
  initialState: {
    dark: !theme,
    currentTheme: !theme ? allThemes.darkTheme : allThemes.lightTheme
  },
  reducers: {
    toggleTheme(state) {
      state.dark = !state.dark;
      if (state.dark) state.currentTheme = allThemes.darkTheme;
      else state.currentTheme = allThemes.lightTheme;
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
