import React from 'react';

import { Container } from '../../styled';
import Navbar from './Navbar/Index';
import { HeaderInner, StyledHeader } from './styles';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Navbar />
      </Container>
    </StyledHeader>
  );
}

export default Header;
