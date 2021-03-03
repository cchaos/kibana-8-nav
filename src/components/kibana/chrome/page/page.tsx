import React, { FunctionComponent, ReactNode } from 'react';

import {
  EuiEmptyPrompt,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageSideBar,
  EuiPageTemplate,
  EuiPageTemplateProps,
} from '@elastic/eui';

import { KibanaPageHeader, KibanaPageHeaderProps } from './page_header';
import { KibanaPageEmpty } from './page_empty';
import { KibanaPageDefault } from './page_default';
import { KibanaGlobals } from '../globals';

export type KibanaPageProps = EuiPageTemplateProps & {
  pageHeader?: KibanaPageHeaderProps;
  globals?: boolean;
  solutionNav?: ReactNode;
  resizableSidebar?: boolean;
  bottomBar?: ReactNode;
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  template,
  pageHeader,
  globals = false,
  solutionNav,
  children,
  bottomBar,

  pageContentProps,
  restrictWidth = true,
  ...rest
}) => {
  const optionalSideBar = solutionNav ? (
    <EuiPageSideBar>{solutionNav}</EuiPageSideBar>
  ) : undefined;

  const optionalGlobals = globals && <KibanaGlobals />;

  if (template === 'empty') {
    return (
      <EuiPageTemplate
        template="empty"
        restrictWidth={optionalGlobals ? false : restrictWidth}
        paddingSize={optionalGlobals ? 'none' : 'l'}
        pageSideBar={solutionNav}
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
          <KibanaPageDefault {...rest}>
            {optionalSideBar}

            <KibanaPageEmpty
              iconType={pageHeader?.iconType}
              title={<h2>{pageHeader?.pageTitle}</h2>}
              body={<p>{pageHeader?.description}</p>}
              actions={pageHeader?.actionButtons}
            />
          </KibanaPageDefault>
        );

      default:
        return (
          <KibanaPageDefault {...rest}>
            {optionalSideBar}
            <EuiPageContent {...pageContentProps} borderRadius={'none'}>
              {optionalGlobals}
              {pageHeader && (
                <>
                  <KibanaPageHeader
                    restrictWidth={restrictWidth}
                    {...pageHeader}
                  />
                </>
              )}
              <EuiPageContentBody restrictWidth={restrictWidth}>
                {children}
              </EuiPageContentBody>
            </EuiPageContent>
          </KibanaPageDefault>
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
                actions={pageHeader?.actionButtons}
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
              <KibanaPageHeader
                restrictWidth={restrictWidth}
                paddingSize="l"
                {...pageHeader}
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
