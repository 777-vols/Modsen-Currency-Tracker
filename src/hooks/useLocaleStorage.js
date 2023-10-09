import getCurrenciesList from '@api/apiRequests';
import {
  clearLocaleStorage,
  getLocaleStorageItem,
  setDateAndDataToLocaleStorage
} from '@helpers/localeStorageHelpers';
import { useEffect } from 'react';

function useLocaleStorage(setApiCurrenciesData) {
  useEffect(() => {
    const timePeriodMilliSeconds = 1000;
    const timePeriodSeconds = 3600;
    const timePeriodHours = 24;
    const updateTimePeriod = timePeriodHours * timePeriodSeconds * timePeriodMilliSeconds;
    const localStorageInitTime = getLocaleStorageItem('localStorageInitTime');
    const localStorageInitData = getLocaleStorageItem('localStorageCurrencyData');
    if (localStorageInitTime === null || localStorageInitData == null) {
      getCurrenciesList().then(({ data }) => {
        setDateAndDataToLocaleStorage(data);
        setApiCurrenciesData(data);
      });
    } else if (Number(new Date() - localStorageInitTime > updateTimePeriod)) {
      getCurrenciesList().then(({ data }) => {
        clearLocaleStorage();
        setDateAndDataToLocaleStorage(data);
      });
    }

    if (getLocaleStorageItem('localStorageCurrencyData')) {
      const data = JSON.parse(getLocaleStorageItem('localStorageCurrencyData'));
      setApiCurrenciesData(data);
    }
  }, [setApiCurrenciesData]);
}

export default useLocaleStorage;
