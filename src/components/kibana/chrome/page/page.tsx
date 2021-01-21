import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import {
  EuiPageSideBarProps,
  EuiResizableContainer,
  EuiPageContent,
  EuiPageContentProps,
  EuiPageSideBar,
} from '@elastic/eui';
import { EuiPage, EuiPageProps } from '../../../eui/page/page_shim';
import {
  EuiPageBody,
  EuiPageBodyProps,
} from '../../../eui/page/page_body_shim';
import {
  EuiPageContentBody,
  EuiPageContentBodyProps,
} from '../../../eui/page/page_body_content_shim';

import ThemeContext from '../../../../themes/ThemeContext';

import { KibanaPageHeader, KibanaPageHeaderProps } from './page_header';
import { KibanaGlobals } from '../globals';
import { EuiSticky } from '../../../eui';

export type KibanaPageProps = EuiPageProps & {
  solutionNav?: ReactNode;
  pageHeader?: KibanaPageHeaderProps;
  pageBodyProps?: EuiPageBodyProps;
  pageContentProps?: EuiPageContentProps;
  pageContentBodyProps?: EuiPageContentBodyProps;
  pageSideBarProps?: EuiPageSideBarProps;
  restrictWidth?: boolean;
  resizableSidebar?: boolean;
  centered?: boolean;
  panelled?: boolean;
  globals?: boolean;
  bottomBar?: ReactNode;
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  solutionNav,
  children,
  pageHeader,
  pageBodyProps,
  pageContentProps,
  pageContentBodyProps,
  pageSideBarProps,
  restrictWidth = true,
  resizableSidebar = false,
  centered = false,
  panelled,
  globals = false,
  bottomBar,
  className,
  ...rest
}) => {
  const context = React.useContext(ThemeContext);
  const isK8Theme = context.theme.includes('light');

  const optionalSideBar = solutionNav ? (
    <EuiPageSideBar {...pageSideBarProps}>{solutionNav}</EuiPageSideBar>
  ) : undefined;

  const optionalGlobals = globals && <KibanaGlobals />;

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
      <KibanaPageHeader restrictWidth={restrictWidth} {...pageHeader} />
    );
  } else if (pageHeader) {
    optionalPageHeader = <KibanaPageHeader {...pageHeader} />;
  }

  let pageBody: ReactNode;
  if (isK8Theme) {
    panelled = panelled === undefined ? false : panelled;

    pageBody = (
      <EuiPageBody
        panelled={Boolean(panelled !== true && solutionNav)}
        {...pageBodyProps}>
        {Boolean(optionalSideBar) && optionalGlobals}
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
        {Boolean(optionalSideBar) && optionalGlobals}
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

  const shouldPageRestrictWidth = context.theme.includes('light')
    ? false
    : !solutionNav && restrictWidth;
  const pagePaddingSize = context.theme.includes('light') ? 'none' : undefined;

  const pageClasses = classNames('kbnPage', className);

  return resizableSidebar ? (
    <>
      {Boolean(!optionalSideBar) && optionalGlobals}
      <EuiResizableContainer style={{ flexGrow: 1 }}>
        {(EuiResizablePanel, EuiResizableButton) => (
          <EuiPage
            paddingSize={pagePaddingSize}
            {...rest}
            className={pageClasses}>
            <EuiResizablePanel
              mode={[
                'collapsible',
                {
                  position: 'top',
                },
              ]}
              initialSize={17}
              // TODO: Fix: miSize isn't respected on page load
              minSize={'60px'}
              // @ts-ignore TODO: Allow for maxSize
              // Also TODO: Allow all Size follows take a percentage or string value
              // maxSize="300px"
              paddingSize="none"
              className="euiPageSideBar">
              {optionalSideBar}
            </EuiResizablePanel>

            <EuiResizableButton className="kbnPage__resizer" />

            <EuiResizablePanel
              mode="main"
              initialSize={83}
              minSize="600px"
              paddingSize="none">
              {pageBody}
            </EuiResizablePanel>
          </EuiPage>
        )}
      </EuiResizableContainer>
      {optionalBottomBar}
    </>
  ) : (
    <>
      {Boolean(!optionalSideBar) && optionalGlobals}
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
