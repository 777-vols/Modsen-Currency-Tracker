import CurrencyCard from '@components/СurrencyСard/Index';
import PropTypes from 'prop-types';
import React from 'react';

import { Container } from '../../styled';
import { CardsWrapper, HomeWrapper, Quotes, Stocks, StyledHeader, StyledSpan } from './styled';

function Home({ cardsData }) {
  const quotesCards = Object.keys(cardsData).reduce(
    (acc, e) => [
      ...acc,
      <CurrencyCard
        key={e}
        firstVal={e.toLowerCase()}
        name={cardsData[e].name}
        currencyImg={cardsData[e].img}
      />
    ],
    []
  );

  return (
    <section>
      <Container>
        <HomeWrapper>
          <Stocks>
            <StyledHeader>
              <StyledSpan>Stocks</StyledSpan>
            </StyledHeader>
            <CardsWrapper>
              {/* <CurrencyCard />
              <CurrencyCard /> */}
            </CardsWrapper>
          </Stocks>
          <Quotes>
            <StyledHeader>
              <StyledSpan>Quotes</StyledSpan>
            </StyledHeader>
            <CardsWrapper>{quotesCards}</CardsWrapper>
          </Quotes>
        </HomeWrapper>
      </Container>
    </section>
  );
}

Home.propTypes = {
  cardsData: PropTypes.object
};

export default Home;
