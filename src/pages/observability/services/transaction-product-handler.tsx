import React, { ReactNode } from 'react';
import { Link, navigate } from 'gatsby';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiSelect,
  EuiHeaderLink,
  EuiBreadcrumb,
  EuiButtonEmpty,
} from '@elastic/eui';

import { ObservabilityPage } from '../../../components/kibana/observability/page';

// @ts-ignore
import tracesTableImg from '../../../images/obs-service-transactions-traces.svg';
// @ts-ignore
import transactionsImg from '../../../images/obs-service-transactions.svg';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'APM',
    onClick: () => {
      navigate('observability/services/all');
    },
  },
  {
    text: 'Services',
    onClick: () => {
      navigate('observability/services/all');
    },
  },
  {
    text: 'checkoutService',
    onClick: () => {
      navigate('observability/services/checkout-service');
    },
  },
  {
    text: 'productHandler',
  },
];

const headerLinks: ReactNode = <EuiHeaderLink>Alerts</EuiHeaderLink>;

const pageTitle = (
  <EuiFlexGroup
    responsive={false}
    alignItems="flexStart"
    direction="column"
    component="span"
    gutterSize="none">
    <EuiFlexItem component="span">
      <EuiButtonEmpty
        onClick={() => navigate('observability/services/checkout-service')}
        iconType="sortLeft"
        flush="both"
        size="s">
        <strong>Transactions</strong>
      </EuiButtonEmpty>
    </EuiFlexItem>
    <EuiFlexItem component="span">{'productHandler'}</EuiFlexItem>
  </EuiFlexGroup>
);

export default () => {
  return (
    <ObservabilityPage
      globals={true}
      restrictWidth={false}
      pageTitle="checkoutService"
      navItem=""
      headerLinks={headerLinks}
      breadcrumbs={breadcrumbs}
      pageHeader={{
        pageTitle: pageTitle,
      }}>
      <EuiFlexGroup responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiSelect prepend="Compare" style={{ minWidth: 200 }} />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer />
      <div className="pageScreenshot__TBD">
        <img
          className="pageScreenshot pageScreenshot--fullWidth"
          alt="Transactions"
          src={transactionsImg}
        />
      </div>
      <EuiSpacer />
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
};
