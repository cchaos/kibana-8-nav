import React, { ReactNode, useContext, useEffect } from 'react';

import {
  EuiBreadcrumb,
  EuiButton,
  EuiSpacer,
  EuiFlexItem,
  EuiPanel,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiFieldSearch,
  EuiFilterButton,
  EuiFilterGroup,
  EuiFlexGroup,
  EuiStat,
  EuiBetaBadge,
} from '@elastic/eui';

import { KibanaPage } from '../../components/kibana/chrome/page/page';
import { KibanaChromeContext } from '../../components/kibana/layout';

// @ts-ignore
import tableImg from '../../images/Agents - table.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Fleet',
    href: '#',
  },
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
  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs,
      pageTitle: 'Dev tools | Console',
      headerLinks: headerLinks,
    });
  }, [breadcrumbs, headerLinks]);

  return (
    <KibanaPage
      pageHeader={{
        pageTitle: (
          <>
            Fleet <EuiBetaBadge label="Beta" />
          </>
        ),
        tabs: [
          { label: 'Agents', isSelected: true },
          { label: 'Agent Policies' },
          { label: 'Enrollment tokens' },
          { label: 'Datastreams' },
        ],
        description: 'Centralized management for Elastic Agents',
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
        <EuiFlexItem grow={false}>
          <EuiButton iconType="plusInCircleFilled" fill>
            Create agent policy
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer />
      <div className="pageScreenshot__TBD">
        <img
          className="pageScreenshot pageScreenshot--fullWidth"
          alt="Blank table"
          width={1168}
          src={tableImg}
        />
      </div>
    </KibanaPage>
  );
};
