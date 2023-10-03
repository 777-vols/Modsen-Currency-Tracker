import styledColors from '@constants/styles/colors';

export default function parseDataForScheduleHelper(dataValues) {
  const colors = [];
  for (let counter = 0; counter < dataValues.length; counter += 1) {
    if (counter === 0) {
      colors.push(styledColors.darkGreen);
      counter += 1;
    }
    if (dataValues.length === 1) {
      return [styledColors.darkGreen];
    }
    if (Number(dataValues[counter - 1].highPrice) > Number(dataValues[counter].highPrice))
      colors.push(styledColors.red);
    else colors.push(styledColors.darkGreen);
  }
  return colors;
}
