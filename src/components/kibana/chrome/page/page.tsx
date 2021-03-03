import React, { FunctionComponent, ReactNode } from 'react';

import {
  EuiEmptyPrompt,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderProps,
  EuiPageTemplate,
  EuiPageTemplateProps,
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
  ...rest
}) => {
  const pageHeaderProps: Partial<EuiPageHeaderProps> = {};

  if (pageHeader && pageHeader.time) {
    pageHeaderProps.rightSideItems = [<EuiSuperDatePicker />];
    pageHeaderProps.responsive = 'reverse';
    pageHeaderProps.rightSideGroupProps = { responsive: true };
  }

  const optionalSideBar = solutionNav ? (
    <div style={{ padding: 24 }}>{solutionNav}</div>
  ) : undefined;

  const optionalGlobals = globals && <KibanaGlobals />;

  if (template === 'empty') {
    return (
      <EuiPageTemplate
        template="empty"
        restrictWidth={optionalGlobals ? false : restrictWidth}
        paddingSize={optionalGlobals ? 'none' : 'l'}
        pageSideBar={solutionNav}
        pageHeader={pageHeader}
        {...rest}>
        {optionalGlobals}
        {children}
      </EuiPageTemplate>
    );
  }

  if (solutionNav) {
    switch (template) {
      case 'centeredContent':
        return (
          <EuiPageTemplate
            template="centeredContent"
            pageSideBar={optionalSideBar}
            {...rest}>
            {pageHeader && (
              <EuiEmptyPrompt
                iconType={pageHeader?.iconType}
                title={<h2>{pageHeader?.pageTitle}</h2>}
                body={<p>{pageHeader?.description}</p>}
                actions={pageHeader?.rightSideItems}
              />
            )}
            {children}
          </EuiPageTemplate>
        );

      default:
        return (
          <EuiPageTemplate
            pageSideBar={optionalSideBar}
            pageHeader={pageHeader && { ...pageHeader, ...pageHeaderProps }}
            {...rest}>
            {optionalGlobals}
            {children}
          </EuiPageTemplate>
        );
    }
  }

  switch (template) {
    case 'centeredBody':
      return (
        <EuiPage grow={true} paddingSize={optionalGlobals ? 'none' : 'l'}>
          <EuiPageBody>
            {optionalGlobals}
            <EuiPageContent
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
          <EuiPageBody>
            {optionalGlobals}
            {pageHeader && (
              <EuiPageHeader
                restrictWidth={restrictWidth}
                paddingSize="l"
                {...pageHeader}
                {...pageHeaderProps}
              />
            )}
            <EuiPageContent
              borderRadius="none"
              hasShadow={false}
              paddingSize="none">
              <EuiPageContentBody restrictWidth={restrictWidth} paddingSize="l">
                {children}
              </EuiPageContentBody>
            </EuiPageContent>
          </EuiPageBody>
        </EuiPage>
      );
  }
};
