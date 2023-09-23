import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ModalInputHeader, ModalInputWrapper, ModalStyledInput } from './styled';

class TimelineModalInput extends Component {
  handleInputLow = (event) => {
    this.props.handleInputLow(this.props.day, event.target.value);
  };

  handleInputHigh = (event) => {
    this.props.handleInputHigh(this.props.day, event.target.value);
  };

  render() {
    const { day, inputValueHigh, inputValueLow } = this.props;
    return (
      <ModalInputWrapper>
        <ModalInputHeader>Day: {day}</ModalInputHeader>
        <ModalStyledInput
          value={inputValueHigh}
          onChange={this.handleInputHigh}
          placeholder="High price"
        />
        <ModalStyledInput
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
