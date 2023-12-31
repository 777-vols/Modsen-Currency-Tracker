import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Header, Input, Wrapper } from './styled';

class TimelineModalInput extends Component {
  handleInputLow = (event) => {
    const { handleInputLow, day } = this.props;
    handleInputLow(day, event.target.value);
  };

  handleInputHigh = (event) => {
    const { handleInputHigh, day } = this.props;
    handleInputHigh(day, event.target.value);
  };

  render() {
    const { day, inputValueHigh, inputValueLow } = this.props;
    return (
      <Wrapper>
        <Header>Day: {day}</Header>
        <Input
          data-cy={`high-input-${day}`}
          value={inputValueHigh}
          onChange={this.handleInputHigh}
          placeholder="High price"
        />
        <Input
          data-cy={`low-input-${day}`}
          value={inputValueLow}
          onChange={this.handleInputLow}
          placeholder="Low price"
        />
      </Wrapper>
    );
  }
}

TimelineModalInput.propTypes = {
  day: PropTypes.number,
  handleInputLow: PropTypes.func,
  handleInputHigh: PropTypes.func,
  inputValueLow: PropTypes.string,
  inputValueHigh: PropTypes.string
};

export default TimelineModalInput;
