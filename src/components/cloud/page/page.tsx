import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';

import {
  EuiBreadcrumb,
  EuiPageTemplate,
  EuiPageTemplateProps,
} from '@elastic/eui';

import { CloudChromeContext } from '../layout';

export type CloudPageProps = EuiPageTemplateProps & {
  breadcrumbs?: EuiBreadcrumb[];
  pageTitle: string;
  sideNav?: ReactNode;
};

export const CloudPage: FunctionComponent<CloudPageProps> = ({
  breadcrumbs,
  pageTitle,
  sideNav,
  pageBodyProps = {},
  className,
  children,
  ...rest
}) => {
  const setHeaderItems = useContext(CloudChromeContext);

  useEffect(() => {
    setHeaderItems.setChrome({
      breadcrumbs,
      pageTitle,
    });
  }, [breadcrumbs]);

  return (
    <EuiPageTemplate
      className={className}
      pageSideBar={sideNav}
      pageBodyProps={pageBodyProps}
      {...rest}>
      {children}
    </EuiPageTemplate>
  );
};
