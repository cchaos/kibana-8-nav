import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { EuiAvatar, EuiSideNav, EuiTitle } from '@elastic/eui';

type Props = {
  navItem?: string;
};

export function SecurityNav({ navItem }: Props) {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const createItem = (name: string, data = {}) => {
    return {
      id: name,
      name,
      // @ts-ignore
      isSelected: name === navItem,
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
    createItem('', {
      items: [createItem('Overview', { url: 'security/overview' })],
    }),
    createItem('Alerts', {
      disabled: false,
      items: [createItem('Overview', { isSelected: false })],
    }),
    createItem('Hosts', {
      disabled: false,
      items: [
        createItem('All hosts'),
        createItem('Anamolies'),
        createItem('Authentication list'),
        createItem('Events', { url: 'security/event-suspicious-login' }),
      ],
    }),
    createItem('Network', {
      disabled: false,
      items: [createItem('Overview', { isSelected: false })],
    }),
    createItem('Investigations', {
      disabled: false,
      items: [
        createItem('Timelines'),
        createItem('Resolver'),
        createItem('Cases'),
      ],
    }),
    createItem('Management', {
      disabled: false,
      items: [createItem('Overview', { isSelected: false })],
    }),
  ];

  return (
    <div className="euiSolutionNav">
      <EuiTitle className="euiSolutionNav__title" size="xs">
        <h2>
          <EuiAvatar
            color="plain"
            iconType="logoSecurity"
            name="Security"
            className="euiSolutionNav__titleIcon"
          />
          <strong>Security</strong>
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
}
