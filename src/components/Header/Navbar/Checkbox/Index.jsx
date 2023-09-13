import { toggleTheme } from '@store/slices/ThemeSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { StyledLabel, SwichToggle } from './styled';

function Checkbox() {
  const dispatch = useDispatch();
  const [darkTheme, setTheme] = useState(true);
  function handleChangeTheme() {
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
