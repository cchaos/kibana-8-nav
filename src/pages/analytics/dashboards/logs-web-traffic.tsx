import React, { ReactNode, useContext, useEffect } from 'react';
import { navigate } from 'gatsby';

import {
  EuiBreadcrumb,
  EuiButton,
  EuiHeaderLink,
  EuiHeaderLinks,
} from '@elastic/eui';
// @ts-ignore
import logsDashboardImg from '../../../images/[Logs] Web Traffic.png';
import { KibanaChromeContext } from '../../../components/kibana/layout';
import { KibanaPage } from '../../../components/kibana/chrome/page/page';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Analytics',
    onClick: () => {
      navigate('analytics/overview');
    },
  },
  {
    text: 'Dashboards',
    onClick: () => {
      navigate('analytics/dashboards');
    },
  },
  {
    text: '[Logs] Web Traffic',
  },
];

const headerLinks: ReactNode = (
  <EuiHeaderLinks>
    <EuiHeaderLink>Full screen</EuiHeaderLink>

    <EuiHeaderLink>Share</EuiHeaderLink>

    <EuiHeaderLink>Clone</EuiHeaderLink>

    <EuiButton
      iconType="pencil"
      style={{ minWidth: 80 }}
      size="s"
      color="secondary">
      Edit
    </EuiButton>
  </EuiHeaderLinks>
);

export default () => {
  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs,
      headerLinks,
      pageTitle: '[Logs] Web Traffic | Dashboards',
    });
  }, [breadcrumbs, headerLinks]);

  return (
    <KibanaPage restrictWidth={false} template="empty" globals={true}>
      <div className="pageScreenshot__TBD">
        <img
          className="pageScreenshot pageScreenshot--fullWidth"
          alt="[Logs] Web Traffic dashboard"
          width={1175}
          src={logsDashboardImg}
        />
      </div>
    </KibanaPage>
  );
};
