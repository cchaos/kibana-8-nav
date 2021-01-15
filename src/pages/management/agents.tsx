import React, { ReactNode } from 'react';

import {
  EuiBreadcrumb,
  EuiButton,
  EuiText,
  EuiSpacer,
  EuiFlexItem,
  EuiPanel,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiTab,
  EuiTabs,
  EuiFieldSearch,
  EuiFilterButton,
  EuiFilterGroup,
  EuiFlexGroup,
  EuiStat,
} from '@elastic/eui';

import { ManagementPage } from '../../components/kibana/management/page';
// @ts-ignore
import tableImg from '../../images/Agents - table.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Agents',
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

export default () => {
  return (
    <ManagementPage
      pageTitle="Agents"
      sideNavItem="Agents"
      headerLinks={headerLinks}
      breadcrumbs={breadcrumbs}
      pageHeader={{
        alignItems: 'top',
        leftSideContent: (
          <>
            <EuiTabs display="condensed">
              <EuiTab isSelected>Agents</EuiTab>
              <EuiTab>Policies</EuiTab>
              <EuiTab>Enrollment tokens</EuiTab>
              <EuiTab>Data streams</EuiTab>
            </EuiTabs>
            <EuiSpacer />
            <EuiText color="subdued" size="s">
              <p>
                Manage and deploy policy updates to a group of agents of any
                size.
              </p>
            </EuiText>
          </>
        ),
        actionButtons: [
          <EuiButton fill iconType="plusInCircle">
            Add agent
          </EuiButton>,
        ],
      }}>
      <EuiPanel hasShadow={false} color="subdued">
        <EuiFlexGroup justifyContent="spaceAround">
          <EuiFlexItem grow={false}>
            <EuiStat title="0" description="Agents" titleColor="subdued" />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiStat title="0" description="Online" titleColor="subdued" />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiStat title="0" description="Offline" titleColor="subdued" />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiStat title="0" description="Error" titleColor="subdued" />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
      <EuiSpacer />
      <EuiFlexGroup>
        <EuiFlexItem grow={3}>
          <EuiFieldSearch
            fullWidth
            placeholder="Search for by workpad name..."
          />
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiFilterGroup>
            <EuiFilterButton iconType="arrowDown" numFilters={5}>
              Filters
            </EuiFilterButton>
          </EuiFilterGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer />
      <div className="pageScreenshot__TBD">
        <img
          className="pageScreenshot pageScreenshot--responsive"
          alt="Blank table"
          width={1168}
          src={tableImg}
        />
      </div>
    </ManagementPage>
  );
};
