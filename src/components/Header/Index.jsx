import React from 'react';

import { Container } from '../../styled';
import HeaderContent from './HeaderContent/HeaderContent';
import LastUpadate from './LastUpdate/Index';
import Navbar from './Navbar/Index';
import { HeaderInner, StyledHeader } from './styles';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Navbar />
        <HeaderContent />
        <LastUpadate />
      </Container>
    </StyledHeader>
  );
}

export default Header;
