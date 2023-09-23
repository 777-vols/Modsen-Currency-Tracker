import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { CardImage, CardName, CardShortName, CardStats, CardWrapper } from './styled';

class TimeLineCurrencyCard extends PureComponent {
  render() {
    const { currencyShortName, currencyFullName, currencyImg } = this.props;
    return (
      <CardWrapper>
        <CardImage src={currencyImg} />
        <CardStats>
          <CardName>{currencyFullName}</CardName>
          <CardShortName>{currencyShortName}</CardShortName>
        </CardStats>
      </CardWrapper>
    );
  }
}

TimeLineCurrencyCard.propTypes = {
  currencyShortName: PropTypes.string,
  currencyFullName: PropTypes.string,
  currencyImg: PropTypes.string
};

export default TimeLineCurrencyCard;
