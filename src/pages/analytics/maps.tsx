import React, { useContext, useEffect } from 'react';
import { navigate } from 'gatsby';

import { EuiBreadcrumb, EuiSpacer, EuiFieldSearch } from '@elastic/eui';
// @ts-ignore
import dashboardImg from '../../images/Dashboard - Listing.png';
import { KibanaPage } from '../../components/kibana/chrome/page/page';
import { KibanaPageHeaderPrimaryAddButton } from '../../components/kibana/chrome/page/page_header';
import { KibanaChromeContext } from '../../components/kibana/layout';

const PAGE_TITLE = 'Maps';

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
      pageHeader={{
        pageTitle: PAGE_TITLE,
        rightSideItems: [
          <KibanaPageHeaderPrimaryAddButton>
            Add map
          </KibanaPageHeaderPrimaryAddButton>,
        ],
      }}>
      <EuiFieldSearch fullWidth placeholder="Search for a by map name..." />
      <EuiSpacer />
      <div className="pageScreenshot__TBD">
        <img
          className="pageScreenshot pageScreenshot--responsive"
          alt="Dashboard listing page"
          width={1212}
          src={dashboardImg}
        />
      </div>
    </KibanaPage>
  );
};
