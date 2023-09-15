import audImg from '@assets/Currencies/Australian Dollar Icon.svg';
import btcImg from '@assets/Currencies/Bitcoin Icon.svg';
import cadImg from '@assets/Currencies/Canadian Dollar Icon.svg';
import usdImg from '@assets/Currencies/Dollar Icon.svg';
import euroImg from '@assets/Currencies/Euro Icon.svg';
import gpbImg from '@assets/Currencies/Libra Icon.svg';
import arsImg from '@assets/Currencies/Peso Argentino Icon.svg';
import cnyImg from '@assets/Currencies/Won Icon.svg';
import jpyImg from '@assets/Currencies/Yen Icon.svg';

const currencyCardsData = {
  USD: { id: 1, name: 'Dólar comercial', sign: '$', img: usdImg },
  ARS: { id: 2, name: 'Peso Argentino', sign: 'P$', img: arsImg },
  CAD: { id: 3, name: 'Dólar canadense', sign: 'С$', img: cadImg },
  JPY: { id: 4, name: 'Yen', sign: '¥', img: jpyImg },
  AUD: { id: 5, name: 'Dólar Australiano', sign: 'A$', img: audImg },
  CNY: { id: 6, name: 'Yuan', sign: '¥', img: cnyImg },
  EUR: { id: 7, name: 'Euro', sign: '€', img: euroImg },
  BTC: { id: 8, name: 'Bitcoin', sign: '₿', img: btcImg },
  GBP: { id: 9, name: 'Libra', sign: '₱', img: gpbImg }
};

export default currencyCardsData;
