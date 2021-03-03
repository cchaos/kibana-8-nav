import React from 'react';

import { EuiHorizontalRule, EuiSpacer } from '@elastic/eui';

import { ManagementPage } from '../../components/kibana/management/page';

export default () => (
  <>
    <ManagementPage
      template="centeredBody"
      pageTitle="Management Overview"
      sideNavItem="Overview"
      pageHeader={{
        iconType: 'managementApp',
        iconProps: { color: 'inherit' },
        pageTitle: (
          <>
            Welcome to
            <EuiSpacer size="s" />
            Stack Management 7.9.1
          </>
        ),
        description: (
          <>
            Manage your indices, index patterns, saved objects, Kibana settings,
            and more.
            <EuiHorizontalRule size="quarter" />A complete list of apps is in
            the menu on the left.
          </>
        ),
      }}
    />
  </>
);
