import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';

import {
  CommonProps,
  EuiBreadcrumb,
  EuiPageContent,
  EuiPageContentProps,
  EuiPageSideBar,
  EuiPageSideBarProps,
} from '@elastic/eui';
import {
  EuiPageHeaderProps,
  EuiPageHeader,
} from '../../eui/page/page_header_shim';

import { CloudChromeContext } from '../layout';
import { EuiPage, EuiPageProps } from '../../eui/page/page_shim';
import { EuiPageBodyProps } from '../../eui/page/page_body_shim';
import {
  EuiPageContentBody,
  EuiPageContentBodyProps,
} from '../../eui/page/page_body_content_shim';
import { EuiSticky } from '../../eui';

export type CloudPageProps = CommonProps & {
  breadcrumbs?: EuiBreadcrumb[];
  pageTitle: string;
  sideNav?: ReactNode;
  pageHeader?: EuiPageHeaderProps;
  pageProps?: EuiPageProps;
  pageBodyProps?: EuiPageBodyProps;
  pageContentProps?: EuiPageContentProps;
  pageContentBodyProps?: EuiPageContentBodyProps;
  pageSideBarProps?: EuiPageSideBarProps;
  bottomBar?: ReactNode;
  restrictWidth?: boolean;
  hasPageContent?: boolean;
};

export const CloudPage: FunctionComponent<CloudPageProps> = ({
  breadcrumbs,
  sideNav,
  children,
  pageTitle,
  pageHeader,
  pageProps,
  pageContentProps,
  pageContentBodyProps,
  pageSideBarProps,
  bottomBar,
  restrictWidth = true,
  hasPageContent = true,
  className,
}) => {
  const setHeaderItems = useContext(CloudChromeContext);

  useEffect(() => {
    setHeaderItems.setChrome({
      breadcrumbs,
      pageTitle,
    });
  }, [breadcrumbs]);

  const optionalSideBar = sideNav ? (
    <EuiPageSideBar {...pageSideBarProps}>{sideNav}</EuiPageSideBar>
  ) : undefined;

  const optionalPageHeader = pageHeader && (
    <EuiPageHeader restrictWidth={restrictWidth} {...pageHeader} />
  );

  const optionalBottomBar = bottomBar && (
    <EuiSticky
      bottom={0}
      left={optionalSideBar ? 192 : 0}
      zIndex={999}
      className="euiBottomBar euiBottomBar--paddingSmall">
      {bottomBar}
    </EuiSticky>
  );

  const pageContent = hasPageContent ? (
    <EuiPageContent borderRadius={'none'} {...pageContentProps}>
      {optionalPageHeader}
      <EuiPageContentBody
        restrictWidth={restrictWidth}
        {...pageContentBodyProps}>
        {children}
      </EuiPageContentBody>
    </EuiPageContent>
  ) : (
    children
  );

  return (
    <>
      <EuiPage
        grow={true}
        paddingSize="none"
        {...pageProps}
        className={className}>
        {optionalSideBar}
        {pageContent}
      </EuiPage>
      {optionalBottomBar}
    </>
  );
};
