import React, { ReactNode, useContext, useEffect } from 'react';

import {
  EuiBreadcrumb,
  EuiSpacer,
  EuiFlexItem,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFacetButton,
  EuiFacetGroup,
  EuiFlexGrid,
  EuiTitle,
  EuiIcon,
  EuiHorizontalRule,
  EuiKeyPadMenuItem,
  EuiCard,
  EuiSplitPanel,
} from '@elastic/eui';

import { KibanaPage } from '../../components/kibana/chrome/page/page';
import { KibanaChromeContext } from '../../components/kibana/layout';

// @ts-ignore
import illustrationImg from '../../images/Illustration_3.svg';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Integrations',
  },
];

const Cards: ReactNode[] = [];

for (let i = 0; i < 20; i++) {
  Cards.push(
    <EuiFlexItem grow={false}>
      <EuiKeyPadMenuItem
        label="Elastic"
        betaBadgeLabel="Installed"
        betaBadgeIconType="check">
        <EuiIcon type="logoElastic" size="xl" />
      </EuiKeyPadMenuItem>
    </EuiFlexItem>
  );
}

export default () => {
  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs,
      pageTitle: 'Dev tools | Console',
    });
  }, [breadcrumbs]);

  return (
    <KibanaPage
      pageBodyProps={{ panelled: true, paddingSize: 'none' }}
      pageContentProps={{ color: 'subdued', hasBorder: true }}
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
      <EuiTitle size="xs">
        <h2>Suggestions for you</h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiFlexGroup gutterSize="xl">
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon type="logoAWS" size="xl" />}
            title="AWS EC2"
            description="Example of a card’s description. Stick to one or two sentences."
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon type="logoAWS" size="xl" />}
            title="AWS EC2"
            description="Example of a card’s description. Stick to one or two sentences."
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon type="logoAWS" size="xl" />}
            title="AWS EC2"
            description="Example of a card’s description. Stick to one or two sentences."
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon type="logoAWS" size="xl" />}
            title="AWS EC2"
            description="Example of a card’s description. Stick to one or two sentences."
          />
        </EuiFlexItem>
      </EuiFlexGroup>
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
            <EuiFacetGroup gutterSize="none">
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
          <EuiSplitPanel.Outer>
            <EuiSplitPanel.Inner color="subdued">
              <EuiFieldSearch fullWidth placeholder="Search integrations..." />
            </EuiSplitPanel.Inner>
            <EuiHorizontalRule margin="none" />
            <EuiSplitPanel.Inner>
              <EuiFlexGrid
                style={{ padding: 24, justifyContent: 'space-between' }}
                columns={4}
                gutterSize="xl">
                {Cards}
              </EuiFlexGrid>
            </EuiSplitPanel.Inner>
          </EuiSplitPanel.Outer>
        </EuiFlexItem>
      </EuiFlexGroup>
    </KibanaPage>
  );
};
