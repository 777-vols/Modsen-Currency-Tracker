import React, { Component } from 'react';
import Select from 'react-select';
import currencyCardsData from '@constants/currencyCardsData';
import themes from '@constants/themes';

import { Container } from '@/styled';

import TimelineChartSchedule from './TimelineChartSchedule/Index';
import TimeLineCurrencyCard from './TimelineCurrrencyCard/Index';
import TimelineModal from './TimelineModal/Index';
import {
  TimelineModalOpenButton,
  TimelinePanelWrapper,
  TimelineSchedule,
  TimelineScheduleWrapper,
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
      listeners: [],
      warningIsActive: false
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
      (Number(this.state.modalInputsData[day].highPrice) <= Number(value) &&
        Number(this.state.modalInputsData[day].lowPrice) < Number(value)) ||
      Number(value < 0) ||
      Number(value > 10000)
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
      (value.length > 1 && Number(value) === 0 && !value.includes('.')) ||
      Number(value < 0) ||
      Number(value > 10000)
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
    const correctInputsForDay = Object.values(this.state.modalInputsData).filter((value) => {
      const dayValuesArray = Object.values(value);
      if (
        dayValuesArray[0] !== '' &&
        dayValuesArray[1] !== '' &&
        Number(dayValuesArray[1] >= 100)
      ) {
        return value;
      }
      return null;
    });
    if (this.state.modalIsOpen && correctInputsForDay.length === 30) {
      this.notifyAll();
      this.setState((prevState) => ({
        sheduleData: { ...prevState.modalInputsData },
        modalIsOpen: false
      }));
    } else {
      this.setState({ warningIsActive: true });
      setTimeout(() => this.setState({ warningIsActive: false }), 3000);
    }
  };

  setTimelineCurrency = (selectedOption) => {
    this.setState({
      currentTimelineCurrency: selectedOption.value,
      timelineCurrencyCard: currencyCardsData.quotesCards[selectedOption.value],
      modalInputsData: {}
    });
  };

  selectOptionsList = Object.keys(currencyCardsData.quotesCards).reduce(
    (accum, element) => [
      ...accum,
      {
        value: element,
        label: currencyCardsData.quotesCards[element].name
      }
    ],
    []
  );

  colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'transparent',
      color: 'inherit',
      cursor: 'pointer'
    }),
    option: (styles) => {
      const styleObject = {
        ...styles,
        color: themes.light.color,
        cursor: 'pointer'
      };
      return styleObject;
    },
    singleValue: (provided) => ({
      ...provided,
      color: 'inherit',
      cursor: 'pointer'
    })
  };

  render() {
    return (
      <section>
        <Container>
          <TimelineWrapper>
            <TimelinePanelWrapper>
              <TimelineSelectWrapper>
                <Select
                  id="timeline-select"
                  styles={this.colourStyles}
                  onChange={this.setTimelineCurrency}
                  defaultValue={this.selectOptionsList[0]}
                  options={this.selectOptionsList}></Select>
              </TimelineSelectWrapper>
              <TimelineModalOpenButton id="enter-values" onClick={this.setModalIsOpen}>
                Enter your values
              </TimelineModalOpenButton>
            </TimelinePanelWrapper>
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
        {this.state.modalIsOpen && (
          <TimelineModal
            warningIsActive={this.state.warningIsActive}
            closeModalWindow={this.setModalIsOpen}
            clearAllInputsValues={this.clearAllInputsValues}
            createSheduleHandler={this.createSheduleHandler}
            handleInputLow={this.setModalInputsDataLow}
            handleInputHigh={this.setModalInputsDataHigh}
            inputsData={this.state.modalInputsData}
          />
        )}
      </section>
    );
  }
}

export default Timeline;
