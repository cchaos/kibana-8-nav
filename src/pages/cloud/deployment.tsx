import React from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';

import { DeploymentsPage } from '../../components/cloud/deployments/page';
// @ts-ignore
import squirrelImg from '../../images/Cloud Deployment - Squirrel.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Deployments',
    onClick: () => {
      navigate('/cloud/deployments');
    },
  },
  {
    text: 'Squirrel',
  },
];

export default () => (
  <DeploymentsPage
    pageTitle="Squirrel - Deployment overview"
    showSingleDeployment={true}
    sideNavItem="Overview"
    breadcrumbs={breadcrumbs}
    pageHeader={{
      pageTitle: (
        <EuiFlexGroup
          alignItems="flexStart"
          direction="column"
          component="span"
          gutterSize="none">
          <EuiFlexItem component="span">
            <EuiButtonEmpty flush="both" size="s">
              <strong>Squirrel</strong>
            </EuiButtonEmpty>
          </EuiFlexItem>
          <EuiFlexItem component="span">{'Deployment overview'}</EuiFlexItem>
        </EuiFlexGroup>
      ),
      rightSideItems: [
        <EuiButton
          iconType="popout"
          iconSide="right"
          onClick={() => navigate('/')}>
          Open deployment
        </EuiButton>,
      ],
      style: { marginBottom: 0 },
    }}
    bottomBar={<EuiButton fill>Save</EuiButton>}>
    <div className="pageScreenshot__TBD">
      <img
        className="pageScreenshot pageScreenshot--fullWidth"
        alt="Blank table"
        width={1168}
        src={squirrelImg}
      />
    </div>
  </DeploymentsPage>
);
