import barOptions from '@constants/chartBarOptions';
import parseDataForSchedule from '@helpers/parseDataForShedule';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import Notification from '../Notification/Index';

ChartJS.register(BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);

class TimelineChartSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotificationActive: false
    };
  }

  activateNotification = () => {
    this.setState((prevState) => ({ isNotificationActive: !prevState.isNotificationActive }));
    setTimeout(
      () =>
        this.setState((prevState) => ({ isNotificationActive: !prevState.isNotificationActive })),
      5000
    );
  };

  componentDidMount() {
    this.unsubscribe = this.props.subscribe(this.activateNotification);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const filtredData = Object.fromEntries(
      Object.entries(this.props.modalData).filter((el) => el[1] !== '')
    );

    const scheduleData = {
      labels: Object.keys(filtredData).map((day) => `Day: ${day}`),
      datasets: [
        {
          label: 'Price',
          data: [...Object.values(filtredData)],
          backgroundColor: parseDataForSchedule(Object.values(filtredData)),
          barPercentage: 0.7
        }
      ]
    };
    if (Object.keys(filtredData).length === 0) return null;
    return (
      <>
        <Bar data={scheduleData} options={barOptions} />
        <Notification isOpen={this.state.isNotificationActive} />
      </>
    );
  }
}

TimelineChartSchedule.propTypes = {
  modalData: PropTypes.object,
  subscribe: PropTypes.func
};

export default TimelineChartSchedule;
