import audImg from '@assets/Currencies/australianDollarIcon.svg';
import btcImg from '@assets/Currencies/bitcoinIcon.svg';
import biImg from '@assets/Currencies/bovespaIcon.svg';
import cadImg from '@assets/Currencies/canadianDollarIcon.svg';
import usdImg from '@assets/Currencies/dollarIcon.svg';
import euroImg from '@assets/Currencies/euroIcon.svg';
import ifixImg from '@assets/Currencies/ifixIcon.svg';
import gpbImg from '@assets/Currencies/libraIcon.svg';
import arsImg from '@assets/Currencies/pesoArgentinoIcon.svg';
import cnyImg from '@assets/Currencies/wonIcon.svg';
import jpyImg from '@assets/Currencies/yenIcon.svg';

const constCurrencyCardsData = {
  quotesCards: {
    USD: { id: 1, name: 'Dólar comercial', sign: '$', img: usdImg },
    ARS: { id: 2, name: 'Peso Argentino', sign: 'P$', img: arsImg },
    CAD: { id: 3, name: 'Dólar canadense', sign: 'С$', img: cadImg },
    JPY: { id: 4, name: 'Yen', sign: '¥', img: jpyImg },
    AUD: { id: 5, name: 'Dólar Australiano', sign: 'A$', img: audImg },
    CNY: { id: 6, name: 'Yuan', sign: '¥', img: cnyImg },
    EUR: { id: 7, name: 'Euro', sign: '€', img: euroImg },
    BTC: { id: 8, name: 'Bitcoin', sign: '₿', img: btcImg },
    GBP: { id: 9, name: 'Libra', sign: '₱', img: gpbImg }
  },
  stocksCards: {
    BI: { id: 1, name: 'Bovespa Index', img: biImg },
    IFIX: { id: 2, name: 'IFIX', img: ifixImg }
  }
};

export default constCurrencyCardsData;
