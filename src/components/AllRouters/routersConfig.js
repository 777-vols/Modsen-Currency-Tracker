import urls from '@constants/urls';
import BankCard from '@pages/BankCard';
import Contacts from '@pages/Contacts';
import Home from '@pages/Home';
import PageNotFound from '@pages/PageNotFound';
import Timeline from '@pages/Timeline';

import Market from '@/pages/Market';

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
    Component: Contacts
  },
  {
    path: urls.notFound,
    Component: PageNotFound
  },
  {
    path: urls.market,
    Component: Market
  },
  {
    path: urls.sparks,
    Component: Market
  },
  {
    path: urls.ideas,
    Component: Market
  },
  {
    path: urls.service,
    Component: Market
  },
  {
    path: urls.snaps,
    Component: Market
  },
  {
    path: urls.streams,
    Component: Market
  }
];

export default routesConfig;
