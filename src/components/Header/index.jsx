import React from 'react';

import HeaderBanner from './HeaderBanner';
import LastUpadate from './LastUpdate';
import Navbar from './Navbar';

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
