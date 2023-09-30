import urls from '@constants/urls';
import BankCard from '@pages/BankCard/Index';
import Contact from '@pages/Contact/Index';
import Home from '@pages/Home/Index';
import PageNotFound from '@pages/PageNotFound/Index';
import Timeline from '@pages/Timeline/Index';

import MarketPage from '@/pages/MarketPage/Index';

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
