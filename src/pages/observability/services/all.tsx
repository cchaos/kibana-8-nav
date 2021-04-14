import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

import { EuiHeaderLink, EuiBreadcrumb } from '@elastic/eui';

import { ObservabilityPage } from '../../../components/kibana/observability/page';

// @ts-ignore
import listImg from '../../../images/obs-services-table.svg';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'APM',
    href: '#',
  },
  {
    text: 'Services',
  },
];

const headerLinks: ReactNode = <EuiHeaderLink>Alerts</EuiHeaderLink>;

export default () => (
  <ObservabilityPage
    globals={true}
    pageTitle="All services"
    navItem="Services"
    headerLinks={headerLinks}
    breadcrumbs={breadcrumbs}
    pageHeader={{
      pageTitle: 'Services',
    }}>
    <Link
      className="pageScreenshot__TBD"
      style={{ display: 'block' }}
      to="/observability/services/checkout-service">
      <img
        className="pageScreenshot pageScreenshot--fullWidth"
        alt="Deployments list"
        width={678}
        src={listImg}
      />
    </Link>
  </ObservabilityPage>
);
