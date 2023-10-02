import React, { PureComponent } from 'react';
import PortalCreator from '@components/PortalCreator';
import { CloseModalButton, ModalBackground } from '@pages/Home/HomeModal/styled';
import PropTypes from 'prop-types';

import config from './config';
import {
  ButtonsWrapper,
  InfoButton,
  ModalButton,
  ModalInfoSpan,
  ModalInfoWrapper,
  TimelineModalInputsWrapper,
  TimelineModalWindow,
  WarningSpan
} from './styled';
import TimelineModalInput from './TimelineModalInput';

const { modaInfoRules, warning, clearButton, createButton } = config;

class TimelineModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      descriptionIsOpen: false
    };
  }

  descriptionIsOpenHandler = () => {
    this.setState((prevState) => ({ descriptionIsOpen: !prevState.descriptionIsOpen }));
  };

  handleInputLow = (day, value) => {
    const { handleInputLow } = this.props;
    handleInputLow(day, value);
  };

  handleInputHigh = (day, value) => {
    const { handleInputHigh } = this.props;
    handleInputHigh(day, value);
  };

  inputsMapper = () => {
    const { inputsData } = this.props;
    const inputsArray = [];
    for (let dayNumber = 1; dayNumber <= 30; dayNumber += 1) {
      const inputValueLowIfExist = inputsData[dayNumber]?.lowPrice;
      const inputValueHighIfExist = inputsData[dayNumber]?.highPrice;
      inputsArray.push(
        <TimelineModalInput
          key={dayNumber}
          day={dayNumber}
          inputValueLow={inputValueLowIfExist ?? ''}
          inputValueHigh={inputValueHighIfExist ?? ''}
          handleInputLow={this.handleInputLow}
          handleInputHigh={this.handleInputHigh}
          handleInput={this.handleInput}
        />
      );
    }
    return inputsArray;
  };

  modalRules = modaInfoRules.map(({ id, content }) => (
    <React.Fragment key={id}>
      {content}
      <br />
    </React.Fragment>
  ));

  render() {
    const inputsArray = this.inputsMapper();

    const { warningIsActive, closeModalWindow, clearAllInputsValues, createSheduleHandler } =
      this.props;

    const { descriptionIsOpen } = this.state;

    return (
      <PortalCreator wrapperId="timeline-modal">
        <ModalBackground onClick={(e) => e.currentTarget === e.target && closeModalWindow()}>
          <TimelineModalWindow>
            {warningIsActive && <WarningSpan>{warning}</WarningSpan>}
            <CloseModalButton id="chart-modal-close" onClick={closeModalWindow}>
              X
            </CloseModalButton>
            <InfoButton onClick={this.descriptionIsOpenHandler}>?</InfoButton>
            {descriptionIsOpen && (
              <ModalInfoWrapper
                onClick={(e) => e.currentTarget === e.target && this.descriptionIsOpenHandler()}>
                <ModalInfoSpan>{this.modalRules}</ModalInfoSpan>
              </ModalInfoWrapper>
            )}
            <TimelineModalInputsWrapper>{inputsArray}</TimelineModalInputsWrapper>
            <ButtonsWrapper>
              <ModalButton id="clearAllValues" onClick={clearAllInputsValues}>
                {clearButton}
              </ModalButton>
              <ModalButton id="createSchedule" onClick={createSheduleHandler}>
                {createButton}
              </ModalButton>
            </ButtonsWrapper>
          </TimelineModalWindow>
        </ModalBackground>
      </PortalCreator>
    );
  }
}

export default TimelineModal;

TimelineModal.propTypes = {
  warningIsActive: PropTypes.bool,
  closeModalWindow: PropTypes.func,
  clearAllInputsValues: PropTypes.func,
  createSheduleHandler: PropTypes.func,
  handleInputLow: PropTypes.func,
  handleInputHigh: PropTypes.func,
  inputsData: PropTypes.object
};
