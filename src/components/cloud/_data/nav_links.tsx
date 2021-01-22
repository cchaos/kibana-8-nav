import { ChromeNavGroupProps } from '../chrome/nav/nav';

export const CloudNavLinks: ChromeNavGroupProps[] = [
  {
    title: 'Deployments',
    iconType: 'package',
    links: [
      {
        label: 'Overview',
        url: 'cloud/deployments',
      },
      {
        label: 'Features',
      },
    ],
  },
  {
    title: 'Support',
    iconType: 'help',
    links: [
      {
        label: 'Overview',
      },
      {
        label: 'Cases',
      },
      {
        label: 'Subscriptions',
      },
      {
        label: 'Licenses',
      },
    ],
  },
  {
    title: 'Training',
    iconType: 'training',
    links: [
      {
        label: 'Docs',
        url: 'documentation',
      },
      {
        label: 'Blogs',
        href: 'https://www.elastic.co/blog/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Webinars',
        href: 'https://www.elastic.co/videos/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Training',
        href: 'https://www.elastic.co/training/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Consulting',
        href: 'https://www.elastic.co/consulting',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Elastic.co',
        href: 'http://elastic.co',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
  },
];
