import React from 'react';

import HeaderBanner from './HeaderBanner/Index';
import LastUpadate from './LastUpdate/Index';
import Navbar from './Navbar/Index';

function Header() {
  return (
    <header style={{ position: 'relative' }}>
      <Navbar />
      <HeaderBanner />
      <LastUpadate />
    </header>
  );
}

export default Header;
