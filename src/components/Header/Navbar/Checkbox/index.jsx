import changeThemeHelper from '@helpers/changeThemeHelper';
import { getLocaleStorageItem } from '@helpers/localeStorageHelpers';
import { toggleTheme } from '@store/slices/ThemeSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { StyledLabel, SwichToggle } from './styled';

function Checkbox() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getLocaleStorageItem('currentTheme') !== null)
      dispatch(toggleTheme(getLocaleStorageItem('currentTheme')));
  }, [dispatch]);

  function handleChangeTheme() {
    changeThemeHelper(dispatch);
  }
  return (
    <StyledLabel
      htmlFor="themeCheckbox"
      $currentTheme={getLocaleStorageItem('currentTheme')}
      onChange={handleChangeTheme}>
      <SwichToggle id="themeCheckbox" />
    </StyledLabel>
  );
}

export default Checkbox;
