import React, { useEffect, useMemo, useState } from 'react';

import getCurrenciesList from '@api/apiRequests';
import CurrencyCard from '@components/СurrencyСard/Index';
import currencyCardsData from '@constants/currencyCardsData.js';

import { Container } from '../../styled';

import Modal from './HomeModal/Index';
import { CardsWrapper, HomeWrapper, Quotes, Stocks, StyledSpan } from './styled';

function Home() {
  const { quotesCards, stocksCards } = currencyCardsData;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [apiCurrenciesData, setApiCurrenciesData] = useState({});
  const [currenciesList, setCurrenciesList] = useState([]);
  const [currentExchangeCurrencies, setCurrentExchangeCurrencies] = useState({ from: '', to: '' });

  useEffect(() => {
    const limit = 24 * 3600 * 1000;
    const localStorageInitTime = localStorage.getItem('localStorageInitTime');
    const localStorageInitData = localStorage.getItem('localStorageCurrencyData');
    if (localStorageInitTime === null || localStorageInitData == null) {
      getCurrenciesList().then((res) => {
        localStorage.setItem('localStorageInitTime', +new Date());
        localStorage.setItem('localStorageCurrencyData', JSON.stringify(res.data));

        setApiCurrenciesData(res.data);
        setCurrenciesList(Object.keys(res.data.usd));
      });
    } else if (+new Date() - localStorageInitTime > limit) {
      getCurrenciesList().then((res) => {
        localStorage.clear();
        localStorage.setItem('localStorageInitTime', +new Date());
        localStorage.setItem('localStorageCurrencyData', JSON.stringify(res.data));
      });
    }

    if (localStorage.getItem('localStorageCurrencyData')) {
      const data = JSON.parse(localStorage.getItem('localStorageCurrencyData'));
      setApiCurrenciesData(data);
      setCurrenciesList(Object.keys(data.usd));
    }
  }, []);

  function openCloseModal() {
    setIsOpenModal(!isOpenModal);
  }

  function exchangeCurrenciesHandler(newFrom, newTo = 'usd') {
    setCurrentExchangeCurrencies({ from: newFrom, to: newTo });
  }

  const quotesCardsList = useMemo(
    () =>
      Object.keys(quotesCards).reduce(
        (accum, element) => [
          ...accum,
          <CurrencyCard
            key={element}
            currencyShortName={element.toLowerCase()}
            currencyFullName={quotesCards[element].name}
            currencyImg={quotesCards[element].img}
            openModalWindow={openCloseModal}
            usdData={apiCurrenciesData.usd}
            exchangeCurrenciesHandler={exchangeCurrenciesHandler}
          />
        ],
        []
      ),
    [apiCurrenciesData]
  );

  const stocksCardsList = useMemo(
    () =>
      Object.keys(stocksCards).reduce(
        (accum, element) => [
          ...accum,
          <CurrencyCard
            key={element}
            currencyShortName={element.toLowerCase()}
            currencyFullName={stocksCards[element].name}
            currencyImg={stocksCards[element].img}
            openModalWindow={null}
          />
        ],
        []
      ),
    [stocksCards]
  );

  return (
    <section>
      <Container>
        <HomeWrapper>
          <Stocks>
            <StyledSpan>Stocks</StyledSpan>
            <CardsWrapper>{stocksCardsList}</CardsWrapper>
          </Stocks>
          <Quotes>
            <StyledSpan>Quotes</StyledSpan>
            <CardsWrapper>{quotesCardsList}</CardsWrapper>
          </Quotes>
        </HomeWrapper>
      </Container>
      <Modal
        convertFromTo={currentExchangeCurrencies}
        allCurrenciesList={currenciesList}
        usdCourse={apiCurrenciesData.usd}
        isOpen={isOpenModal}
        closeModalWindow={openCloseModal}
      />
    </section>
  );
}

export default Home;
