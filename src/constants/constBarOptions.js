import styledColors from './styles/colors';

const constBarOptions = {
  plugins: {
    title: {
      display: true
    },
    legend: {
      display: false,
      labels: {
        color: styledColors.barLabelColor
      }
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      display: true
    },
    y: {
      stacked: false,
      position: 'right',
      grid: {
        color: styledColors.barGridColor
      }
    }
  }
};

export default constBarOptions;
