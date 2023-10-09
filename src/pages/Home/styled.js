import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margin.zero}px auto;
  max-width: 1224px;
  width: 100%;
`;
export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 15px;
  padding-right: ${({
    theme: {
      padding: { fifteen }
    }
  }) => fifteen}px;
  justify-items: center;
  @media (${({ theme }) => theme.media.smallL}) {
    grid-template-columns: 100%;
    grid-column-gap: 0px;
    padding-right: ${({ theme }) => theme.padding.zero}px;
  }
`;

export const StyledSpan = styled.h3`
  max-width: 520px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.mediumL};
  font-weight: ${({ theme }) => theme.fontWeight.small};
  padding-bottom: ${({ theme }) => theme.padding.twentyFive}px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.greyColor};
  @media (${({ theme }) => theme.media.mediumL}) {
    font-size: ${({ theme }) => theme.fontSize.mediumS};
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyColor};
    padding-bottom: ${({ theme }) => theme.padding.fifteen}px;
  }
  @media (${({ theme }) => theme.media.smallL}) {
    max-width: 357px;
    font-size: ${({ theme }) => theme.fontSize.smallS};
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyColor};
    padding-bottom: ${({ theme }) => theme.padding.thirtyFive}px;
  }
`;

export const Stocks = styled.div``;
export const Quotes = styled.div`
  margin-top: ${({ theme }) => theme.margin.eightySix}px;
  @media (${({ theme }) => theme.media.smallL}) {
    margin-top: ${({ theme }) => theme.margin.thirtyTwo}px;
  }
`;
