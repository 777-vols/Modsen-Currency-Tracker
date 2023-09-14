import CurrencyCard from '@components/СurrencyСard/Index';
import React from 'react';

import { Container } from '../../styled';
import { CardsWrapper, HomeWrapper, Quotes, Stocks, StyledHeader, StyledSpan } from './styled';

function Home() {
  return (
    <section>
      <Container>
        <HomeWrapper>
          <Stocks>
            <StyledHeader>
              <StyledSpan>Stocks</StyledSpan>
            </StyledHeader>
            <CardsWrapper>
              <CurrencyCard />
              <CurrencyCard />
              <CurrencyCard />
              <CurrencyCard />
            </CardsWrapper>
          </Stocks>
          <Quotes>
            <StyledHeader>
              <StyledSpan>Quotes</StyledSpan>
            </StyledHeader>
            <CardsWrapper>
              <CurrencyCard />
              <CurrencyCard />
              <CurrencyCard />
              <CurrencyCard />
            </CardsWrapper>
          </Quotes>
        </HomeWrapper>
      </Container>
    </section>
  );
}

export default Home;
