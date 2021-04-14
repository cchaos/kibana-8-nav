import React, { ReactNode, useState } from 'react';
import { Link, navigate } from 'gatsby';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiSelect,
  EuiHeaderLink,
  EuiBreadcrumb,
  EuiButtonEmpty,
  EuiPageHeaderContentProps,
} from '@elastic/eui';

import { ObservabilityPage } from '../../../components/kibana/observability/page';

// @ts-ignore
import contentImg from '../../../images/obs-service-content.svg';
// @ts-ignore
import transactionsImg from '../../../images/obs-service-transactions.svg';
// @ts-ignore
import transactionsTableImg from '../../../images/obs-service-transactions-table.svg';
// @ts-ignore

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
        onClick={() => navigate('observability/services/all')}
        iconType="sortLeft"
        flush="both"
        size="s">
        <strong>Services</strong>
      </EuiButtonEmpty>
    </EuiFlexItem>
    <EuiFlexItem component="span">{'checkoutService'}</EuiFlexItem>
  </EuiFlexGroup>
);

export default () => {
  const [tabId, setTabId] = useState('overview');

  const tabs: EuiPageHeaderContentProps['tabs'] = [
    {
      label: 'Overview',
      id: 'overview',
      isSelected: tabId === 'overview',
      onClick: () => setTabId('overview'),
    },
    {
      label: 'Transaction',
      id: 'transaction',
      isSelected: tabId === 'transaction',
      onClick: () => setTabId('transaction'),
    },
    {
      label: 'Errors',
      disabled: true,
    },
    {
      label: 'Metrics',
      disabled: true,
    },
    {
      label: 'Service map',
      disabled: true,
    },
  ];

  let tabContent;
  switch (tabId) {
    case 'transaction':
      tabContent = (
        <>
          <div className="pageScreenshot__TBD">
            <img
              className="pageScreenshot pageScreenshot--fullWidth"
              alt="Transactions"
              src={transactionsImg}
            />
          </div>
          <Link
            to="/observability/services/transaction-product-handler"
            className="pageScreenshot__TBD">
            <img
              className="pageScreenshot pageScreenshot--fullWidth"
              alt="Transactions"
              src={transactionsTableImg}
            />
          </Link>
        </>
      );
      break;

    default:
      tabContent = (
        <div className="pageScreenshot__TBD">
          <img
            className="pageScreenshot pageScreenshot--fullWidth"
            alt="checkoutService"
            src={contentImg}
          />
        </div>
      );
      break;
  }

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
        tabs: tabs,
      }}>
      <EuiFlexGroup responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiSelect prepend="Type" style={{ minWidth: 200 }} />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSelect prepend="Compare" style={{ minWidth: 200 }} />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer />
      {tabContent}
    </ObservabilityPage>
  );
};
