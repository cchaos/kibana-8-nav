import React, { ReactNode } from 'react';
import { navigate } from 'gatsby';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderLink,
  EuiBreadcrumb,
  EuiButtonEmpty,
} from '@elastic/eui';

import { ObservabilityPage } from '../../../components/kibana/observability/page';

// @ts-ignore
import contentImg from '../../../images/obs-trace-content.svg';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'APM',
    onClick: () => {
      navigate('observability/services/all');
    },
  },
  {
    text: 'Traces',
    onClick: () => {
      navigate('observability/trace');
    },
  },
  {
    text: 'GET /api/types',
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
        onClick={() => navigate('observability/trace')}
        iconType="sortLeft"
        flush="both"
        size="s">
        <strong>Traces</strong>
      </EuiButtonEmpty>
    </EuiFlexItem>
    <EuiFlexItem component="span">{'GET /api/types'}</EuiFlexItem>
  </EuiFlexGroup>
);

export default () => {
  return (
    <ObservabilityPage
      globals={false}
      solutionNavCollapsed={true}
      paddingSize="none"
      restrictWidth={false}
      pageTitle="checkoutService"
      navItem=""
      headerLinks={headerLinks}
      breadcrumbs={breadcrumbs}
      pageHeader={{
        paddingSize: 'l',
        pageTitle: pageTitle,
      }}>
      <div className="pageScreenshot__TBD">
        <img
          className="pageScreenshot pageScreenshot--fullWidth"
          alt="checkoutService"
          src={contentImg}
        />
      </div>
    </ObservabilityPage>
  );
};
