import React, { FunctionComponent, ReactNode } from 'react';

import {
  EuiPageContent,
  EuiPageContentProps,
  EuiPageSideBar,
  EuiSpacer,
} from '@elastic/eui';
import { EuiPage, EuiPageProps } from '../../../eui/page/page_shim';
import { EuiPageBody } from '../../../eui/page/page_body_shim';
import { EuiPageContentBody } from '../../../eui/page/page_body_content_shim';

import { KibanaPageHeader, KibanaPageHeaderProps } from './page_header';
import { KibanaPageCustom } from './page_custom';
import { KibanaPageEmpty } from './page_empty';
import { KibanaPageDefault } from './page_default';
import { KibanaGlobals } from '../globals';

export type KibanaPageProps = EuiPageProps & {
  template?: 'default' | 'empty' | 'custom';
  restrictWidth?: boolean;
  pageHeader?: KibanaPageHeaderProps;
  globals?: boolean;
  pageContentProps?: EuiPageContentProps;
  solutionNav?: ReactNode;

  resizableSidebar?: boolean;
  bottomBar?: ReactNode;
};

export const KibanaPage: FunctionComponent<KibanaPageProps> = ({
  template = 'default',
  restrictWidth = true,
  pageHeader,
  globals = false,
  pageContentProps,
  solutionNav,
  children,

  bottomBar,
  ...rest
}) => {
  const optionalSideBar = solutionNav ? (
    <EuiPageSideBar>{solutionNav}</EuiPageSideBar>
  ) : undefined;

  const optionalGlobals = globals && <KibanaGlobals />;

  if (solutionNav) {
    switch (template) {
      case 'custom':
        return (
          <KibanaPageCustom {...rest}>
            {optionalSideBar}
            <EuiPageContent {...pageContentProps} borderRadius={'none'}>
              {optionalGlobals}
              {children}
            </EuiPageContent>
          </KibanaPageCustom>
        );

      case 'empty':
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
                  <EuiSpacer />
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
    case 'custom':
      return (
        <KibanaPageCustom {...rest} restrictWidth={restrictWidth}>
          <EuiPageBody>
            {optionalGlobals}
            {children}
          </EuiPageBody>
        </KibanaPageCustom>
      );

    case 'empty':
      return (
        <EuiPage grow={true} paddingSize="none">
          <EuiPageBody>
            {globals}
            <KibanaPageEmpty
              iconType={pageHeader?.iconType}
              title={<h2>{pageHeader?.pageTitle}</h2>}
              body={<p>{pageHeader?.description}</p>}
              actions={pageHeader?.actionButtons}
            />
          </EuiPageBody>
        </EuiPage>
      );

    default:
      return (
        <KibanaPageDefault {...rest}>
          <EuiPageBody>
            {optionalGlobals}
            {pageHeader && (
              <KibanaPageHeader restrictWidth={restrictWidth} {...pageHeader} />
            )}
            <EuiPageContent
              {...pageContentProps}
              borderRadius={'none'}
              hasShadow={false}>
              <EuiPageContentBody restrictWidth={restrictWidth}>
                {children}
              </EuiPageContentBody>
            </EuiPageContent>
          </EuiPageBody>
        </KibanaPageDefault>
      );
  }
};
