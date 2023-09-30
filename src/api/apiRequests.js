import envVariables from '@constants/envVariables';
import axios from 'axios';

export default function getCurrenciesList() {
  return axios.get(envVariables.currencyUrl);
}
