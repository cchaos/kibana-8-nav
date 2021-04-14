import React, { FunctionComponent, ReactNode, useState } from 'react';

import {
  EuiButtonIcon,
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
} from '@elastic/eui';

import { KibanaGlobals } from '../globals';
import { EuiSuperDatePicker } from '../../../eui';
import { KibanaGlobalsProps } from '../globals/globals';
import classNames from 'classnames';

export type KibanaPageProps = EuiPageTemplateProps & {
  globals?: boolean | KibanaGlobalsProps;
  solutionNav?: ReactNode;
  solutionNavCollapsed?: boolean;
  resizableSidebar?: boolean;
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
  solutionNavCollapsed,
  children,
  bottomBar,
  restrictWidth = true,
  pageContentProps = {},
  ...rest
}) => {
  const isWindowSmallEnoughToCollapse = useIsWithinBreakpoints([
    'xs',
    's',
    'm',
    'l',
  ]);
  const [isSideNavCollapsed, setIsSideNavCollapsed] = useState(
    solutionNavCollapsed
  );

  if (pageHeader && pageHeader.time) {
    pageHeader.rightSideItems = pageHeader.rightSideItems || [];
    pageHeader.rightSideItems.unshift(<EuiSuperDatePicker />);
    pageHeader.responsive = 'reverse';
    pageHeader.rightSideGroupProps = { responsive: true };
    pageHeader.time = undefined;
  }

  const sideBarProps = {
    className: classNames(
      {
        'euiPageSidebar--collapsed':
          isSideNavCollapsed && isWindowSmallEnoughToCollapse,
      },
      rest.pageSideBarProps?.className
    ),
    ...rest.pageSideBarProps,
  };

  const collapsedButton = (
    <EuiButtonIcon
      iconType="menuRight"
      aria-label="open menu"
      onClick={() => setIsSideNavCollapsed((collapsed) => !collapsed)}
    />
  );

  const optionalSideBar =
    isSideNavCollapsed && isWindowSmallEnoughToCollapse
      ? collapsedButton
      : solutionNav;

  let optionalGlobals;
  if (typeof globals !== 'boolean') {
    optionalGlobals = <KibanaGlobals {...globals} />;
  } else if (globals === true) {
    optionalGlobals = <KibanaGlobals />;
  }

  if (template === 'empty') {
    return (
      // @ts-ignore TOOD FIX TYPE
      <EuiPageTemplate
        template="empty"
        restrictWidth={optionalGlobals ? false : restrictWidth}
        pageContentProps={pageContentProps}
        paddingSize={optionalGlobals ? 'none' : 'l'}
        pageSideBar={optionalSideBar}
        pageSideBarProps={sideBarProps}
        bottomBar={bottomBar}
        // pageSideBarProps={{ style: { minWidth: } }}
        pageHeader={pageHeader}
        {...rest}>
        {optionalGlobals}
        {children}
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
            {optionalSideBar && (
              <EuiPageSideBar {...sideBarProps} sticky>
                {optionalSideBar}
              </EuiPageSideBar>
            )}

            <EuiPageBody panelled paddingSize="none" restrictWidth={false}>
              {optionalGlobals}
              <EuiPageBody paddingSize={rest.paddingSize || 'l'}>
                <EuiPageHeader bottomBorder={true} {...pageHeader} />

                <EuiPageContent
                  {...pageContentProps}
                  hasBorder={false}
                  hasShadow={false}
                  paddingSize="none"
                  color="transparent"
                  borderRadius="none">
                  <EuiPageContentBody restrictWidth={false}>
                    {children}
                  </EuiPageContentBody>
                </EuiPageContent>
                {/* {optionalBottomBar} */}
              </EuiPageBody>
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
    // @ts-ignore TOOD FIX TYPE
    <EuiPageTemplate
      template={template}
      pageContentProps={pageContentProps}
      pageSideBar={optionalSideBar}
      pageSideBarProps={sideBarProps}
      pageHeader={pageHeader}
      bottomBar={bottomBar}
      restrictWidth={restrictWidth}
      {...rest}>
      {emptyPrompt}
      {children}
    </EuiPageTemplate>
  );
};
