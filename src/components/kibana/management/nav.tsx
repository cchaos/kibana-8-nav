import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { EuiIcon, EuiLink, EuiSideNav, EuiTitle } from '@elastic/eui';

type Props = {
  currentItem?: string;
};

export const KibanaManagementNav: any = ({
  currentItem = 'management/stack',
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
    createItem('Console', {
      disabled: false,
      items: [
        createItem('Index Patterns'),
        createItem('Saved Objects'),
        createItem('Spaces'),
        createItem('Reporting'),
        createItem('Advanced settings', {
          items: [createItem('General'), createItem('Visualizations')],
        }),
      ],
    }),
    createItem('Security', {
      disabled: false,
      items: [
        createItem('Users'),
        createItem('Roles'),
        createItem('API Keys'),
        createItem('Role Mappings'),
      ],
    }),
    createItem('Fleet', {
      disabled: false,
      items: [
        createItem('Agents', { url: 'management/agents' }),
        createItem('Integrations', { url: 'management/ingest' }),
        // createItem('Fleet'),
        // createItem('Datasets'),
      ],
    }),
    createItem('Elasticsearch', {
      disabled: false,
      items: [
        createItem('Index Management'),
        createItem('Index Lifecycle Policies'),
        createItem('Rolllup Jobs'),
        createItem('Transforms'),
        createItem('Watcher'),
        createItem('Snapshot and Restore'),
        createItem('8.0 Upgrade Assistant'),
      ],
    }),
  ];

  return (
    <div className="euiSolutionNav">
      <EuiTitle className="euiSolutionNav__title" size="xs">
        <h2>
          <EuiLink color="text" onClick={() => navigate('/management/stack')}>
            <EuiIcon
              className="euiSolutionNav__titleIcon"
              size="l"
              type="managementApp"
            />
            <strong>Management</strong>
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
