import React, { ReactNode } from 'react';

import {
  EuiBreadcrumb,
  EuiButton,
  EuiSpacer,
  EuiFlexItem,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFacetButton,
  EuiFacetGroup,
  EuiFlexGrid,
  EuiTitle,
  EuiIcon,
  EuiHorizontalRule,
  EuiKeyPadMenuItem,
} from '@elastic/eui';

import { ManagementPage } from '../../components/kibana/management/page';
// @ts-ignore
import illustrationImg from '../../images/Illustration_3.svg';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Integrations',
  },
];

const headerLinks: ReactNode = (
  <EuiHeaderLinks>
    <EuiHeaderLink>Send feedback</EuiHeaderLink>

    <EuiButton minWidth={0} size="s">
      Settings
    </EuiButton>
  </EuiHeaderLinks>
);

const Cards: ReactNode[] = [];

for (let i = 0; i < 20; i++) {
  Cards.push(
    <EuiFlexItem>
      <EuiKeyPadMenuItem
        label="Elastic"
        betaBadgeLabel="Installed"
        betaBadgeIconType="check">
        <EuiIcon type="logoElastic" size="xl" />
      </EuiKeyPadMenuItem>
    </EuiFlexItem>
  );
}

export default () => (
  <ManagementPage
    pageTitle="Integrations"
    sideNavItem="Integrations"
    headerLinks={headerLinks}
    breadcrumbs={breadcrumbs}
    pageHeader={{
      pageTitle: 'Integrations',
      description: 'Browse integrations for popular apps and services.',
      alignItems: 'center',
      rightSideItems: [
        <img
          className="pageScreenshot pageScreenshot--responsive"
          // style={{ marginBottom: -32 }}
          alt=""
          aria-hidden={true}
          width={240}
          src={illustrationImg}
        />,
      ],
    }}>
    <EuiFieldSearch fullWidth placeholder="Search integrations..." />
    <EuiSpacer size="xxl" />
    <EuiFlexGroup gutterSize="xl">
      <EuiFlexItem grow={false}>
        <div>
          <EuiTitle size="xs">
            <h2>Installed</h2>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiFacetGroup>
            <EuiFacetButton isSelected quantity={20}>
              All
            </EuiFacetButton>
            <EuiFacetButton quantity={0}>Updates available</EuiFacetButton>
          </EuiFacetGroup>
          <EuiHorizontalRule margin="xl" />
          <EuiTitle size="xs">
            <h2>Available</h2>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiFacetGroup>
            <EuiFacetButton quantity={35}>All</EuiFacetButton>
            <EuiFacetButton quantity={1}>Azure</EuiFacetButton>
            <EuiFacetButton quantity={2}>Cloud</EuiFacetButton>
            <EuiFacetButton quantity={1}>Config management</EuiFacetButton>
            <EuiFacetButton quantity={1}>Containers</EuiFacetButton>
            <EuiFacetButton quantity={1}>Custom</EuiFacetButton>
            <EuiFacetButton quantity={6}>Datastore</EuiFacetButton>
            <EuiFacetButton quantity={1}>Kubernetes</EuiFacetButton>
            <EuiFacetButton quantity={3}>Message Queue</EuiFacetButton>
            <EuiFacetButton quantity={2}>Monitoring</EuiFacetButton>
            <EuiFacetButton quantity={6}>Network 1</EuiFacetButton>
            <EuiFacetButton quantity={4}>OS & System</EuiFacetButton>
            <EuiFacetButton quantity={33}>Security</EuiFacetButton>
            <EuiFacetButton quantity={5}>Web</EuiFacetButton>
          </EuiFacetGroup>
        </div>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFlexGrid style={{ padding: 24 }} columns={4} gutterSize="xl">
          {Cards}
        </EuiFlexGrid>
      </EuiFlexItem>
    </EuiFlexGroup>
  </ManagementPage>
);
