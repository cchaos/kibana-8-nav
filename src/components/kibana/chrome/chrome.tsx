import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { CommonProps, useIsWithinBreakpoints } from '@elastic/eui';
import { KibanaHeaderProps, kibanaHeaderSections } from './header';
import { EuiPageLayout } from '../../eui/page/page_layout';
import { consoleHeaderSections } from '../../console/header/header';

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
  saved,
}) => {
  // TO FIX: This doesn't seem to work on load
  const isMobile = useIsWithinBreakpoints(['xs', 's']);
  return (
    <EuiPageLayout
      headers={[
        {
          sections: consoleHeaderSections(true, isMobile),
          theme: 'dark',
          position: 'sticky',
        },
        {
          sections: kibanaHeaderSections(breadcrumbs, headerLinks, saved),
          position: 'sticky',
        },
      ]}
      fullHeight={fullHeight}>
      <Helmet>
        <title>{pageTitle} | Kibana 8 Prototype</title>
      </Helmet>

      {children}
    </EuiPageLayout>
  );
};
