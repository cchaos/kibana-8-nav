import React from 'react';
import { Link } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiButton,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSelect,
  EuiSpacer,
} from '@elastic/eui';

import { DeploymentsPage } from '../../components/cloud/deployments/page';

// @ts-ignore
import listImg from '../../images/Cloud - Deployments List.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Deployments',
  },
];

export default () => (
  <DeploymentsPage
    pageTitle="Deployments"
    pageHeader={{
      pageTitle: 'All deployments',
      rightSideItems: [
        <EuiButton fill iconType="plusInCircleFilled">
          Create deployment
        </EuiButton>,
      ],
    }}
    sideNavItem="Overview"
    breadcrumbs={breadcrumbs}>
    <EuiFlexGroup>
      <EuiFlexItem grow={3}>
        <EuiFieldSearch fullWidth placeholder="Search transactions..." />
      </EuiFlexItem>
      <EuiFlexItem grow={1}>
        <EuiSelect prepend="Environment" />
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiSpacer />
    <Link className="pageScreenshot__TBD" to="/cloud/deployment">
      <img
        className="pageScreenshot pageScreenshot--responsive"
        alt="Deployments list"
        width={678}
        src={listImg}
      />
    </Link>
  </DeploymentsPage>
);
