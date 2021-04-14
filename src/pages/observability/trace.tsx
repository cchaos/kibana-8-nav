import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

import { EuiHeaderLink, EuiBreadcrumb } from '@elastic/eui';
import { ObservabilityPage } from '../../components/kibana/observability/page';

// @ts-ignore
import tracesTableImg from '../../images/obs-traces-table.svg';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'APM',
    href: '#',
  },
  {
    text: 'Traces',
  },
];

const headerLinks: ReactNode = <EuiHeaderLink>Alerts</EuiHeaderLink>;

export default () => (
  <ObservabilityPage
    globals={true}
    pageTitle="Traces"
    navItem="Traces"
    headerLinks={headerLinks}
    breadcrumbs={breadcrumbs}
    pageHeader={{
      pageTitle: 'Traces',
    }}>
    <Link
      to="/observability/services/trace-get"
      style={{ display: 'block' }}
      className="pageScreenshot__TBD">
      <img
        className="pageScreenshot pageScreenshot--fullWidth"
        alt="Traces"
        src={tracesTableImg}
      />
    </Link>
  </ObservabilityPage>
);
