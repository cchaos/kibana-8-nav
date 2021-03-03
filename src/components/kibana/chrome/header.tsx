import React, { ReactNode } from 'react';

import {
  EuiBreadcrumb,
  EuiButtonIcon,
  EuiHeader,
  EuiHeaderBreadcrumbs,
} from '@elastic/eui';

import { KibanaHeaderSpacesMenu } from './spaces_menu';

import { KibanaNav } from './nav';
import { ConsoleHeader } from '../../console/header/header';
import { EuiSticky } from '../../eui';

export type KibanaHeaderProps = {
  breadcrumbs?: EuiBreadcrumb[];
  headerLinks?: ReactNode;
  saved?: boolean;
};

export const KibanaHeader: React.FunctionComponent<KibanaHeaderProps> = ({
  breadcrumbs,
  headerLinks = <></>,
  saved = false,
}) => {
  const extraIcon = saved ? (
    <EuiButtonIcon
      aria-label="Saved"
      iconType="checkInCircleFilled"
      color="subdued"
    />
  ) : (
    <></>
  );

  return (
    <EuiSticky zIndex={1000} id="kbnHeader">
      <ConsoleHeader inDeployment />
      <EuiHeader
        sections={[
          {
            items: [
              <KibanaNav
                currentRoute={
                  breadcrumbs ? String(breadcrumbs[0].text) : 'Home'
                }
              />,
              <KibanaHeaderSpacesMenu />,
              breadcrumbs && (
                <EuiHeaderBreadcrumbs
                  // @ts-ignore FIX: Style should be allowed on breadcrumbs
                  style={{ marginLeft: 12, marginRight: 8, overflow: 'hidden' }}
                  breadcrumbs={breadcrumbs}
                />
              ),
              // TODO: Make this dynamic
              extraIcon,
            ],
            borders: 'none',
          },
          {
            borders: 'none',
            items: [headerLinks],
          },
        ]}
      />
    </EuiSticky>
  );
};
