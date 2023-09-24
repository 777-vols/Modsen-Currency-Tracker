import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PortalCreator from '@helpers/createPortalHelper';

import { CloseModalButton, ModalBackground } from '../../Home/HomeModal/styled';

import TimelineModalInput from './TimelineModalInput/Index';
import { TimelineModalInputsWrapper, TimelineModalWindow } from './styled';

class TimelineModal extends PureComponent {
  handleInputLow = (day, value) => {
    this.props.handleInputLow(day, value);
  };

  handleInputHigh = (day, value) => {
    this.props.handleInputHigh(day, value);
  };

  inputsMaper = () => {
    const inputsArray = [];
    for (let i = 1; i <= 30; i += 1) {
      inputsArray.push(
        <TimelineModalInput
          key={i}
          day={i}
          inputValueLow={this.props.inputsData[i]?.lowPrice ?? ''}
          inputValueHigh={this.props.inputsData[i]?.highPrice ?? ''}
          handleInputLow={this.handleInputLow}
          handleInputHigh={this.handleInputHigh}
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
            <CloseModalButton id="chart-modal-close" onClick={closeModalWindow}>
              X
            </CloseModalButton>
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
  handleInputLow: PropTypes.func,
  handleInputHigh: PropTypes.func,
  inputsData: PropTypes.object
};
