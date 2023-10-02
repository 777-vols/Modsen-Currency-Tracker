import React, { useMemo, useRef, useState } from 'react';
import constCurrencyCardsData from '@constants/constCurrencyCardsData.js';
import useLocaleStorage from '@hooks/useLocaleStorage';

import { Container } from '@/styled';

import config from './config';
import Modal from './HomeModal';
import { CardsWrapper, HomeWrapper, Quotes, Stocks, StyledSpan } from './styled';
import CurrencyCard from './СurrencyСard';

const { quotesCards, stocksCards } = constCurrencyCardsData;
const [{ content: stocksContent }, { content: quotesContent }] = config;

function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [apiCurrenciesData, setApiCurrenciesData] = useState({});
  const currentExchangeCurrencies = useRef({ from: '', to: '' });

  useLocaleStorage(setApiCurrenciesData);

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
            <StyledSpan>{stocksContent}</StyledSpan>
            <CardsWrapper>{stocksCardsList}</CardsWrapper>
          </Stocks>
          <Quotes>
            <StyledSpan>{quotesContent}</StyledSpan>
            <CardsWrapper>{quotesCardsList}</CardsWrapper>
          </Quotes>
        </HomeWrapper>
      </Container>
      {isOpenModal && (
        <Modal
          convertFromTo={currentExchangeCurrencies.current}
          usdCourse={apiCurrenciesData.usd}
          closeModalWindow={openCloseModal}
        />
      )}
    </section>
  );
}

export default Home;
