import urls from '@constants/urls';

const { market, sparks, ideas, service, snaps, streams } = urls;

const config = [
  {
    id: 1,
    content: 'Modsen Currency Tracker'
  },
  {
    id: 2,
    content:
      'Since then, the company has grown organically to. Starsup is the world&apos;s largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.'
  },
  {
    id: 3,
    content: 'Startsup © 2023-2024, All Rights Reserved'
  },
  [
    {
      header: 'General',
      items: [
        {
          id: 1,
          itemContent: 'Market',
          url: market
        },
        {
          id: 2,
          itemContent: 'Service',
          url: service
        }
      ]
    },
    {
      header: 'Product',
      items: [
        {
          id: 1,
          itemContent: 'Sparks',
          url: sparks
        },
        {
          id: 2,
          itemContent: 'Snaps',
          url: snaps
        }
      ]
    },
    {
      header: 'Community',
      items: [
        {
          id: 1,
          itemContent: 'Ideas',
          url: ideas
        },
        {
          id: 2,
          itemContent: 'Streams',
          url: streams
        }
      ]
    }
  ]
];

export default config;
