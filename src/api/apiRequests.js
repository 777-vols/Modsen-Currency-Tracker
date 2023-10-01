import constEnvVariables from '@constants/constEnvVariables';
import axios from 'axios';

export default function getCurrenciesList() {
  return axios.get(constEnvVariables.currencyUrl);
}
