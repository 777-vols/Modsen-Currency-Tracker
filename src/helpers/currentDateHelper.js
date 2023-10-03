import { getLocaleStorageItem } from '@helpers/localeStorageHelpers';

function currentDateHelper() {
  const date = new Date(Number(getLocaleStorageItem('localStorageInitTime')));
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}${ampm}`;
}

export default currentDateHelper;
