export default function parseDataForSchedule(dataValues) {
  const colors = [];
  for (let i = 0; i < dataValues.length; i += 1) {
    if (+dataValues[i - 1] > +dataValues[i]) colors.push('red');
    else colors.push('green');
  }
  return colors;
}
