import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { FullName, Image, ShortName, Stats, Wrapper } from './styled';

class TimeLineCurrencyCard extends PureComponent {
  render() {
    const { currencyShortName, currencyFullName, currencyImg } = this.props;
    return (
      <Wrapper>
        <Image src={currencyImg} />
        <Stats>
          <FullName data-cy="currency-card-name">{currencyFullName}</FullName>
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
