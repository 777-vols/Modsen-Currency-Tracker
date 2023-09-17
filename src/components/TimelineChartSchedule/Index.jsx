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
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);

const data = {
  labels: ['Mon', 'Tue', 'Wen', 'Thurs'],
  datasets: [
    {
      label: 1,
      data: [1, 2, 3],
      backgroundColor: 'green',
      borderColor: 'red',
      borderWidth: 1
    },
    {
      label: 2,
      data: [4, 5, 6],
      backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: 1
    },
    {
      label: 3,
      data: [7, 8, 9],
      backgroundColor: 'purple',
      borderColor: 'red',
      borderWidth: 1
    },
    {
      label: 4,
      data: [10, 11, 12],
      backgroundColor: 'blue',
      borderColor: 'red',
      borderWidth: 1
    }
  ]
};

const options = {};

class TimelineChartSchedule extends Component {
  render() {
    return (
      <>
        <Bar data={data} options={options} />
      </>
    );
  }
}

export default TimelineChartSchedule;
