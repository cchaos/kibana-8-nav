import React, { ReactNode } from 'react';

import {
  EuiBreadcrumb,
  EuiButtonIcon,
  EuiHeader,
  EuiHeaderBreadcrumbs,
  EuiHeaderProps,
} from '@elastic/eui';

import { KibanaHeaderSpacesMenu } from './spaces_menu';

import { KibanaNav } from './nav';

export type KibanaHeaderProps = {
  breadcrumbs?: EuiBreadcrumb[];
  headerLinks?: ReactNode;
  saved?: boolean;
};

export const kibanaHeaderSections = (
  breadcrumbs?: KibanaHeaderProps['breadcrumbs'],
  headerLinks: KibanaHeaderProps['headerLinks'] = <></>,
  saved: KibanaHeaderProps['saved'] = false
): EuiHeaderProps['sections'] => {
  const extraIcon = saved ? (
    <EuiButtonIcon
      aria-label="Saved"
      iconType="checkInCircleFilled"
      color="subdued"
    />
  ) : (
    <></>
  );

  const sections: EuiHeaderProps['sections'] = [
    {
      items: [
        <KibanaNav
          currentRoute={breadcrumbs ? String(breadcrumbs[0].text) : 'Home'}
        />,
        <KibanaHeaderSpacesMenu />,
        breadcrumbs && (
          <EuiHeaderBreadcrumbs
            // @ts-ignore FIX: Style should be allowed on breadcrumbs
            style={{ marginLeft: 12, marginRight: 8, overflow: 'hidden' }}
            breadcrumbs={breadcrumbs}
          />
        ),
        extraIcon,
      ],
      borders: 'none',
    },
    {
      borders: 'none',
      items: [headerLinks],
    },
  ];
  return sections;
};

export const KibanaHeader: React.FunctionComponent<KibanaHeaderProps> = ({
  breadcrumbs,
  headerLinks = <></>,
  saved = false,
}) => {
  return (
    <EuiHeader
      sections={kibanaHeaderSections(breadcrumbs, headerLinks, saved)}
    />
  );
};
