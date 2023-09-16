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

function CurrencyCard({
  currencyShortName,
  currencyFullName,
  currencyImg,
  openModalWindow,
  usdData,
  exchangeCurrenciesHandler
}) {
  function cardClickHandler() {
    if (openModalWindow) {
      openModalWindow();
      exchangeCurrenciesHandler(currencyShortName);
    }
  }

  const convertCurrency = () => (1 / usdData[currencyShortName]).toFixed(4);
  return (
    <CardWrapper onClick={cardClickHandler} id={`card-${currencyShortName}`}>
      <CardInner>
        <CarrencyImage src={currencyImg} />
        <CurrencyStats>
          <CarrencyName>{currencyFullName}</CarrencyName>
          <CurrencyRate>{usdData ? `$ ${convertCurrency()}` : '0.15%'}</CurrencyRate>
        </CurrencyStats>
      </CardInner>
    </CardWrapper>
  );
}

CurrencyCard.propTypes = {
  currencyShortName: PropTypes.string,
  currencyFullName: PropTypes.string,
  sign: PropTypes.string,
  currencyImg: PropTypes.string,
  openModalWindow: PropTypes.func,
  usdData: PropTypes.object,
  exchangeCurrenciesHandler: PropTypes.func
};

export default CurrencyCard;
