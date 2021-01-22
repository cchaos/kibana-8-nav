import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { CommonProps } from '@elastic/eui';
import { EuiDocsHeader } from './header';
import { EuiPageLayout } from '../../../eui/page/page_layout';

export interface EuiDocsChrome extends CommonProps {
  pageTitle?: string;
}

export type EuiDocsChromeProps = EuiDocsChrome & {
  children?: ReactNode;
};

export const EuiDocsChrome: React.FunctionComponent<EuiDocsChromeProps> = ({
  children,
}) => {
  return (
    <EuiPageLayout>
      <Helmet>
        <title>EUI Docs</title>
      </Helmet>

      <EuiDocsHeader />

      {children}
    </EuiPageLayout>
  );
};
