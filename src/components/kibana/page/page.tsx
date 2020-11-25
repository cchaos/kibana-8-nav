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
import { KibanaPageHeader, KibanaPageHeaderProps } from './page_header';
import { KibanaChromeContext } from '../../layout';
import Helmet from 'react-helmet';
import classNames from 'classnames';

export type KibanaPageProps = {
  breadcrumbs?: EuiBreadcrumb[];
  headerLinks?: ReactNode;
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

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  breadcrumbs,
  headerLinks,
  solutionNav,
  children,
  pageTitle,
  pageHeader,
  pageProps,
  pageBodyProps,
  pageSideBarProps,
  fullHeight,
}) => {
  const setHeaderItems = useContext(KibanaChromeContext);

  useEffect(() => {
    setHeaderItems.setChrome({
      breadcrumbs,
      headerLinks,
    });
  }, [breadcrumbs, headerLinks]);

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
      <EuiPage {...pageProps} className={pageClasses}>
        {optionalSideBar}
        <EuiPageBody {...pageBodyProps}>
          {optionalPageHeader}
          {children}
        </EuiPageBody>
      </EuiPage>
    </>
  );
};
