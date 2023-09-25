import axios from 'axios';

export default function getCurrenciesList() {
  return axios.get(process.env.REACT_APP_CURRENCY_API_URL);
}
