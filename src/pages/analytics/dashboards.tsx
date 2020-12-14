import React from 'react';
import { Link, navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
  EuiFieldSearch,
} from '@elastic/eui';
// @ts-ignore
import dashboardImg from '../../images/Dashboard - Listing.png';
import { KibanaPage } from '../../components/kibana/page/page';
import {
  KibanaPageHeaderPrimaryAddButton,
  KibanaPageHeaderProps,
} from '../../components/kibana/page/page_header';

const PAGE_TITLE = 'Dashboards';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    onClick: () => {
      navigate('analytics/overview');
    },
  },
  {
    text: PAGE_TITLE,
  },
];

const pageHeader: KibanaPageHeaderProps = {
  pageTitle: PAGE_TITLE,
  restrictWidth: true,
  actionButtons: [
    <KibanaPageHeaderPrimaryAddButton>
      Add dashboard
    </KibanaPageHeaderPrimaryAddButton>,
  ],
};

export default () => (
  <KibanaPage
    pageTitle={PAGE_TITLE}
    breadcrumbs={breadcrumbs}
    pageHeader={pageHeader}>
    <EuiPageContent className="euiPageContent--restrictWidth">
      <EuiPageContentBody>
        <EuiFieldSearch
          fullWidth
          placeholder="Search for by dashboard name..."
        />
        <EuiSpacer />
        <Link
          className="pageScreenshot__TBD"
          to="/analytics/dashboards/logs-web-traffic">
          <img
            className="pageScreenshot pageScreenshot--responsive"
            alt="Dashboard listing page"
            width={1212}
            src={dashboardImg}
          />
        </Link>
      </EuiPageContentBody>
    </EuiPageContent>
  </KibanaPage>
);
