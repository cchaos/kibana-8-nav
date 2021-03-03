import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { CommonProps } from '@elastic/eui';
import { KibanaHeader, KibanaHeaderProps } from './header';
import { EuiPageLayout } from '../../eui/page/page_layout';

export interface KibanaChrome extends KibanaHeaderProps, CommonProps {
  pageTitle?: string;
  fullHeight?: boolean;
}

export type KibanaChromeProps = KibanaChrome & {
  children?: ReactNode;
};

export const KibanaChrome: React.FunctionComponent<KibanaChromeProps> = ({
  fullHeight,
  children,
  pageTitle,
  breadcrumbs,
  headerLinks,
}) => {
  return (
    <EuiPageLayout numberOfStickyHeaders={2} fullHeight={fullHeight}>
      <Helmet>
        <title>{pageTitle} | Kibana 8 Prototype</title>
      </Helmet>

      <KibanaHeader breadcrumbs={breadcrumbs} headerLinks={headerLinks} />

      {children}
    </EuiPageLayout>
  );
};
