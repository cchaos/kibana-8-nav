import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { EuiIcon, EuiSideNav, EuiSpacer, EuiTitle } from '@elastic/eui';

type Props = {
  navItem?: string;
};

export function ObservabilityNav({ navItem }: Props) {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);

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
    createItem('Logs', {
      disabled: false,
      items: [
        createItem('Stream', { disabled: true }), // TODO: Allow side nav items to be disabled
        createItem('Log rage'),
        createItem('Categories'),
        createItem('Settings'),
      ],
    }),
    createItem('Metrics', {
      disabled: false,
    }),
    createItem('APM', {
      disabled: false,
      items: [
        createItem('Services'),
        createItem('Traces', { url: 'observability/trace' }),
        createItem('Settings', {
          url: 'observability/apm-settings',
          items: [
            createItem('Agent configuration', { disabled: false }),
            createItem('Anomaly detection'),
            createItem('Customize app'),
            createItem('Indices'),
          ],
        }),
      ],
    }),
    createItem('Uptime', {
      disabled: false,
    }),
  ];

  return (
    <>
      <EuiTitle size="xs">
        <h2>
          <EuiIcon size="l" type="logoObservability" /> &ensp; Observability
        </h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiSideNav
        mobileTitle="Navigate within Observability"
        toggleOpenOnMobile={toggleOpenOnMobile}
        isOpenOnMobile={isSideNavOpenOnMobile}
        items={sideNav}
      />
    </>
  );
}
