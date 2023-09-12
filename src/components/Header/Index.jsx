import React from 'react';

import { Container } from '../../styled';
import HeaderContent from './HeaderContent/Index';
import LastUpadate from './LastUpdate/Index';
import Navbar from './Navbar/Index';

function Header() {
  return (
    <header>
      <Container>
        <Navbar />
        <HeaderContent />
        <LastUpadate />
      </Container>
    </header>
  );
}

export default Header;
