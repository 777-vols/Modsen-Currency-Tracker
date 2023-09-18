import CurrencyCard from '@components/СurrencyСard/Index';
import currencyCardsData from '@constants/currencyCardsData.js';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';

import { Container } from '../../styled';
import Modal from './HomeModal/Index';
import { CardsWrapper, HomeWrapper, Quotes, Stocks, StyledHeader, StyledSpan } from './styled';

function Home() {
  const { quotesCards, stocksCards } = currencyCardsData;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [apiCurrenciesData, setApiCurrenciesData] = useState({});
  const [currenciesList, setCurrenciesList] = useState([]);
  const [currentExchangeCurrencies, setCurrentExchangeCurrencies] = useState({ from: '', to: '' });

  useEffect(() => {
    axios
      .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
      .then((res) => {
        setApiCurrenciesData(() => res.data);
        setCurrenciesList(() => Object.keys(res.data.usd));
      });
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
            <StyledHeader>
              <StyledSpan>Stocks</StyledSpan>
            </StyledHeader>
            <CardsWrapper>{stocksCardsList}</CardsWrapper>
          </Stocks>
          <Quotes>
            <StyledHeader>
              <StyledSpan>Quotes</StyledSpan>
            </StyledHeader>
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
