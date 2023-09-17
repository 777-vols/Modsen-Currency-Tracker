import TimelineChartSchedule from '@components/TimelineChartSchedule/Index';
import axios from 'axios';
import React, { Component } from 'react';

import { Container } from '../../styled';
import {
  SelectOption,
  TimelineCurrencyCard,
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
      currentTimelineCurrency: 'BTC',
      scheduleData: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${this.state.currentTimelineCurrency}_USD/latest?period_id=1MTH`,
        {
          headers: { 'X-CoinAPI-Key': '79B76FFE-7380-4FE7-B0D1-AD94BFBE940C' }
        }
      )
      .then((res) => {
        this.setState({ scheduleData: res.data });
      });
  }

  render() {
    return (
      <section>
        <Container>
          <TimelineWrapper>
            <TimelineSelectWrapper>
              <TimelineSelect>
                <SelectOption>BTC</SelectOption>
                <SelectOption>ETH</SelectOption>
              </TimelineSelect>
            </TimelineSelectWrapper>
            <TimelineScheduleWrapper>
              <TimelineCurrencyCard></TimelineCurrencyCard>
              <TimelineSchedule>
                <TimelineChartSchedule />
              </TimelineSchedule>
            </TimelineScheduleWrapper>
          </TimelineWrapper>
        </Container>
      </section>
    );
  }
}

export default Timeline;
