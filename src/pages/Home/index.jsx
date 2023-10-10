import constCurrencyCardsData from '@constants/constCurrencyCardsData.js';
import useLocaleStorage from '@hooks/useLocaleStorage';
import React, { useCallback, useMemo, useRef, useState } from 'react';

import { Container } from '@/styled';

import config from './config';
import Modal from './HomeModal';
import { CardsWrapper, Quotes, Stocks, StyledSpan, Wrapper } from './styled';
import CurrencyCard from './СurrencyСard';

const { quotesCards, stocksCards } = constCurrencyCardsData;
const [{ content: stocksContent }, { content: quotesContent }] = config;

function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [apiCurrenciesData, setApiCurrenciesData] = useState({});
  const currentExchangeCurrencies = useRef({ from: '', to: '' });

  const setDataHandler = useCallback((data) => setApiCurrenciesData(data), []);

  useLocaleStorage(setDataHandler);

  const openCloseModal = useCallback(() => setIsOpenModal(!isOpenModal), [isOpenModal]);

  const exchangeCurrenciesHandler = useCallback((newFrom, newTo = 'usd') => {
    currentExchangeCurrencies.current.from = newFrom;
    currentExchangeCurrencies.current.to = newTo;
  }, []);

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
    [apiCurrenciesData, exchangeCurrenciesHandler, openCloseModal]
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
            usdData={apiCurrenciesData.usd}
          />
        ],
        []
      ),
    [apiCurrenciesData]
  );
  return (
    <section>
      <Container>
        <Wrapper>
          <Stocks>
            <StyledSpan>{stocksContent}</StyledSpan>
            <CardsWrapper>{stocksCardsList}</CardsWrapper>
          </Stocks>
          <Quotes>
            <StyledSpan>{quotesContent}</StyledSpan>
            <CardsWrapper>{quotesCardsList}</CardsWrapper>
          </Quotes>
        </Wrapper>
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
