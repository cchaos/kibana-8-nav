import React from 'react';
import { ChromeNavGroupProps } from '../nav/nav';
import { EuiIcon } from '@elastic/eui';

// @ts-ignore
import { home } from '../../../../images/home';

export const KibanaNavTopLinks: ChromeNavGroupProps = {
  title: 'Top',
  links: [
    {
      label: 'Home',
      // @ts-ignore: Still throws a console error
      icon: <EuiIcon type={home} />,
      url: '/',
    },
    // {
    //   label: 'Settings',
    //   iconType: 'gear',
    // },
  ],
};

export const KibanaNavLinksFirst: ChromeNavGroupProps[] = [
  {
    title: 'Analytics',
    iconType: 'logoKibana',
    links: [
      {
        label: 'Overview',
        url: 'analytics/overview',
      },
      {
        label: 'Discover',
        url: 'analytics/discover',
      },
      {
        label: 'Visualize',
        url: 'analytics/visualize',
      },
      {
        label: 'Dashboards',
        url: 'analytics/dashboards',
      },
      {
        label: 'Canvas',
        url: 'analytics/canvas',
      },
      {
        label: 'Maps',
        url: 'analytics/maps',
      },
      {
        label: 'Machine Learning',
      },
      {
        label: 'Graph',
      },
    ],
  },
  {
    title: 'Observability',
    iconType: 'logoObservability',
    links: [
      {
        label: 'Overview',
        url: 'observability/overview',
      },
      {
        label: 'Metrics',
      },
      {
        label: 'Logs',
      },
      {
        label: 'APM',
      },
      {
        label: 'Uptime',
      },
    ],
  },
  {
    title: 'Security',
    iconType: 'logoSecurity',
    links: [
      {
        label: 'Overview',
        url: 'security/overview',
      },
      {
        label: 'SIEM',
      },
      {
        label: 'Endpoint',
      },
    ],
  },
];

export const KibanaNavLinksLast: ChromeNavGroupProps[] = [
  {
    title: 'Enterprise Search',
    iconType: 'logoWorkplaceSearch',
    links: [
      {
        label: 'Overview',
        url: 'enterprise-search/overview',
      },
      {
        label: 'App Search',
      },
      {
        label: 'Workplace Search',
      },
    ],
  },
  {
    title: 'Management',
    iconType: 'devToolsApp',
    links: [
      {
        label: 'Dev Tools',
        url: 'dev-tools-console',
      },
      {
        label: 'Stack Monitoring',
      },
      {
        label: 'Stack Management',
        url: 'management/stack',
      },
      {
        label: 'Fleet',
        url: 'management/agents',
      },
      //   {
      //     label: 'Credentials',
      //   },
      //   {
      //     label: 'Ingestion APIs',
      //   },
      //   {
      //     label: 'Query Tester',
      //   },
      //   {
      //     label: 'Reference UI',
      //   },
    ],
  },
  {
    title: 'Learn',
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
