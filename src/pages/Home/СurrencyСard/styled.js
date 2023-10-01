import styled from 'styled-components';

export const CardWrapper = styled.div`
  cursor: pointer;
  max-width: 520px;
  width: 100%;
  height: 153px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.lightGreyColor};
  background-color: ${(props) => props.theme.colors.greyColor};
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.theme.padding.fifty}px;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.colors.darkGreyColor};
    box-shadow: 10px 5px 5px ${(props) => props.theme.colors.greenColor};
    border: 2px solid ${(props) => props.theme.colors.greenColor};
  }

  @media (${(props) => props.theme.media.largeM}) {
    height: 120px;
  }
  @media (${(props) => props.theme.media.mediumL}) {
    height: 80px;
  }
  @media (${(props) => props.theme.media.smallL}) {
    height: 62px;
    max-width: 361px;
    border-radius: 3px;
    margin-top: ${(props) => props.theme.padding.twenty}px;
  }
`;
export const CardInner = styled.div`
  margin-left: ${(props) => props.theme.padding.thirtyTwo}px;
  display: flex;
  align-items: center;
  @media (${(props) => props.theme.media.mediumL}) {
    margin-left: ${(props) => props.theme.padding.twenty}px;
  }
`;
export const CurrencyStats = styled.div`
  margin-left: ${(props) => props.theme.padding.thirty}px;
  display: flex;
  flex-direction: column;
  @media (${(props) => props.theme.media.mediumL}) {
    margin-left: ${(props) => props.theme.padding.twenty}px;
  }
`;
export const CurrencyImage = styled.img`
  @media (${(props) => props.theme.media.largeM}) {
    height: 60px;
    width: 60px;
  }
  @media (${(props) => props.theme.media.mediumL}) {
    height: 45px;
    width: 45px;
  }
  @media (${(props) => props.theme.media.smallL}) {
    height: 30px;
    width: 30px;
  }
`;
export const CurrencyName = styled.span`
  margin-top: ${(props) => props.theme.padding.five}px;
  font-size: ${(props) => props.theme.fontSize.mediumXL};
  font-weight: ${(props) => props.theme.fontWeight.small};
  color: ${(props) => props.theme.colors.currencyNameColor};
  @media (${(props) => props.theme.media.largeM}) {
    font-size: ${(props) => props.theme.fontSize.mediumM};
  }
  @media (${(props) => props.theme.media.mediumL}) {
    font-size: ${(props) => props.theme.fontSize.mediumS};
  }
  @media (${(props) => props.theme.media.smallL}) {
    font-size: ${(props) => props.theme.fontSize.smallS};
  }
`;
export const CurrencyRate = styled.span`
  font-size: ${(props) => props.theme.fontSize.mediumL};
  color: ${(props) => props.theme.colors.currencyRateColor};
  font-weight: ${(props) => props.theme.fontWeight.small};
  @media (${(props) => props.theme.media.largeM}) {
    font-size: ${(props) => props.theme.fontSize.mediumS};
  }
  @media (${(props) => props.theme.media.mediumL}) {
    font-size: ${(props) => props.theme.fontSize.smallL};
  }
  @media (${(props) => props.theme.media.smallL}) {
    font-size: ${(props) => props.theme.fontSize.smallS};
  }
`;
