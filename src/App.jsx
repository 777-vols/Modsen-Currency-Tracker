import Footer from '@components/Footer/Index.jsx';
import Header from '@components/Header/Index.jsx';
import Loading from '@components/Loading/Index.jsx';
import Modal from '@components/Modal/Index.jsx';
import currencyCardsData from '@constants/currencyCardsData.js';
import * as urls from '@constants/urls';
import axios from 'axios';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppWrapper } from './styled.js';

const Home = lazy(() => import('@pages/Home/Index.jsx'));
const Timeline = lazy(() => import('@pages/Timeline/Index.jsx'));
const BankCard = lazy(() => import('@pages/BankCard/Index.jsx'));
const Contact = lazy(() => import('@pages/Contact/Index.jsx'));

function App() {
  const theme = useSelector((state) => state.themes.currentTheme);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currenciesData, setCurrenciesData] = useState({});
  const [currenciesList, setCurrenciesList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
      .then((res) => {
        setCurrenciesData(() => res.data);
        setCurrenciesList(() => Object.keys(res.data.usd));
      });
  }, []);

  function openCloseModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Suspense fallback={<Loading />}>
          <Header />
          <main>
            <Routes>
              <Route
                path={urls.home}
                element={<Home cardsData={currencyCardsData} openModalWindow={openCloseModal} />}
              />
              <Route path={urls.timeline} element={<Timeline />} />
              <Route path={urls.bankCard} element={<BankCard />} />
              <Route path={urls.contact} element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </AppWrapper>
      <Modal isOpen={isOpenModal} closeModalWindow={openCloseModal} />
    </ThemeProvider>
  );
}

export default App;
