import React, { ReactNode } from 'react';

import {
  EuiBreadcrumb,
  EuiBreadcrumbs,
  EuiButtonIcon,
  EuiHeader,
} from '@elastic/eui';

import { KibanaHeaderSpacesMenu } from './spaces_menu';

import { KibanaNav } from './nav';
import { ConsoleHeader } from '../../console/header/header';
import { EuiSticky } from '../../eui';

export type KibanaHeaderProps = {
  breadcrumbs?: EuiBreadcrumb[];
  headerLinks?: ReactNode;
};

export const KibanaHeader: React.FunctionComponent<KibanaHeaderProps> = ({
  breadcrumbs,
  headerLinks = <></>,
}) => {
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
                <EuiBreadcrumbs
                  // TODO: FIX TRUNCATION OF LONG BREADCRUMB SINGLE ITEM
                  // @ts-ignore FIX: Style should be allowed on breadcrumbs
                  style={{ marginLeft: 12, marginRight: 8, overflow: 'hidden' }}
                  breadcrumbs={breadcrumbs}
                />
              ),
              // TODO: Make this dynamic
              <EuiButtonIcon iconType="checkInCircleFilled" color="subdued" />,
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
