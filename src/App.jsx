import Footer from '@components/Footer/Index.jsx';
import Header from '@components/Header/Index.jsx';
import * as urls from '@constants/urls';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loading from './components/Loading/Index.jsx';
import { AppWrapper } from './styled.js';

const Home = lazy(() => import('@pages/Home/Index.jsx'));
const Timeline = lazy(() => import('@pages/Timeline/Index.jsx'));
const BankCard = lazy(() => import('@pages/BankCard/Index.jsx'));
const Contact = lazy(() => import('@pages/Contact/Index.jsx'));

function App() {
  return (
    <AppWrapper>
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          <Route path={urls.home} element={<Home />} />
          <Route path={urls.timeline} element={<Timeline />} />
          <Route path={urls.bankCard} element={<BankCard />} />
          <Route path={urls.contact} element={<Contact />} />
        </Routes>
        <Footer />
      </Suspense>
    </AppWrapper>
  );
}

export default App;
