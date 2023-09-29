import React, { PureComponent } from 'react';
import PortalCreator from '@helpers/createPortalHelper';
import { CloseModalButton, ModalBackground } from '@pages/Home/HomeModal/styled';
import PropTypes, { bool } from 'prop-types';

import TimelineModalInput from './TimelineModalInput/Index';
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
    this.props.handleInputLow(day, value);
  };

  handleInputHigh = (day, value) => {
    this.props.handleInputHigh(day, value);
  };

  inputsMaper = () => {
    const inputsArray = [];
    for (let day = 1; day <= 30; day += 1) {
      inputsArray.push(
        <TimelineModalInput
          key={day}
          day={day}
          inputValueLow={this.props.inputsData[day]?.lowPrice ?? ''}
          inputValueHigh={this.props.inputsData[day]?.highPrice ?? ''}
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

    const { warningIsActive, closeModalWindow, clearAllInputsValues, createSheduleHandler } =
      this.props;

    return (
      <PortalCreator wrapperId="timeline-modal">
        <ModalBackground>
          <TimelineModalWindow>
            {warningIsActive && <WarningSpan>Please follow all rules!</WarningSpan>}
            <CloseModalButton id="chart-modal-close" onClick={closeModalWindow}>
              X
            </CloseModalButton>
            <InfoButton onClick={this.descriptionIsOpenHandler}>?</InfoButton>
            {this.state.descriptionIsOpen && (
              <ModalInfoWrapper>
                <ModalInfoSpan>
                  *Enter values between 100 and 10000 for 30 days to successfully create a graph.
                  <br />
                  *The high price value is filled in first.
                  <br />
                  *The highest price must be higher than the lowest.
                  <br />
                  *All fields must be completed.
                  <br />
                  *To create a schedule, all rules must be followed!!!.
                </ModalInfoSpan>
              </ModalInfoWrapper>
            )}
            <TimelineModalInputsWrapper>{inputsArray}</TimelineModalInputsWrapper>
            <ButtonsWrapper>
              <ModalButton onClick={clearAllInputsValues}>Clear all values</ModalButton>
              <ModalButton onClick={createSheduleHandler}>Create shedule</ModalButton>
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
