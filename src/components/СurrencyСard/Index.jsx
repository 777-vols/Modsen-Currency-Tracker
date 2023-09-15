import PropTypes from 'prop-types';
import React from 'react';

import {
  CardInner,
  CardWrapper,
  CarrencyImage,
  CarrencyName,
  CurrencyRate,
  CurrencyStats
} from './styled';

function CurrencyCard({ firstVal, name, currencyImg, openModalWindow }) {
  return (
    <CardWrapper onClick={openModalWindow} id={`card-${firstVal}`}>
      <CardInner>
        <CarrencyImage src={currencyImg} />
        <CurrencyStats>
          <CarrencyName>{name}</CarrencyName>
          <CurrencyRate>$ 5,43</CurrencyRate>
        </CurrencyStats>
      </CardInner>
    </CardWrapper>
  );
}

CurrencyCard.propTypes = {
  firstVal: PropTypes.string,
  name: PropTypes.string,
  sign: PropTypes.string,
  currencyImg: PropTypes.string,
  openModalWindow: PropTypes.func
};

export default CurrencyCard;
