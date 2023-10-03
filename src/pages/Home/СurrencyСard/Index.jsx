import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Image, InnerBlock, Name, Rate, Stats, Wrapper } from './styled';

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

  const memoizedConvertCurrency = useMemo(() => {
    if (usdData) {
      return convertCurrency();
    }
    return '0.15%';
  }, [usdData]);

  return (
    <Wrapper onClick={cardClickHandler} id={`card-${currencyShortName}`}>
      <InnerBlock>
        <Image src={currencyImg} />
        <Stats>
          <Name>{currencyFullName}</Name>
          <Rate>{usdData ? `$ ${memoizedConvertCurrency}` : '0.15%'}</Rate>
        </Stats>
      </InnerBlock>
    </Wrapper>
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
