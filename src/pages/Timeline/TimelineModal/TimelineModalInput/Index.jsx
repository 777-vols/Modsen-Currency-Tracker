import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { ModalInputHeader, ModalInputWrapper, ModalStyledInput } from './styled';

class TimelineModalInput extends Component {
  handleInput = (event) => {
    this.props.handleInput(this.props.day, event.target.value);
  };

  render() {
    const { day, inputValue } = this.props;
    return (
      <ModalInputWrapper>
        <ModalInputHeader>Day: {day}</ModalInputHeader>
        <ModalStyledInput value={inputValue} onChange={this.handleInput} placeholder="Cost" />
      </ModalInputWrapper>
    );
  }
}

TimelineModalInput.propTypes = {
  day: PropTypes.number,
  handleInput: PropTypes.func,
  inputValue: PropTypes.string
};

export default TimelineModalInput;
