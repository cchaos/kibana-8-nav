import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { EuiAvatar, EuiSideNav, EuiTitle } from '@elastic/eui';

type Props = {
  navItem?: string;
};

export function ObservabilityNav({ navItem }: Props) {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);
  const [forcedOpenId, setForcedOpenId] = useState('');

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const createItem = (name: string, data = {}) => {
    return {
      id: name,
      name,
      // @ts-ignore
      isSelected: data.url === navItem || name === navItem,
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
      items: [createItem('Overview', { url: 'observability/overview' })],
    }),
    createItem('Logs', {
      disabled: false,
      items: [
        createItem('Stream', {
          disabled: true,
          // items: [createItem('Overview', { isSelected: false })],
        }),
        createItem('Anomalies'),
        createItem('Categories'),
        // createItem('Settings'),
      ],
    }),
    createItem('Infrastructure', {
      disabled: false,
      items: [
        createItem('Inventory', {
          disabled: false,
          forceOpen: forcedOpenId === 'Inventory',
          onClick: () => {
            setForcedOpenId((id) => (id === 'Inventory' ? '' : 'Inventory'));
          },
          items: [createItem('Hosts'), createItem('AWS')],
        }),
        createItem('Metrics explorer'),
      ],
    }),
    createItem('APM', {
      disabled: false,
      items: [
        createItem('Services', { url: 'observability/services/all' }),
        createItem('Traces', { url: 'observability/trace' }),
        createItem('Service map', { url: 'observability/service-map' }),
      ],
    }),
    createItem('Uptime', {
      disabled: false,
      items: [createItem('Monitoring overview'), createItem('Certificates')],
    }),
    createItem('User experience', {
      disabled: false,
      items: [createItem('Dashboard'), createItem('Performance analyzer')],
    }),
    createItem('Settings', {
      disabled: false,
      items: [
        createItem('Agent configuration', {
          url: 'observability/apm-settings',
        }),
        createItem('Anomaly detection'),
        createItem('Customize app'),
        createItem('Indices'),
      ],
    }),
  ];

  return (
    <div className="euiSolutionNav">
      <EuiTitle className="euiSolutionNav__title" size="xs">
        <h2>
          <EuiAvatar
            color="plain"
            iconType="logoObservability"
            name="Observability"
            className="euiSolutionNav__titleIcon"
          />
          <strong>Observability</strong>
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
