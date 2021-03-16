import React from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiBadge,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderProps,
} from '@elastic/eui';

import { CloudNav } from './nav';

export type CloudHeaderProps = {
  breadcrumbs?: EuiBreadcrumb[];
};

export const cloudHeaderSections = (
  breadcrumbs: CloudHeaderProps['breadcrumbs']
): EuiHeaderProps['sections'] => {
  const CloudLogo = (
    <EuiHeaderLogo
      iconType="logoCloud"
      onClick={() => navigate('cloud')}
      aria-label="Go to Elastic cloud home"
      title="Go to Elastic cloud home"
    />
  );

  const sections: EuiHeaderProps['sections'] = [
    {
      items: [
        <CloudNav
          currentRoute={breadcrumbs ? String(breadcrumbs[0].text) : 'Cloud'}
        />,
        CloudLogo,
      ],
      borders: 'none',
      breadcrumbs,
    },
    {
      borders: 'none',
      items: [<EuiBadge>Version 8.0</EuiBadge>],
    },
  ];
  return sections;
};

export const CloudHeader: React.FunctionComponent<CloudHeaderProps> = ({
  breadcrumbs,
}) => {
  return <EuiHeader sections={cloudHeaderSections(breadcrumbs)} />;
};
