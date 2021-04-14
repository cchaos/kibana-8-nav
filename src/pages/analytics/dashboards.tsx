import React, { useContext, useEffect } from 'react';
import { Link, navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiSpacer,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFacetButton,
  EuiFacetGroup,
  EuiIcon,
  EuiTitle,
  EuiPanel,
  EuiPagination,
  EuiButtonEmpty,
} from '@elastic/eui';

import { KibanaPage } from '../../components/kibana/chrome/page/page';
import {
  KibanaPageHeaderPrimaryAddButton,
  KibanaPageHeaderProps,
} from '../../components/kibana/chrome/page/page_header';
import { KibanaChromeContext } from '../../components/kibana/layout';

// @ts-ignore
import dashboardImg from '../../images/Dashboard - Listing.png';

const PAGE_TITLE = 'Dashboards';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    onClick: () => {
      navigate('analytics/overview');
    },
  },
  {
    text: PAGE_TITLE,
  },
];

const pageHeader: KibanaPageHeaderProps = {
  pageTitle: PAGE_TITLE,
  rightSideItems: [
    <KibanaPageHeaderPrimaryAddButton
      onClick={() => navigate('analytics/dashboards/new')}>
      Add dashboard
    </KibanaPageHeaderPrimaryAddButton>,
  ],
};

export default () => {
  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs,
      pageTitle: PAGE_TITLE,
    });
  }, [breadcrumbs]);

  return (
    <KibanaPage
      pageBodyProps={{ paddingSize: 'none' }}
      pageContentProps={{ color: 'transparent', hasBorder: true }}
      pageHeader={pageHeader}>
      <EuiFieldSearch fullWidth placeholder="Search for by dashboard name..." />
      <EuiSpacer />
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiTitle size="xxs">
            <h3>Filter by tags</h3>
          </EuiTitle>
          <EuiFacetGroup gutterSize="none">
            <EuiFacetButton
              quantity={6}
              icon={<EuiIcon type="dot" color="secondary" />}>
              Tag 1
            </EuiFacetButton>
            <EuiFacetButton
              quantity={5}
              icon={<EuiIcon type="dot" color="warning" />}>
              Tag 2
            </EuiFacetButton>
            <EuiFacetButton
              quantity={2}
              icon={<EuiIcon type="dot" color="primary" />}>
              Tag 3
            </EuiFacetButton>
          </EuiFacetGroup>
        </EuiFlexItem>
        <EuiFlexItem grow={5}>
          <EuiPanel paddingSize="s">
            <Link
              className="pageScreenshot__TBD"
              to="/analytics/dashboards/logs-web-traffic">
              <img
                className="pageScreenshot pageScreenshot--responsive"
                alt="Dashboard listing page"
                width={1212}
                src={dashboardImg}
              />
            </Link>
          </EuiPanel>
          <EuiSpacer size="s" />
          <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiFlexGroup gutterSize="xs" alignItems="center">
                <EuiFlexItem>
                  <EuiButtonEmpty
                    size="s"
                    color="text"
                    iconType="arrowDown"
                    iconSide="right">
                    1 &mdash; 10
                  </EuiButtonEmpty>
                </EuiFlexItem>
                <EuiFlexItem>of 123</EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiPagination
                aria-label="Custom pagination example"
                pageCount={10}
                activePage={1}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </KibanaPage>
  );
};
