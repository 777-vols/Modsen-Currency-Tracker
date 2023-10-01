import React, { useEffect, useMemo, useRef, useState } from 'react';
import getCurrenciesList from '@api/apiRequests';
import constCurrencyCardsData from '@constants/constCurrencyCardsData.js';
import {
  clearLocaleStorage,
  getLocaleStorageItem,
  setLocaleStorageItem
} from '@helpers/localeStorageHelpers';

import { Container } from '@/styled';

import Modal from './HomeModal';
import { CardsWrapper, HomeWrapper, Quotes, Stocks, StyledSpan } from './styled';
import CurrencyCard from './СurrencyСard';

const { quotesCards, stocksCards } = constCurrencyCardsData;

function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [apiCurrenciesData, setApiCurrenciesData] = useState({});
  const [currenciesList, setCurrenciesList] = useState([]);
  const currentExchangeCurrencies = useRef({ from: '', to: '' });

  useEffect(() => {
    const updateTimePeriod = 24 * 3600 * 1000;
    const localStorageInitTime = getLocaleStorageItem('localStorageInitTime');
    const localStorageInitData = getLocaleStorageItem('localStorageCurrencyData');
    if (localStorageInitTime === null || localStorageInitData == null) {
      getCurrenciesList().then((res) => {
        setLocaleStorageItem('localStorageInitTime', Number(new Date()));
        setLocaleStorageItem('localStorageCurrencyData', JSON.stringify(res.data));

        setApiCurrenciesData(res.data);
        setCurrenciesList(Object.keys(res.data.usd));
      });
    } else if (Number(new Date() - localStorageInitTime > updateTimePeriod)) {
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
      {isOpenModal && (
        <Modal
          convertFromTo={currentExchangeCurrencies.current}
          allCurrenciesList={currenciesList}
          usdCourse={apiCurrenciesData.usd}
          closeModalWindow={openCloseModal}
        />
      )}
    </section>
  );
}

export default Home;
