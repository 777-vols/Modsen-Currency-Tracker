import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ModalInputHeader, ModalInputWrapper, ModalStyledInput } from './styled';

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
      <ModalInputWrapper>
        <ModalInputHeader>Day: {day}</ModalInputHeader>
        <ModalStyledInput
          id={`high-input-${day}`}
          value={inputValueHigh}
          onChange={this.handleInputHigh}
          placeholder="High price"
        />
        <ModalStyledInput
          id={`low-input-${day}`}
          value={inputValueLow}
          onChange={this.handleInputLow}
          placeholder="Low price"
        />
      </ModalInputWrapper>
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
