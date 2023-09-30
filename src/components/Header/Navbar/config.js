import urls from '@constants/urls';

const { home, timeline, bankCard, contacts } = urls;
const navbarConfig = [
  {
    name: 'Home',
    url: home
  },
  {
    name: 'Timeline',
    url: timeline
  },
  {
    name: 'Bank card',
    url: bankCard
  },
  {
    name: 'Contato',
    url: contacts
  }
];

export default navbarConfig;
