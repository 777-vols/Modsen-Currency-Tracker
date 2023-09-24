import React, { useEffect, useMemo, useRef, useState } from 'react';

import getCurrenciesList from '@api/apiRequests';
import CurrencyCard from '@components/СurrencyСard/Index';
import currencyCardsData from '@constants/currencyCardsData.js';
import {
  clearLocaleStorage,
  getLocaleStorageItem,
  setLocaleStorageItem
} from '@helpers/localeStorageHelpers';

import { Container } from '../../styled';

import Modal from './HomeModal/Index';
import { CardsWrapper, HomeWrapper, Quotes, Stocks, StyledSpan } from './styled';

function Home() {
  const { quotesCards, stocksCards } = currencyCardsData;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [apiCurrenciesData, setApiCurrenciesData] = useState({});
  const [currenciesList, setCurrenciesList] = useState([]);
  const currentExchangeCurrencies = useRef({ from: '', to: '' });

  useEffect(() => {
    const limit = 24 * 3600 * 1000;
    const localStorageInitTime = getLocaleStorageItem('localStorageInitTime');
    const localStorageInitData = getLocaleStorageItem('localStorageCurrencyData');
    if (localStorageInitTime === null || localStorageInitData == null) {
      getCurrenciesList().then((res) => {
        setLocaleStorageItem('localStorageInitTime', Number(new Date()));
        setLocaleStorageItem('localStorageCurrencyData', JSON.stringify(res.data));

        setApiCurrenciesData(res.data);
        setCurrenciesList(Object.keys(res.data.usd));
      });
    } else if (Number(new Date() - localStorageInitTime > limit)) {
      getCurrenciesList().then((res) => {
        clearLocaleStorage();
        setLocaleStorageItem('localStorageInitTime', Number(new Date()));
        setLocaleStorageItem('localStorageCurrencyData', JSON.stringify(res.data));
      });
    }

    if (getLocaleStorageItem('localStorageCurrencyData')) {
      const data = JSON.parse(getLocaleStorageItem('localStorageCurrencyData'));
      setApiCurrenciesData(data);
      setCurrenciesList(Object.keys(data.usd));
    }
  }, []);

  function openCloseModal() {
    setIsOpenModal(!isOpenModal);
  }

  function exchangeCurrenciesHandler(newFrom, newTo = 'usd') {
    currentExchangeCurrencies.current.from = newFrom;
    currentExchangeCurrencies.current.to = newTo;
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
        convertFromTo={currentExchangeCurrencies.current}
        allCurrenciesList={currenciesList}
        usdCourse={apiCurrenciesData.usd}
        isOpen={isOpenModal}
        closeModalWindow={openCloseModal}
      />
    </section>
  );
}

export default Home;
