import Footer from '@components/Footer/Index.jsx';
import Header from '@components/Header/Index.jsx';
import Loading from '@components/Loading/Index.jsx';
import * as urls from '@constants/urls';
import React, { lazy, Suspense, useTransition } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppWrapper } from './styled.js';

const Home = lazy(() => import('@pages/Home/Index.jsx'));
const Timeline = lazy(() => import('@pages/Timeline/Index.jsx'));
const BankCard = lazy(() => import('@pages/BankCard/Index.jsx'));
const Contact = lazy(() => import('@pages/Contact/Index.jsx'));

function App() {
  const [isPending, startTransition] = useTransition({
    timeoutMs: 3000
  });
  const theme = useSelector((state) => state.themes.currentTheme);
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Suspense fallback={<Loading />}>
          <Header />
          <main>
            <Routes>
              <Route path={urls.home} element={<Home />} />
              <Route path={urls.timeline} element={<Timeline />} />
              <Route path={urls.bankCard} element={<BankCard />} />
              <Route path={urls.contact} element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
