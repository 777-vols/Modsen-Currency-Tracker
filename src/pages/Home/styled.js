import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${(props) => props.theme.padding.zero}px auto;
  max-width: 1224px;
  width: 100%;
`;
export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 15px;
  padding-right: ${(props) => props.theme.padding.fifteen}px;
  justify-items: center;
  @media (${(props) => props.theme.media.smallL}) {
    grid-template-columns: 100%;
    grid-column-gap: 0px;
    padding-right: ${(props) => props.theme.padding.zero}px;
  }
`;

export const StyledSpan = styled.h3`
  max-width: 520px;
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.mediumL};
  font-weight: ${(props) => props.theme.fontWeight.small};
  padding-bottom: ${(props) => props.theme.padding.twentyFive}px;
  border-bottom: 2px solid ${(props) => props.theme.colors.greyColor};
  @media (${(props) => props.theme.media.mediumL}) {
    font-size: ${(props) => props.theme.fontSize.mediumS};
    border-bottom: 1px solid ${(props) => props.theme.colors.greyColor};
    padding-bottom: ${(props) => props.theme.padding.fifteen}px;
  }
  @media (${(props) => props.theme.media.smallL}) {
    max-width: 357px;
    font-size: ${(props) => props.theme.fontSize.smallS};
    border-bottom: 1px solid ${(props) => props.theme.colors.greyColor};
    padding-bottom: ${(props) => props.theme.padding.thirtyFive}px;
  }
`;

export const Stocks = styled.div``;
export const Quotes = styled.div`
  margin-top: ${(props) => props.theme.margin.eightySix}px;
  @media (${(props) => props.theme.media.smallL}) {
    margin-top: ${(props) => props.theme.padding.thirtyTwo}px;
  }
`;
