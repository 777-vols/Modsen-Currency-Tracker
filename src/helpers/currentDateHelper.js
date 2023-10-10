import { getLocaleStorageItem } from '@helpers/localeStorageHelpers';

function currentDateHelper() {
  const date = new Date(Number(getLocaleStorageItem('localStorageInitTime')));
  const halfADayInHours = 12;
  const tenMinutes = 10;
  let currentDateHours = date.getHours();
  let currentDateMinutes = date.getMinutes();
  const ampm = currentDateHours >= halfADayInHours ? 'pm' : 'am';
  currentDateHours %= halfADayInHours;
  currentDateHours = currentDateHours || halfADayInHours;
  currentDateMinutes =
    currentDateMinutes < tenMinutes ? `0${currentDateMinutes}` : currentDateMinutes;
  return `${currentDateHours}:${currentDateMinutes}${ampm}`;
}

export default currentDateHelper;
