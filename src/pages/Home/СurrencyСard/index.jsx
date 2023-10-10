import PropTypes from 'prop-types';
import React, { memo, useCallback, useMemo } from 'react';

import { Image, InnerBlock, Name, Rate, Stats, Wrapper } from './styled';

function CurrencyCard({
  currencyShortName,
  currencyFullName,
  currencyImg,
  openModalWindow,
  usdData,
  exchangeCurrenciesHandler
}) {
  const cardClickHandler = useCallback(() => {
    if (openModalWindow) {
      openModalWindow();
      exchangeCurrenciesHandler(currencyShortName);
    }
  }, [currencyShortName, openModalWindow, exchangeCurrenciesHandler]);

  const convertCurrency = useMemo(() => {
    if (usdData) {
      return (1 / usdData[currencyShortName]).toFixed(4);
    }
    return null;
  }, [currencyShortName, usdData]);

  if (usdData) {
    return (
      <Wrapper onClick={cardClickHandler} data-cy={`card-${currencyShortName}`}>
        <InnerBlock>
          <Image src={currencyImg} />
          <Stats>
            <Name>{currencyFullName}</Name>
            <Rate>{usdData && exchangeCurrenciesHandler ? `$ ${convertCurrency}` : '0.15%'}</Rate>
          </Stats>
        </InnerBlock>
      </Wrapper>
    );
  }
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

export default memo(CurrencyCard);
