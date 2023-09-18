export const barOptions1 = {
  plugins: {
    title: {
      display: true
    },
    legend: {
      display: true,
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
      beginAtZero: false
    }
  }
};

export const barOptions2 = {
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
      position: 'right'
    }
  }
};
