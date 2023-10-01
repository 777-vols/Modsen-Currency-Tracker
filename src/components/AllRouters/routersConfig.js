import urls from '@constants/urls';
import BankCard from '@pages/BankCard';
import Contact from '@pages/Contact';
import Home from '@pages/Home';
import PageNotFound from '@pages/PageNotFound';
import Timeline from '@pages/Timeline';

import MarketPage from '@/pages/MarketPage';

const routesConfig = [
  {
    path: urls.home,
    Component: Home
  },
  {
    path: urls.timeline,
    Component: Timeline
  },
  {
    path: urls.bankCard,
    Component: BankCard
  },
  {
    path: urls.contacts,
    Component: Contact
  },
  {
    path: urls.notFound,
    Component: PageNotFound
  },
  {
    path: urls.market,
    Component: MarketPage
  }
];

export default routesConfig;
