import React from 'react';

import { EuiHorizontalRule } from '@elastic/eui';

import { ManagementPage } from '../../components/kibana/management/page';

export default () => (
  <>
    <ManagementPage
      template="empty"
      pageTitle="Management Overview"
      sideNavItem="Overview"
      pageHeader={{
        iconType: 'managementApp',
        // iconColor: null,
        pageTitle: (
          <h1>
            Welcome to <br />
            Stack Management 7.9.1
          </h1>
        ),
        description: (
          <>
            <p>
              Manage your indices, index patterns, saved objects, Kibana
              settings, and more.
            </p>
            <EuiHorizontalRule size="quarter" />
            <p>A complete list of apps is in the menu on the left.</p>
          </>
        ),
      }}
    />
  </>
);
