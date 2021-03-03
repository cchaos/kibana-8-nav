import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { CommonProps } from '@elastic/eui';
import { CloudHeader, CloudHeaderProps } from './header';
import { EuiPageLayout } from '../../eui/page/page_layout';

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
  return (
    <EuiPageLayout numberOfStickyHeaders={2}>
      <Helmet>
        <title>{pageTitle} | Cloud 8 Prototype</title>
      </Helmet>

      <CloudHeader breadcrumbs={breadcrumbs} />

      {children}
    </EuiPageLayout>
  );
};
