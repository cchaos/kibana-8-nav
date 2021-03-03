import React, { ReactNode, useContext, useEffect } from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiButton,
  EuiHeaderLink,
  EuiHeaderLinks,
} from '@elastic/eui';
// @ts-ignore
import { KibanaChromeContext } from '../../../components/kibana/layout';
import { KibanaPage } from '../../../components/kibana/chrome/page/page';
import {
  KibanaPageHeaderProps,
  KibanaPageHeaderPrimaryAddButton,
} from '../../../components/kibana/chrome/page/page_header';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    onClick: () => {
      navigate('analytics/overview');
    },
  },
  {
    text: 'Dashboards',
    onClick: () => {
      navigate('analytics/dashboards');
    },
  },
  {
    text: 'New',
  },
];

const headerLinks: ReactNode = (
  <EuiHeaderLinks>
    <EuiHeaderLink>Full screen</EuiHeaderLink>

    <EuiHeaderLink>Share</EuiHeaderLink>

    <EuiHeaderLink>Clone</EuiHeaderLink>

    <EuiButton
      iconType="save"
      style={{ minWidth: 80 }}
      size="s"
      color="secondary">
      Save
    </EuiButton>
  </EuiHeaderLinks>
);

const pageHeader: KibanaPageHeaderProps = {
  pageTitle: 'Add your first panel',
  iconType: 'dashboardApp',
  description:
    'Select from a list of already created visualizations or start a new one.',
  actionButtons: [
    <KibanaPageHeaderPrimaryAddButton>
      Add panel
    </KibanaPageHeaderPrimaryAddButton>,
  ],
};

export default () => {
  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs,
      headerLinks,
      pageTitle: 'New | Dashboards',
    });
  }, [breadcrumbs, headerLinks]);

  return (
    <KibanaPage
      template="centeredBody"
      globals={true}
      pageHeader={pageHeader}
    />
  );
};
