import React, { useState } from 'react';
import { navigate } from 'gatsby';

import {
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSideNav,
  EuiSpacer,
} from '@elastic/eui';

type Props = {
  currentUrl?: string;
};

export function EuiDocsNav({ currentUrl = 'introduction' }: Props) {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const createItem = (name: string, data = {}) => {
    return {
      ...data,
      id: name,
      name,
      // @ts-ignore
      isSelected: data.url && data.url === currentUrl,
      // @ts-ignore
      // disabled: !data.url,
      // @ts-ignore
      onClick: data.url
        ? () => {
            // @ts-ignore
            navigate(data.url);
          }
        : () => {
            return null;
          },
    };
  };

  const sideNav = [
    createItem('Guidelines', {
      items: [
        createItem('Accessibility'),
        createItem('Colors'),
        createItem('Sass'),
        createItem('Writing'),
      ],
    }),
    createItem('Layout', {
      items: [
        createItem('Accordion'),
        createItem('Bottom bar'),
        createItem('Flex'),
        createItem('Flyout'),
        createItem('Header'),
        createItem('Horizontal rule'),
        createItem('Page'),
      ],
    }),
    createItem('Navigation', {
      items: [
        createItem('Breadcrumbs'),
        createItem('Button', { url: 'eui/button' }),
        createItem('Collapsible nav'),
        createItem('Control bar'),
        createItem('Facet'),
        createItem('Link'),
      ],
    }),
    createItem('Utilities', {
      items: [
        createItem('Accessibility'),
        createItem('Beacon'),
        createItem('Color'),
        createItem('Breakpoints'),
      ],
    }),
  ];

  return (
    <EuiFlexGroup
      direction="column"
      gutterSize="none"
      style={{ height: '100%' }}>
      <EuiFlexItem grow={false}>
        <EuiFieldSearch placeholder="Search" compressed />
      </EuiFlexItem>
      <EuiFlexItem
        className="eui-yScrollWithShadows"
        style={{ overflowX: 'hidden', marginRight: -24 }}>
        <div>
          <EuiSpacer />
          <EuiSideNav
            mobileTitle="Navigate within $APP_NAME"
            toggleOpenOnMobile={toggleOpenOnMobile}
            isOpenOnMobile={isSideNavOpenOnMobile}
            items={sideNav}
          />
        </div>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
