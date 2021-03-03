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
import { EuiSticky } from '../../eui';

export type CloudPageProps = EuiPageTemplateProps & {
  breadcrumbs?: EuiBreadcrumb[];
  pageTitle: string;
  sideNav?: ReactNode;
  bottomBar?: ReactNode;
};

export const CloudPage: FunctionComponent<CloudPageProps> = ({
  breadcrumbs,
  pageTitle,
  sideNav,
  bottomBar,
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

  const optionalBottomBar = bottomBar && (
    <EuiSticky
      style={{ marginBottom: -24 }}
      left={-24}
      right={-24}
      zIndex={999}
      className="euiBottomBar euiBottomBar--paddingSmall">
      {bottomBar}
    </EuiSticky>
  );

  return (
    <>
      <EuiPageTemplate className={className} pageSideBar={sideNav} {...rest}>
        {children}
        {optionalBottomBar}
      </EuiPageTemplate>
    </>
  );
};
