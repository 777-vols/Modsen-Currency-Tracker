import React from 'react';
import AllRouters from '@components/AllRouters';
import Footer from '@components/Footer';
import Header from '@components/Header';

import AppWrapper from './styled';

function Layout() {
  return (
    <AppWrapper>
      <Header />
      <main>
        <AllRouters />
      </main>
      <Footer />
    </AppWrapper>
  );
}

export default Layout;
