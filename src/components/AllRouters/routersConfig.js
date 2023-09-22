import * as urls from '@constants/urls';
import BankCard from '@pages/BankCard/Index';
import Contact from '@pages/Contact/Index';
import Home from '@pages/Home/Index';
import PageNotFound from '@pages/PageNotFound/Index';
import Timeline from '@pages/Timeline/Index';

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
    path: urls.contact,
    Component: Contact
  },
  {
    path: urls.notFound,
    Component: PageNotFound
  }
];

export default routesConfig;
