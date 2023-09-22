import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toggleTheme } from '@store/slices/ThemeSlice';

import { StyledLabel, SwichToggle } from './styled';

function Checkbox() {
  const dispatch = useDispatch();
  const theme = Boolean(+localStorage.getItem('darkTheme'));
  const [darkTheme, setTheme] = useState(!theme);

  function handleChangeTheme() {
    if (localStorage.getItem('darkTheme') === null) {
      localStorage.setItem('darkTheme', 1);
    } else if (+localStorage.getItem('darkTheme') === 1) {
      localStorage.setItem('darkTheme', 0);
    } else {
      localStorage.setItem('darkTheme', 1);
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
