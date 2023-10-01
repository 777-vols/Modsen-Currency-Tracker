const constBarOptions = {
  plugins: {
    title: {
      display: true
    },
    legend: {
      display: false,
      labels: {
        color: 'rgb(16, 50, 188)'
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
        color: 'rgb(255, 255, 255)'
      }
    }
  }
};

export default constBarOptions;
