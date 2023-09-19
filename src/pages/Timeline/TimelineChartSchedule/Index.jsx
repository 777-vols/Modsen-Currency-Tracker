import { barOptions1, barOptions2 } from '@constants/chartBarOptions';
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

const data = {
  labels: [1, 3, 4, 5, 6, 7, 8, 9, 10],
  datasets: [
    {
      label: 1,
      data: [15000, 20000, 30000, 40000, 50000, 30000, 70000, 80000, 60000, 100000],
      backgroundColor: 'green',
      // borderColor: 'red',
      borderWidth: 1
    }
  ]
};

const options = {};

class TimelineChartSchedule extends Component {
  render() {
    console.log(this.props.modalData);
    return (
      <>
        <Bar data={data} options={barOptions1} />
      </>
    );
  }
}

TimelineChartSchedule.propTypes = {
  modalData: PropTypes.object
};

export default TimelineChartSchedule;
