import React, { PureComponent } from 'react';
import PortalCreator from '@components/PortalCreator';
import { Background, CloseButton } from '@pages/Home/HomeModal/styled';
import PropTypes from 'prop-types';

import config from './config';
import TimelineModalInput from './ModalInput';
import {
  ButtonsWrapper,
  InfoButton,
  InfoSpan,
  InfoWrapper,
  InputsWrapper,
  ModalButton,
  WarningSpan,
  Window
} from './styled';

const { modaInfoRules, warning, clearButton, createButton } = config;

class TimelineModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      descriptionIsOpen: false
    };
  }

  descriptionIsOpenHandler = () => {
    this.setState(({ descriptionIsOpen }) => ({ descriptionIsOpen: !descriptionIsOpen }));
  };

  handleInputLow = (day, value) => {
    const { handleInputLow } = this.props;
    handleInputLow(day, value);
  };

  handleInputHigh = (day, value) => {
    const { handleInputHigh } = this.props;
    handleInputHigh(day, value);
  };

  getACoupleofInputsForEveryDay = () => {
    const { inputsData } = this.props;
    const timelineModalInputComponents = [];
    for (let dayNumber = 1; dayNumber <= 30; dayNumber += 1) {
      const inputValueLowIfExist = inputsData[dayNumber]?.lowPrice;
      const inputValueHighIfExist = inputsData[dayNumber]?.highPrice;
      timelineModalInputComponents.push(
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
    return timelineModalInputComponents;
  };

  modalRules = modaInfoRules.map(({ id, content }) => (
    <React.Fragment key={id}>
      {content}
      <br />
    </React.Fragment>
  ));

  modalBackgroundClickHandler = (event) => {
    const { closeModalWindow } = this.props;
    if (event.currentTarget === event.target) {
      closeModalWindow();
    }
  };

  descriptionBackgroundClickHandler = (event) => {
    if (event.currentTarget === event.target && this.state.descriptionIsOpen) {
      this.descriptionIsOpenHandler();
    }
  };

  render() {
    const inputsArray = this.getACoupleofInputsForEveryDay();

    const { warningIsActive, closeModalWindow, clearAllInputsValues, createSheduleHandler } =
      this.props;

    const { descriptionIsOpen } = this.state;

    return (
      <PortalCreator wrapperId="timeline-modal">
        <Background onClick={this.modalBackgroundClickHandler}>
          <Window onClick={this.descriptionBackgroundClickHandler}>
            {warningIsActive && <WarningSpan>{warning}</WarningSpan>}
            <CloseButton id="chart-modal-close" onClick={closeModalWindow}>
              X
            </CloseButton>
            <InfoButton onClick={this.descriptionIsOpenHandler}>?</InfoButton>
            <InputsWrapper>
              {descriptionIsOpen && (
                <InfoWrapper>
                  <InfoSpan>{this.modalRules}</InfoSpan>
                </InfoWrapper>
              )}
              {inputsArray}
            </InputsWrapper>
            <ButtonsWrapper>
              <ModalButton data-cy="clearAllValues" onClick={clearAllInputsValues}>
                {clearButton}
              </ModalButton>
              <ModalButton data-cy="createSchedule" onClick={createSheduleHandler}>
                {createButton}
              </ModalButton>
            </ButtonsWrapper>
          </Window>
        </Background>
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
