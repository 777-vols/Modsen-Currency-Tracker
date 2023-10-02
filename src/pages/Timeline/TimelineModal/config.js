const config = {
  warning: 'Please follow all rules!',
  clearButton: 'Clear all values',
  createButton: 'Create shedule',
  modaInfoRules: [
    {
      id: 1,
      content: '*Enter values between 100 and 10000 for 30 days to successfully create a graph.'
    },
    {
      id: 2,
      content: '*The high price value is filled in first.'
    },
    {
      id: 3,
      content: '*The highest price must be higher than the lowest.'
    },
    {
      id: 4,
      content: '*All fields must be completed.'
    },
    {
      id: 5,
      content: '*To create a schedule, all rules must be followed!!!.'
    }
  ]
};

export default config;
