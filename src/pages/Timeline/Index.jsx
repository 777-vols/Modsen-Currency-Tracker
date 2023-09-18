import TimelineChartSchedule from '@components/TimelineChartSchedule/Index';
import currencyCardsData from '@constants/currencyCardsData';
import axios from 'axios';
import React, { Component, useMemo } from 'react';

import { Container } from '../../styled';
import {
  SelectOption,
  TimelineCurrencyCard,
  TimelineModalOpenButton,
  TimelineSchedule,
  TimelineScheduleWrapper,
  TimelineSelect,
  TimelineSelectWrapper,
  TimelineWrapper
} from './styled';
import TimelineModal from './TimelineModal/Index';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimelineCurrency: '',
      scheduleData: {},
      modalIsOpen: false
    };
  }

  setModalIsOpen = () => {
    this.setState((prevState) => ({
      modalIsOpen: !prevState.modalIsOpen
    }));
  };

  setTimelineCurrency = (event) => {
    this.setState({ currentTimelineCurrency: event.target.value });
  };

  selectOptionsList = Object.keys(currencyCardsData.quotesCards).reduce(
    (accum, element) => [
      ...accum,
      <SelectOption key={element} value={currencyCardsData.quotesCards[element].name}>
        {currencyCardsData.quotesCards[element].name}
      </SelectOption>
    ],
    []
  );

  // componentDidMount() {
  //   axios
  //     .get(
  //       `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${this.state.currentTimelineCurrency}_USD/latest?period_id=1MTH`,
  //       {
  //         headers: { 'X-CoinAPI-Key': '79B76FFE-7380-4FE7-B0D1-AD94BFBE940C' }
  //       }
  //     )
  //     .then((res) => {
  //       this.setState({ scheduleData: res.data });
  //     });
  // }

  render() {
    return (
      <section>
        <Container>
          <TimelineWrapper>
            <TimelineSelectWrapper>
              <TimelineSelect>{this.selectOptionsList}</TimelineSelect>
              <TimelineModalOpenButton onClick={this.setModalIsOpen}>
                Enter the values
              </TimelineModalOpenButton>
            </TimelineSelectWrapper>
            <TimelineScheduleWrapper>
              <TimelineCurrencyCard></TimelineCurrencyCard>
              <TimelineSchedule>
                <TimelineChartSchedule />
              </TimelineSchedule>
            </TimelineScheduleWrapper>
          </TimelineWrapper>
        </Container>
        <TimelineModal isOpen={this.state.modalIsOpen} closeModalWindow={this.setModalIsOpen} />
      </section>
    );
  }
}

export default Timeline;
