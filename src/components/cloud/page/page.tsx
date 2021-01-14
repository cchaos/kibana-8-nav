import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import {
  EuiBreadcrumb,
  EuiPage,
  EuiPageBody,
  EuiPageBodyProps,
  EuiPageProps,
  EuiPageSideBar,
  EuiPageSideBarProps,
} from '@elastic/eui';
import {
  KibanaPageHeader,
  KibanaPageHeaderProps,
} from '../../kibana/page/page_header';
import { CloudChromeContext } from '../layout';
import Helmet from 'react-helmet';
import classNames from 'classnames';

export type CloudPageProps = {
  breadcrumbs?: EuiBreadcrumb[];
  pageTitle: string;
  solutionNav?: ReactNode;
  pageHeader?: KibanaPageHeaderProps;
  pageProps?: EuiPageProps;
  pageBodyProps?: EuiPageBodyProps;
  pageSideBarProps?: EuiPageSideBarProps;
  /**
   * Only allows the page to be the full height of the window.
   * Pages then must control their own internal scroll.
   */
  fullHeight?: boolean;
};

export const CloudPage: FunctionComponent<CloudPageProps> = ({
  breadcrumbs,
  solutionNav,
  children,
  pageTitle,
  pageHeader,
  pageProps,
  pageBodyProps,
  pageSideBarProps,
  fullHeight,
}) => {
  const setHeaderItems = useContext(CloudChromeContext);

  useEffect(() => {
    setHeaderItems.setChrome({
      breadcrumbs,
    });
  }, [breadcrumbs]);

  const optionalSideBar = solutionNav ? (
    <EuiPageSideBar {...pageSideBarProps}>{solutionNav}</EuiPageSideBar>
  ) : undefined;

  const optionalPageHeader = pageHeader && <KibanaPageHeader {...pageHeader} />;

  const pageClasses = classNames(
    'kbnPage',
    {
      'kbnPage--fullHeight': fullHeight,
    },
    pageProps ? pageProps.className : ''
  );

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Kibana 8 Prototype</title>
      </Helmet>
      <EuiPage {...pageProps} paddingSize="none" className={pageClasses}>
        {optionalSideBar}
        <EuiPageBody {...pageBodyProps}>
          {optionalPageHeader}
          {children}
        </EuiPageBody>
      </EuiPage>
    </>
  );
};