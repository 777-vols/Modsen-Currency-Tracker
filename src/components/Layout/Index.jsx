import Footer from '@components/Footer/Index.jsx';
import Header from '@components/Header/Index.jsx';
import * as urls from '@constants/urls';
import BankCard from '@pages/BankCard/Index';
import Contact from '@pages/Contact/Index';
import Home from '@pages/Home/Index';
import PageNotFound from '@pages/PageNotFound/Index';
import Timeline from '@pages/Timeline/Index';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppWrapper from './styled';

function Layout() {
  return (
    <AppWrapper>
      <Header />
      <main>
        <Routes>
          <Route path={urls.home} element={<Home />} />
          <Route path={urls.timeline} element={<Timeline />} />
          <Route path={urls.bankCard} element={<BankCard />} />
          <Route path={urls.contact} element={<Contact />} />
          <Route path={urls.notFound} element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </AppWrapper>
  );
}

export default Layout;
