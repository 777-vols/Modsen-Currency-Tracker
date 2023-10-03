import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { FullName, Image, ShortName, Stats, Wrapper } from './styled';

class TimeLineCurrencyCard extends PureComponent {
  render() {
    const { currencyShortName, currencyFullName, currencyImg } = this.props;
    return (
      <Wrapper>
        <Image src={currencyImg} />
        <Stats>
          <FullName id="currency-card-name">{currencyFullName}</FullName>
          <ShortName>{currencyShortName}</ShortName>
        </Stats>
      </Wrapper>
    );
  }
}

TimeLineCurrencyCard.propTypes = {
  currencyShortName: PropTypes.string,
  currencyFullName: PropTypes.string,
  currencyImg: PropTypes.string
};

export default TimeLineCurrencyCard;
