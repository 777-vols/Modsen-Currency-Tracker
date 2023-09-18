import PortalCreator from '@helpers/createPortalHelper';
import PropTypes, { func } from 'prop-types';
import React, { Component } from 'react';

import { CloseModalButton, ModalBackground } from '../../Home/HomeModal/styled';
import { TimelineModalInputsWrapper, TimelineModalWindow } from './styled';
import TimelineModalInput from './TimelineModalInput/Index';

class TimelineModal extends Component {
  render() {
    function inputsMaper() {
      const inputsArray = [];
      for (let i = 1; i <= 30; i += 1) {
        inputsArray.push(<TimelineModalInput day={i} />);
      }
      return inputsArray;
    }

    const inputsArray = inputsMaper();

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
  closeModalWindow: PropTypes.func
};
