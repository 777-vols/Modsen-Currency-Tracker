import React, { useState } from 'react';

import { StyledLabel, SwichToggle } from './styled';

function Checkbox() {
  const [darkTheme, setTheme] = useState(true);
  function handleChangeTheme() {
    setTheme(!darkTheme);
  }
  return (
    <StyledLabel htmlFor="themeCheckbox" $currentTheme={darkTheme} onChange={handleChangeTheme}>
      <SwichToggle id="themeCheckbox" />
    </StyledLabel>
  );
}

export default Checkbox;
