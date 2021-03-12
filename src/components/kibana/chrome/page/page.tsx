import React, { FunctionComponent, ReactNode, useRef } from 'react';

import {
  EuiEmptyPrompt,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderProps,
  EuiPageSideBar,
  EuiPageTemplate,
  EuiPageTemplateProps,
  useIsWithinBreakpoints,
  useResizeObserver,
} from '@elastic/eui';

import { KibanaGlobals } from '../globals';
import { EuiSuperDatePicker } from '../../../eui';

export type KibanaPageProps = EuiPageTemplateProps & {
  globals?: boolean;
  solutionNav?: ReactNode;
  resizableSidebar?: boolean;
  bottomBar?: ReactNode;
  pageHeader?: EuiPageHeaderProps & {
    /**
     * Time will wipe out any rightSideItems / rightSideContent
     */
    time?: boolean;
  };
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  template,
  pageHeader,
  globals = false,
  solutionNav,
  children,
  bottomBar,
  restrictWidth = true,
  pageContentProps = {},
  ...rest
}) => {
  const isMobile = useIsWithinBreakpoints(['xs', 's']);

  if (pageHeader && pageHeader.time) {
    pageHeader.rightSideItems = [<EuiSuperDatePicker />];
    pageHeader.responsive = 'reverse';
    pageHeader.rightSideGroupProps = { responsive: true };
    pageHeader.time = undefined;
  }

  const optionalSideBar = solutionNav;

  const optionalGlobals = globals && <KibanaGlobals />;

  const resizeRef = useRef();
  const dimensions = useResizeObserver(resizeRef.current || null);

  let optionalBottomBar;
  if (bottomBar) {
    optionalBottomBar = (
      <div
        ref={resizeRef}
        className="euiBottomBar euiBottomBar--paddingSmall"
        style={{ left: isMobile || !solutionNav ? 0 : 240 }}>
        {bottomBar}
      </div>
    );

    pageContentProps.style = {
      paddingBottom: dimensions.height + 24,
      ...pageContentProps.style,
    };
  }

  if (template === 'empty') {
    return (
      <EuiPageTemplate
        template="empty"
        restrictWidth={optionalGlobals ? false : restrictWidth}
        pageContentProps={pageContentProps}
        paddingSize={optionalGlobals ? 'none' : 'l'}
        pageSideBar={optionalSideBar}
        pageHeader={pageHeader}
        {...rest}>
        {optionalGlobals}
        {children}
        {optionalBottomBar}
      </EuiPageTemplate>
    );
  }

  if (optionalGlobals) {
    switch (template) {
      case 'centeredBody':
        return (
          <EuiPage grow={true} paddingSize={optionalGlobals ? 'none' : 'l'}>
            <EuiPageBody>
              {optionalGlobals}
              <EuiPageContent
                {...pageContentProps}
                verticalPosition="center"
                horizontalPosition="center"
                paddingSize="none">
                <EuiEmptyPrompt
                  iconType={pageHeader?.iconType}
                  title={<h2>{pageHeader?.pageTitle}</h2>}
                  body={<p>{pageHeader?.description}</p>}
                  actions={pageHeader?.rightSideItems}
                />
              </EuiPageContent>
            </EuiPageBody>
          </EuiPage>
        );

      default:
        return (
          <EuiPage paddingSize="none">
            <EuiPageSideBar sticky>{optionalSideBar}</EuiPageSideBar>

            <EuiPageBody panelled paddingSize="none" restrictWidth={false}>
              {optionalGlobals}
              <EuiPageHeader restrictWidth={restrictWidth} {...pageHeader} />

              <EuiPageContent
                {...pageContentProps}
                hasBorder={false}
                hasShadow={false}
                paddingSize="none"
                color="transparent"
                borderRadius="none">
                <EuiPageContentBody restrictWidth={restrictWidth}>
                  {children}
                  {optionalBottomBar}
                </EuiPageContentBody>
              </EuiPageContent>
            </EuiPageBody>
          </EuiPage>
        );
    }
  }

  /**
   * An easy way to create the right content for empty pages
   */
  let emptyPrompt;
  if (template === 'centeredBody' && pageHeader) {
    emptyPrompt = (
      <EuiEmptyPrompt
        iconType={pageHeader.iconType}
        title={<h2>{pageHeader.pageTitle}</h2>}
        body={<p>{pageHeader.description}</p>}
        actions={pageHeader.rightSideItems}
      />
    );
    pageHeader = undefined;
  }

  /**
   * When the globals don't exist, can just use the EuiPageTemplate
   */
  return (
    <EuiPageTemplate
      template={template}
      pageContentProps={pageContentProps}
      pageSideBar={optionalSideBar}
      pageHeader={pageHeader}
      restrictWidth={restrictWidth}
      {...rest}>
      {emptyPrompt}
      {children}
      {optionalBottomBar}
    </EuiPageTemplate>
  );
};
