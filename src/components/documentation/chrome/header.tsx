import React from 'react';

import {
  EuiHeaderLogo,
  EuiBreadcrumb,
  EuiBadge,
  EuiHeader,
  EuiHeaderLink,
  EuiHeaderLinks,
} from '@elastic/eui';

import { DocsNav } from './nav';
import { navigate } from 'gatsby';
import { KibanaChromeSearch } from '../../kibana/chrome/search';
import { ConsoleUserMenu } from '../../console/header/user_menu';
import { CloudUser } from '../../cloud/_data';
import { ConsoleUpdates } from '../../console/header/updates';

export type DocsHeaderProps = {
  breadcrumbs?: EuiBreadcrumb[];
};

export const DocsHeader: React.FunctionComponent<DocsHeaderProps> = ({
  breadcrumbs,
}) => {
  function renderLogo() {
    return (
      <EuiHeaderLogo
        iconType="logoElastic"
        onClick={() => navigate('cloud')}
        aria-label="Goes to Console home">
        Elastic
      </EuiHeaderLogo>
    );
  }

  return (
    <>
      <EuiHeader
        position="fixed"
        theme="dark"
        sections={[
          {
            items: [
              renderLogo(),
              <EuiHeaderLinks aria-label="App navigation dark theme example">
                <EuiHeaderLink>Products</EuiHeaderLink>
                <EuiHeaderLink isActive>Learn</EuiHeaderLink>
                <EuiHeaderLink>Company</EuiHeaderLink>
              </EuiHeaderLinks>,
            ],
            borders: 'none',
          },
          {
            items: [<KibanaChromeSearch />],
            borders: 'none',
          },
          {
            items: [<ConsoleUpdates />, <ConsoleUserMenu {...CloudUser} />],
            borders: 'none',
          },
        ]}
      />
      <EuiHeader
        position="fixed"
        sections={[
          {
            items: [
              <DocsNav
                currentRoute={
                  breadcrumbs ? String(breadcrumbs[0].text) : 'Documentation'
                }
                currentMission="Product Design"
              />,
            ],
            borders: 'none',
            breadcrumbs,
          },
          {
            borders: 'none',
            items: [<EuiBadge>Version 8.0</EuiBadge>],
          },
        ]}
      />
    </>
  );
};
