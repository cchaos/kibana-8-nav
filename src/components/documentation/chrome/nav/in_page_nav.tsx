import React, { useState } from 'react';
import { navigate } from 'gatsby';

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiSideNav,
  EuiSpacer,
  EuiText,
  EuiTextColor,
  EuiTitle,
  EuiHideFor,
  EuiShowFor,
} from '@elastic/eui';

type Props = {
  currentUrl?: string;
};

export function DocsInPageNav({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentUrl,
}: Props) {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const createItem = (name: string, data = {}) => {
    return {
      id: name,
      name,
      // @ts-ignore
      disabled: !data.url && !data.isSelected,
      // @ts-ignore
      onClick: data.url
        ? () => {
            // @ts-ignore
            navigate(data.url);
          }
        : undefined,
      ...data,
    };
  };

  const sideNav = [
    createItem('Design Principles', {
      disabled: false,
      items: [
        createItem('Purpose with delight', { isSelected: true }),
        createItem('Empowering through thoughtfulness'),
        createItem('Optimized, yet flexible'),
      ],
    }),
    createItem('Culture', {
      disabled: false,
      items: [
        createItem('Purpose'),
        createItem('Workflow values'),
        createItem('Design decisions'),
      ],
    }),
    createItem('Practices', {
      disabled: false,
      items: [
        createItem('Communication'),
        createItem('Tooling'),
        createItem('Critiques'),
        createItem('User research'),
      ],
    }),
  ];

  const mainNav = (
    <EuiSideNav
      mobileTitle="Page navigation"
      toggleOpenOnMobile={toggleOpenOnMobile}
      isOpenOnMobile={isSideNavOpenOnMobile}
      items={sideNav}
    />
  );

  return (
    <>
      <EuiHideFor sizes={['xs', 's']}>
        <EuiFlexGroup
          direction="column"
          gutterSize="none"
          responsive={false}
          style={{ height: '100%' }}>
          <EuiFlexItem grow={false}>
            <EuiTitle size="xs">
              <EuiTextColor color="subdued">
                <h2>On this page</h2>
              </EuiTextColor>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem
            className="eui-yScrollWithShadows"
            style={{ overflowX: 'hidden' }}>
            <div>
              <EuiSpacer />
              {mainNav}
            </div>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <div>
              <EuiHorizontalRule margin="xs" />
              <EuiSpacer />
              <EuiText size="s" color="subdued">
                <p>No credit card required. Get up and running in 3-minutes!</p>
              </EuiText>
              <EuiSpacer size="s" />
              <EuiButton fill fullWidth>
                Start a free trial
              </EuiButton>
            </div>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiHideFor>
      <EuiShowFor sizes={['xs', 's']}>{mainNav}</EuiShowFor>
    </>
  );
}
