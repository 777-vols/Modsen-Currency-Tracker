import styled from 'styled-components';

export const HomeWrapper = styled.div`
  margin: 0 auto;
  max-width: 1224px;
  width: 100%;
`;
export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 15px;
  padding-right: 15px;
  justify-items: center;
  @media (max-width: 650px) {
    grid-template-columns: 100%;
    grid-column-gap: 0px;
    padding-right: 0px;
  }
`;

export const Stocks = styled.div``;
export const StyledHeader = styled.div``;
export const StyledSpan = styled.h3`
  max-width: 520px;
  width: 100%;
  font-size: 32px;
  font-weight: 300;
  padding-bottom: 25px;
  border-bottom: 2px solid rgb(71, 71, 71);
  @media (max-width: 900px) {
    font-size: 20px;
    border-bottom: 1px solid rgb(71, 71, 71);
    padding-bottom: 15px;
  }
  @media (max-width: 650px) {
    max-width: 357px;
    font-size: 12px;
    border-bottom: 1px solid rgb(71, 71, 71);
    padding-bottom: 10px;
  }
`;
export const QuotesHeader = styled.div``;

export const Quotes = styled.div`
  margin-top: 86px;
  @media (max-width: 650px) {
    margin-top: 32px;
  }
`;
