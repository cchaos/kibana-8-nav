import React from 'react';

import {
  EuiBreadcrumb,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiStat,
  EuiHorizontalRule,
  EuiPanel,
  EuiPageHeaderProps,
} from '@elastic/eui';

import { SecurityPage } from '../../components/kibana/security/page';

// @ts-ignore
import tracesImg from '../../images/Traces - Explorer.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Hosts',
    href: '#',
  },
  {
    text: 'Events',
  },
];

const pageHeader: EuiPageHeaderProps = {
  pageTitle: 'Suspcious login',
  description: 'This timeline is to investigate a suspicious login.',
  rightSideItems: [
    <EuiButton fill iconType="arrowDown" iconSide="right">
      Add to case
    </EuiButton>,
    <EuiButton iconType="starEmpty">Add to favorites</EuiButton>,
  ],
  paddingSize: 'l',
};

export default () => (
  <SecurityPage
    globals={true}
    pageTitle="Suspicious login"
    navItem="Events"
    breadcrumbs={breadcrumbs}
    pageHeader={pageHeader}
    bottomBar={<EuiButton fill>Save</EuiButton>}
    restrictWidth={false}>
    <EuiHorizontalRule margin="none" />
    <EuiPanel paddingSize="l" color="transparent">
      <EuiFlexGroup responsive={false} wrap>
        <EuiFlexItem>
          <EuiStat title="1" description="Default color" />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiStat
            title="10"
            description="Subdued color"
            titleColor="subdued"
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiStat
            title="100"
            description="Primary color"
            titleColor="primary"
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiStat
            title="1,000"
            description="Secondary color"
            titleColor="secondary"
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiStat
            title="10,000"
            description="Danger color"
            titleColor="danger"
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiStat
            title="100,000"
            description="Accent color"
            titleColor="accent"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
    <EuiHorizontalRule margin="none" />
    <div className="pageScreenshot__TBD">
      <img
        className="pageScreenshot pageScreenshot--fullWidth"
        alt="Traces explorer"
        width={1275}
        src={tracesImg}
      />
    </div>
  </SecurityPage>
);
