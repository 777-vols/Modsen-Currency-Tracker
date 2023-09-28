import React, { Component } from 'react';

import currencyCardsData from '@constants/currencyCardsData';

import { Container } from '../../styled';

import TimelineChartSchedule from './TimelineChartSchedule/Index';
import TimeLineCurrencyCard from './TimelineCurrrencyCard/Index';
import TimelineModal from './TimelineModal/Index';
import {
  SelectOption,
  TimelineModalOpenButton,
  TimelineSchedule,
  TimelineScheduleWrapper,
  TimelineSelect,
  TimelineSelectWrapper,
  TimelineWrapper
} from './styled';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimelineCurrency: 'USD',
      timelineCurrencyCard: currencyCardsData.quotesCards.USD,
      modalInputsData: {},
      sheduleData: {},
      modalIsOpen: false,
      listeners: []
    };
  }

  subscribe = (listener) => {
    this.setState((prevState) => ({ listeners: [...prevState.listeners, listener] }));

    return () => {
      this.setState((prevState) => ({
        listeners: [...prevState.listeners.filter((element) => element !== listener)]
      }));
    };
  };

  notifyAll = () => {
    this.state.listeners.forEach((listener) => listener());
  };

  setModalInputsDataLow = (day, value) => {
    if (
      !Number.isFinite(Number(value)) ||
      (value.length > 1 && Number(value) === 0 && !value.includes('.')) ||
      this.state.modalInputsData[day] === undefined ||
      Number(this.state.modalInputsData[day].highPrice) < Number(value)
    ) {
      return;
    }
    this.setState((prevState) => ({
      modalInputsData: {
        ...prevState.modalInputsData,
        [day]: { ...this.state.modalInputsData[day], lowPrice: value }
      }
    }));
  };

  setModalInputsDataHigh = (day, value) => {
    if (
      !Number.isFinite(Number(value)) ||
      (value.length > 1 && Number(value) === 0 && !value.includes('.'))
    )
      return;
    this.setState((prevState) => ({
      modalInputsData: {
        ...prevState.modalInputsData,
        [day]: { ...this.state.modalInputsData[day], highPrice: value }
      }
    }));
  };

  setModalIsOpen = () => {
    this.setState((prevState) => ({
      modalIsOpen: !prevState.modalIsOpen
    }));
  };

  clearAllInputsValues = () => {
    this.setState({ modalInputsData: {} });
  };

  createSheduleHandler = () => {
    if (
      Object.values(this.state.modalInputsData).filter((value) => value !== '').length === 30 &&
      this.state.modalIsOpen
    ) {
      this.notifyAll();
    }
    if (this.state.modalIsOpen) {
      this.setState((prevState) => ({
        sheduleData: { ...prevState.modalInputsData },
        modalIsOpen: false
      }));
    }
  };

  setTimelineCurrency = (event) => {
    this.setState({
      currentTimelineCurrency: event.target.value,
      timelineCurrencyCard: currencyCardsData.quotesCards[event.target.value],
      modalInputsData: {}
    });
  };

  selectOptionsList = Object.keys(currencyCardsData.quotesCards).reduce(
    (accum, element) => [
      ...accum,
      <SelectOption key={element} value={element}>
        {currencyCardsData.quotesCards[element].name}
      </SelectOption>
    ],
    []
  );

  render() {
    return (
      <section>
        <Container>
          <TimelineWrapper>
            <TimelineSelectWrapper>
              <TimelineSelect id="timeline-select" onChange={this.setTimelineCurrency}>
                {this.selectOptionsList}
              </TimelineSelect>
              <TimelineModalOpenButton id="enter-values" onClick={this.setModalIsOpen}>
                Enter your values
              </TimelineModalOpenButton>
            </TimelineSelectWrapper>
            <TimelineScheduleWrapper>
              <TimeLineCurrencyCard
                currencyShortName={this.state.currentTimelineCurrency}
                currencyFullName={this.state.timelineCurrencyCard.name}
                currencyImg={this.state.timelineCurrencyCard.img}
              />
              <TimelineSchedule>
                <TimelineChartSchedule
                  subscribe={this.subscribe}
                  modalData={this.state.sheduleData}
                />
              </TimelineSchedule>
            </TimelineScheduleWrapper>
          </TimelineWrapper>
        </Container>
        <TimelineModal
          isOpen={this.state.modalIsOpen}
          closeModalWindow={this.setModalIsOpen}
          clearAllInputsValues={this.clearAllInputsValues}
          createSheduleHandler={this.createSheduleHandler}
          handleInputLow={this.setModalInputsDataLow}
          handleInputHigh={this.setModalInputsDataHigh}
          inputsData={this.state.modalInputsData}
        />
      </section>
    );
  }
}

export default Timeline;
