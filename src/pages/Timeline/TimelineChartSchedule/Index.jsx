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

ChartJS.register(BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);

class TimelineChartSchedule extends Component {
  render() {
    const scheduleData = {
      labels: Object.keys(this.props.modalData).map((day) => `Day: ${day}`),
      datasets: [
        {
          label: 'Price',
          data: [...Object.values(this.props.modalData)],
          backgroundColor: parseDataForSchedule(Object.values(this.props.modalData)),
          barPercentage: 0.7
        }
      ]
    };
    if (Object.keys(this.props.modalData).length === 0) return null;
    return (
      <>
        <Bar data={scheduleData} options={barOptions} />
      </>
    );
  }
}

TimelineChartSchedule.propTypes = {
  modalData: PropTypes.object
};

export default TimelineChartSchedule;
