import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { EuiIcon, EuiLink, EuiSideNav, EuiTitle } from '@elastic/eui';

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
        createItem('Stream', {
          disabled: true,
          items: [createItem('Overview', { isSelected: false })],
        }),
        createItem('Log rage'),
        createItem('Categories'),
        createItem('Settings'),
      ],
    }),
    createItem('Metrics', {
      disabled: false,
      items: [createItem('Overview', { isSelected: false })],
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
      items: [createItem('Overview', { isSelected: false })],
    }),
  ];

  return (
    <div className="euiSolutionNav">
      <EuiTitle className="euiSolutionNav__title" size="xs">
        <h2>
          <EuiLink
            color="text"
            onClick={() => navigate('/observability/overview')}>
            <EuiIcon
              className="euiSolutionNav__titleIcon"
              size="l"
              type="logoObservability"
            />
            <strong>Observability</strong>
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
}
