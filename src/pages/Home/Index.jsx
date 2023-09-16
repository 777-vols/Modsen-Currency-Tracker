import CurrencyCard from '@components/СurrencyСard/Index';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { Container } from '../../styled';
import { CardsWrapper, HomeWrapper, Quotes, Stocks, StyledHeader, StyledSpan } from './styled';

function Home({ apiCurrenciesData, cardsDataValues, openModalWindow, exchangeCurrenciesHandler }) {
  // console.log(apiCurrenciesData);

  const { quotesCards, stocksCards } = cardsDataValues;

  const quotesCardsList = useMemo(
    () =>
      Object.keys(quotesCards).reduce(
        (acc, element) => [
          ...acc,
          <CurrencyCard
            key={element}
            currencyShortName={element.toLowerCase()}
            currencyFullName={quotesCards[element].name}
            currencyImg={quotesCards[element].img}
            openModalWindow={openModalWindow}
            usdData={apiCurrenciesData.usd}
            exchangeCurrenciesHandler={exchangeCurrenciesHandler}
          />
        ],
        []
      ),
    [quotesCards]
  );

  const stocksCardsList = useMemo(
    () =>
      Object.keys(stocksCards).reduce(
        (acc, element) => [
          ...acc,
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
    </section>
  );
}

Home.propTypes = {
  cardsDataValues: PropTypes.object,
  apiCurrenciesData: PropTypes.object,
  openModalWindow: PropTypes.func,
  exchangeCurrenciesHandler: PropTypes.func
};

export default Home;
