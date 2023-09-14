import React from 'react';

import currencyImg from '../../assets/Currencies/Euro Icon.svg';
import {
  CardInner,
  CardWrapper,
  CarrencyImage,
  CarrencyName,
  CurrencyRate,
  CurrencyStats
} from './styled';

function CurrencyCard() {
  return (
    <CardWrapper>
      <CardInner>
        <CarrencyImage src={currencyImg} />
        <CurrencyStats>
          <CarrencyName>Euro</CarrencyName>
          <CurrencyRate>R$ 5,43</CurrencyRate>
        </CurrencyStats>
      </CardInner>
    </CardWrapper>
  );
}

export default CurrencyCard;
