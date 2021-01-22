import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import {
  EuiPageSideBarProps,
  EuiPageContent,
  EuiPageContentProps,
  EuiPageSideBar,
} from '@elastic/eui';
import { EuiPage, EuiPageProps } from '../../../../eui/page/page_shim';
import {
  EuiPageBody,
  EuiPageBodyProps,
} from '../../../../eui/page/page_body_shim';
import {
  EuiPageContentBody,
  EuiPageContentBodyProps,
} from '../../../../eui/page/page_body_content_shim';
import { EuiSticky } from '../../../../eui';

import ThemeContext from '../../../../../themes/ThemeContext';

import { EuiDocsPageHeader, EuiDocsPageHeaderProps } from './page_header';
import { EuiDocsNav } from '../nav';

export type EuiDocsPageProps = EuiPageProps & {
  pageHeader?: EuiDocsPageHeaderProps;
  pageBodyProps?: EuiPageBodyProps;
  pageContentProps?: EuiPageContentProps;
  pageContentBodyProps?: EuiPageContentBodyProps;
  pageSideBarProps?: EuiPageSideBarProps;
  restrictWidth?: boolean;
  centered?: boolean;
  panelled?: boolean;
  bottomBar?: ReactNode;
  currentUrl: string;
};

export const EuiDocsPage: FunctionComponent<EuiDocsPageProps> = ({
  children,
  pageHeader,
  pageBodyProps,
  pageContentProps,
  pageContentBodyProps,
  pageSideBarProps,
  restrictWidth = true,
  centered = false,
  panelled,
  bottomBar,
  className,
  currentUrl = 'home',
  ...rest
}) => {
  const context = React.useContext(ThemeContext);
  const isK8Theme = context.theme.includes('light');

  const optionalSideBar = (
    <EuiPageSideBar
      style={{ position: 'sticky', top: 48, height: 'calc(100vh - 48px)' }}
      {...pageSideBarProps}>
      <EuiDocsNav currentUrl={currentUrl} />
    </EuiPageSideBar>
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

  let optionalPageHeader;
  if (pageHeader && isK8Theme) {
    optionalPageHeader = (
      <EuiDocsPageHeader restrictWidth={restrictWidth} {...pageHeader} />
    );
  } else if (pageHeader) {
    optionalPageHeader = <EuiDocsPageHeader {...pageHeader} />;
  }

  let pageBody: ReactNode;
  if (isK8Theme) {
    panelled = panelled === undefined ? false : panelled;

    pageBody = (
      <EuiPageBody panelled={Boolean(panelled !== true)} {...pageBodyProps}>
        {optionalPageHeader}
        <EuiPageContent
          borderRadius={!panelled ? 'none' : 'm'}
          hasShadow={!panelled ? false : true}
          verticalPosition={centered ? 'center' : undefined}
          horizontalPosition={centered ? 'center' : undefined}
          {...pageContentProps}>
          <EuiPageContentBody
            restrictWidth={restrictWidth}
            {...pageContentBodyProps}>
            {children}
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    );
  } else {
    pageBody = (
      <EuiPageBody {...pageBodyProps} restrictWidth={restrictWidth}>
        {optionalPageHeader}
        {/* TODO: Allow EuiPageContent to restrictWidth */}
        <EuiPageContent
          verticalPosition={centered ? 'center' : undefined}
          horizontalPosition={centered ? 'center' : undefined}
          {...pageContentProps}>
          <EuiPageContentBody {...pageContentBodyProps}>
            {children}
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    );
  }

  const shouldPageRestrictWidth = isK8Theme ? false : restrictWidth;
  const pagePaddingSize = isK8Theme ? 'none' : undefined;

  const pageClasses = classNames('euiDocsPage', className);

  return (
    <>
      <EuiPage
        grow={true}
        paddingSize={pagePaddingSize}
        restrictWidth={shouldPageRestrictWidth}
        {...rest}
        className={pageClasses}>
        {optionalSideBar}
        {pageBody}
      </EuiPage>
      {optionalBottomBar}
    </>
  );
};
