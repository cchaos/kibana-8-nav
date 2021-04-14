import React, { ReactNode } from 'react';
import { navigate } from 'gatsby';

import { EuiHeaderLink, EuiBreadcrumb } from '@elastic/eui';

import { ObservabilityPage } from '../../components/kibana/observability/page';

// @ts-ignore
import contentImg from '../../images/obs-service-map.svg';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'APM',
    onClick: () => {
      navigate('observability/services/all');
    },
  },
  {
    text: 'Service map',
  },
];

const headerLinks: ReactNode = <EuiHeaderLink>Alerts</EuiHeaderLink>;

export default () => {
  return (
    <ObservabilityPage
      globals={{ disabledSearch: true, placeholder: 'Search unavailable' }}
      solutionNavCollapsed={true}
      paddingSize="none"
      restrictWidth={false}
      pageContentProps={{ color: 'subdued' }}
      pageTitle="checkoutService"
      navItem="Service map"
      headerLinks={headerLinks}
      breadcrumbs={breadcrumbs}
      pageHeader={{
        paddingSize: 'l',
        pageTitle: 'Service map',
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
