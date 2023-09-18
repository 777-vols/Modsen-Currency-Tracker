import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { ModalInputHeader, ModalInputWrapper, ModalStyledInput } from './styled';

class TimelineModalInput extends Component {
  render() {
    const { day } = this.props;
    return (
      <ModalInputWrapper>
        <ModalInputHeader>Day: {day}</ModalInputHeader>
        <ModalStyledInput placeholder="Cost" />
      </ModalInputWrapper>
    );
  }
}

TimelineModalInput.propTypes = {
  day: PropTypes.number
};

export default TimelineModalInput;
