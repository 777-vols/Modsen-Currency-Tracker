import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocaleStorageItem, setLocaleStorageItem } from '@helpers/localeStorageHelpers';
import { toggleTheme } from '@store/slices/ThemeSlice';

import { StyledLabel, SwichToggle } from './styled';

function Checkbox() {
  const dispatch = useDispatch();
  const theme = Boolean(Number(getLocaleStorageItem('darkTheme')));
  const [darkTheme, setTheme] = useState(!theme);

  function handleChangeTheme() {
    if (getLocaleStorageItem('darkTheme') === null) {
      setLocaleStorageItem('darkTheme', 1);
    } else if (Number(getLocaleStorageItem('darkTheme')) === 1) {
      setLocaleStorageItem('darkTheme', 0);
    } else {
      setLocaleStorageItem('darkTheme', 1);
    }

    dispatch(toggleTheme());
    setTheme(!darkTheme);
  }
  return (
    <StyledLabel htmlFor="themeCheckbox" $currentTheme={darkTheme} onChange={handleChangeTheme}>
      <SwichToggle id="themeCheckbox" />
    </StyledLabel>
  );
}

export default Checkbox;
