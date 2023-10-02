import React, { PureComponent } from 'react';
import { Bar } from 'react-chartjs-2';
import barOptions from '@constants/constBarOptions';
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

import Notification from '../Notification';

ChartJS.register(BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);

class TimelineChartSchedule extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isNotificationActive: false
    };
  }

  activateNotification = () => {
    this.setState(({ isNotificationActive }) => ({ isNotificationActive: !isNotificationActive }));
    setTimeout(
      () =>
        this.setState(({ isNotificationActive }) => ({
          isNotificationActive: !isNotificationActive
        })),
      5000
    );
  };

  componentDidMount() {
    const { subscribe } = this.props;
    this.unsubscribe = subscribe(this.activateNotification);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { isNotificationActive } = this.state;
    const { modalData } = this.props;

    const filtredData = Object.fromEntries(
      Object.entries(modalData).filter((el) => {
        if (el[1].highPrice !== undefined && el[1].lowPrice !== undefined) {
          return el;
        }
        return null;
      })
    );

    const scheduleData = {
      labels: Object.keys(filtredData).map((day) => `Day: ${day}`),
      datasets: [
        {
          label: 'High & Low price',
          data: [...Object.values(filtredData).map((element) => Object.values(element))],
          backgroundColor: parseDataForSchedule(Object.values(filtredData)),
          barPercentage: 0.7
        }
      ]
    };
    if (Object.keys(filtredData).length === 0) return null;
    return (
      <>
        <Bar data={scheduleData} options={barOptions} />
        {isNotificationActive && <Notification />}
      </>
    );
  }
}

TimelineChartSchedule.propTypes = {
  modalData: PropTypes.object,
  subscribe: PropTypes.func
};

export default TimelineChartSchedule;
