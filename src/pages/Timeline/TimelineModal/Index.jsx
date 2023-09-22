import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PortalCreator from '@helpers/createPortalHelper';

import { CloseModalButton, ModalBackground } from '../../Home/HomeModal/styled';

import TimelineModalInput from './TimelineModalInput/Index';
import { TimelineModalInputsWrapper, TimelineModalWindow } from './styled';

class TimelineModal extends Component {
  handleInput = (day, value) => {
    this.props.handleInputsChange(day, value);
  };

  inputsMaper = () => {
    const inputsArray = [];
    for (let i = 1; i <= 30; i += 1) {
      inputsArray.push(
        <TimelineModalInput
          key={i}
          day={i}
          inputValue={this.props.iputsData[i] ?? ''}
          handleInput={this.handleInput}
        />
      );
    }
    return inputsArray;
  };

  render() {
    const inputsArray = this.inputsMaper();

    const { isOpen, closeModalWindow } = this.props;

    if (!isOpen) return null;
    return (
      <PortalCreator wrapperId="timeline-modal">
        <ModalBackground>
          <TimelineModalWindow>
            <CloseModalButton onClick={closeModalWindow}>X</CloseModalButton>
            <TimelineModalInputsWrapper>{inputsArray}</TimelineModalInputsWrapper>
          </TimelineModalWindow>
        </ModalBackground>
      </PortalCreator>
    );
  }
}

export default TimelineModal;

TimelineModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModalWindow: PropTypes.func,
  handleInputsChange: PropTypes.func,
  iputsData: PropTypes.object
};
