import changeThemeHelper from '@helpers/changeThemeHelper';
import { getLocaleStorageItem } from '@helpers/localeStorageHelpers';
import React from 'react';
import { useDispatch } from 'react-redux';

import { StyledLabel, SwichToggle } from './styled';

function Checkbox() {
  const dispatch = useDispatch();

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
