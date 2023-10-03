import { getLocaleStorageItem, setLocaleStorageItem } from '@helpers/localeStorageHelpers';
import { toggleTheme } from '@store/slices/ThemeSlice';

function changeThemeHelper(dispatch) {
  if (getLocaleStorageItem('currentTheme') === null) {
    setLocaleStorageItem('currentTheme', 'lightTheme');
  } else if (getLocaleStorageItem('currentTheme') === 'darkTheme') {
    setLocaleStorageItem('currentTheme', 'lightTheme');
  } else {
    setLocaleStorageItem('currentTheme', 'darkTheme');
  }

  dispatch(toggleTheme(getLocaleStorageItem('currentTheme')));
}

export default changeThemeHelper;
