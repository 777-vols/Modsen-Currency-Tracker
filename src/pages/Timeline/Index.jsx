import currencyCardsData from '@constants/currencyCardsData';
import React, { Component } from 'react';

import { Container } from '../../styled';
import {
  SelectOption,
  TimelineModalOpenButton,
  TimelineSchedule,
  TimelineScheduleWrapper,
  TimelineSelect,
  TimelineSelectWrapper,
  TimelineWrapper
} from './styled';
import TimelineChartSchedule from './TimelineChartSchedule/Index';
import TimeLineCurrencyCard from './TimelineCurrrencyCard/Index';
import TimelineModal from './TimelineModal/Index';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimelineCurrency: 'USD',
      timelineCurrencyCard: currencyCardsData.quotesCards.USD,
      scheduleModalInputsData: {},
      modalIsOpen: false
    };
  }

  setModalInputsData = (day, value) => {
    this.setState((prevState) => ({
      scheduleModalInputsData: {
        ...prevState.scheduleModalInputsData,
        [day]: value
      }
    }));
  };

  setModalIsOpen = () => {
    this.setState((prevState) => ({
      modalIsOpen: !prevState.modalIsOpen
    }));
  };

  setTimelineCurrency = (event) => {
    this.setState({
      currentTimelineCurrency: event.target.value,
      timelineCurrencyCard: currencyCardsData.quotesCards[event.target.value],
      scheduleModalInputsData: {}
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
              <TimelineSelect onChange={this.setTimelineCurrency}>
                {this.selectOptionsList}
              </TimelineSelect>
              <TimelineModalOpenButton onClick={this.setModalIsOpen}>
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
                <TimelineChartSchedule modalData={this.state.scheduleModalInputsData} />
              </TimelineSchedule>
            </TimelineScheduleWrapper>
          </TimelineWrapper>
        </Container>
        <TimelineModal
          isOpen={this.state.modalIsOpen}
          closeModalWindow={this.setModalIsOpen}
          handleInputsChange={this.setModalInputsData}
          iputsData={this.state.scheduleModalInputsData}
        />
      </section>
    );
  }
}

export default Timeline;
