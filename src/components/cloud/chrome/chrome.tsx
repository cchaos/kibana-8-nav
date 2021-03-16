import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { CommonProps, useIsWithinBreakpoints } from '@elastic/eui';
import { CloudHeaderProps, cloudHeaderSections } from './header';
import { EuiPageLayout } from '../../eui/page/page_layout';
import { consoleHeaderSections } from '../../console/header/header';

export interface CloudChrome extends CloudHeaderProps, CommonProps {
  pageTitle?: string;
}

export type CloudChromeProps = CloudChrome & {
  children?: ReactNode;
};

export const CloudChrome: React.FunctionComponent<CloudChromeProps> = ({
  children,
  pageTitle,
  breadcrumbs,
}) => {
  // TO FIX: This doesn't seem to work on load
  const isMobile = useIsWithinBreakpoints(['xs', 's']);

  return (
    <EuiPageLayout
      headers={[
        {
          sections: consoleHeaderSections(false, isMobile),
          theme: 'dark',
          position: 'sticky',
        },
        { sections: cloudHeaderSections(breadcrumbs), position: 'sticky' },
      ]}>
      <Helmet>
        <title>{pageTitle} | Cloud 8 Prototype</title>
      </Helmet>

      {children}
    </EuiPageLayout>
  );
};
