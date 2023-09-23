export default function parseDataForSchedule(dataValues) {
  const colors = [];
  for (let i = 0; i < dataValues.length; i += 1) {
    if (i === 0) {
      colors.push('green');
      i += 1;
    }
    if (dataValues.length === 1) {
      return ['green'];
    }
    if (+dataValues[i - 1].highPrice > +dataValues[i].highPrice) colors.push('red');
    else colors.push('green');
  }
  return colors;
}
