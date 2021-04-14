import React, { useState } from 'react';
import { navigate } from 'gatsby';

import {
  EuiAvatar,
  EuiIcon,
  EuiLink,
  EuiSideNav,
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
    <div className="euiSolutionNav">
      <EuiTitle className="euiSolutionNav__title" size="xs">
        <h2>
          <EuiLink color="text" onClick={() => navigate('/cloud/deployments')}>
            <EuiAvatar
              color="plain"
              iconType="package"
              name="Deployments"
              className="euiSolutionNav__titleIcon"
            />
            <strong>Deployments</strong>
          </EuiLink>
        </h2>
      </EuiTitle>
      <EuiSideNav
        className="euiSolutionNav__sideNav"
        mobileTitle={'MENU'}
        toggleOpenOnMobile={toggleOpenOnMobile}
        isOpenOnMobile={isSideNavOpenOnMobile}
        items={sideNav}
      />
    </div>
  );
};
