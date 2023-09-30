import React from 'react';
import AllRouters from '@components/AllRouters/Index';
import Footer from '@components/Footer/Index.jsx';
import Header from '@components/Header/Index.jsx';

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
