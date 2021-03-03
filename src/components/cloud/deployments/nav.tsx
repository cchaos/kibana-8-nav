import React, { useState } from 'react';
import { navigate } from 'gatsby';

import {
  EuiIcon,
  EuiLink,
  EuiSideNav,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui';

type Props = {
  currentItem?: string;
  showSingleDeployment?: boolean;
};

export const CloudDeploymentsNav: any = ({
  currentItem = 'management/stack',
  showSingleDeployment = false,
}: Props) => {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const createItem = (name: string, data = {}) => {
    return {
      id: name,
      name,
      // @ts-ignore
      isSelected: name === currentItem,
      // @ts-ignore
      disabled: !data.url,
      // @ts-ignore
      onClick: data.url
        ? () => {
            // @ts-ignore
            navigate(data.url);
          }
        : undefined,
      ...data,
    };
  };

  const sideNav = [
    createItem('Features', {
      disabled: false,
      items: [
        createItem('All features'),
        createItem('API keys'),
        createItem('Traffic filters'),
        createItem('Extensions'),
      ],
    }),
  ];

  if (showSingleDeployment) {
    sideNav.unshift(
      createItem('Squirrel', {
        disabled: false,
        emphasize: true,
        items: [
          createItem('Overview', { url: '/cloud/deployment' }),
          createItem('Logs & metrics'),
          createItem('Activity'),
          createItem('Settings'),
        ],
      })
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <EuiTitle size="xs">
        <h2>
          <EuiLink color="text" onClick={() => navigate('/cloud/deployments')}>
            <EuiIcon size="l" type="package" /> &ensp;{' '}
            <strong>Deployments</strong>
          </EuiLink>
        </h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiSideNav
        toggleOpenOnMobile={toggleOpenOnMobile}
        isOpenOnMobile={isSideNavOpenOnMobile}
        items={sideNav}
      />
    </div>
  );
};
