/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import {
  EuiText,
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiLink,
  EuiFlexGrid,
  EuiCard,
} from '@elastic/eui';

import { EuiDocsPage } from '../../components/documentation/eui/chrome/page/page';

// @ts-ignore
import graphic from '../../images/EUI-Docs-Image.svg';

export default () => (
  <EuiDocsPage
    currentUrl="home"
    pageHeader={{
      pageTitle: 'Elastic UI',
    }}
    pageBodyProps={{
      style: { overflowX: 'hidden' },
    }}>
    <EuiPanel
      hasShadow={false}
      color="subdued"
      paddingSize="l"
      style={{ marginTop: -24, marginLeft: -24, marginRight: -24 }}>
      <EuiFlexGroup alignItems="center">
        <EuiFlexItem>
          <EuiText>
            <h3>The framework powering the Elastic Stack</h3>
            <EuiSpacer />
            <p>
              The Elastic UI framework (EUI) is a design library in use at
              Elastic to build internal products that need to share our
              aesthetics. It distributes UI React components and static assets
              for use in building web layouts.{' '}
            </p>
            <EuiSpacer />
            <p>
              <EuiLink>
                <strong>Getting Started</strong>
              </EuiLink>{' '}
              &emsp;
              <EuiLink>
                <strong>{"What's New"}</strong>
              </EuiLink>{' '}
              &emsp;
              <EuiLink>
                <strong>Guidelines</strong>
              </EuiLink>{' '}
              &emsp;
              <EuiLink>
                <strong>FAQs</strong>
              </EuiLink>
            </p>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem style={{ marginRight: -24 }}>
          <img
            className="pageScreenshot pageScreenshot--responsive"
            alt="Graphc"
            width={555}
            src={graphic}
            style={{ marginTop: -24, marginBottom: -24 }}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>

    <EuiSpacer size="xxl" />

    <EuiFlexGrid gutterSize="xl" columns={4}>
      <EuiFlexItem>
        <EuiCard
          textAlign="left"
          image="https://source.unsplash.com/400x200/?Nature"
          title="Icons"
          description="Our SVG icon library gives you full control over size and color"
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          textAlign="left"
          image="https://source.unsplash.com/400x200/?Nature"
          title="Icons"
          description="Our SVG icon library gives you full control over size and color"
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          textAlign="left"
          image="https://source.unsplash.com/400x200/?Nature"
          title="Icons"
          description="Our SVG icon library gives you full control over size and color"
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          textAlign="left"
          image="https://source.unsplash.com/400x200/?Nature"
          title="Icons"
          description="Our SVG icon library gives you full control over size and color"
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          textAlign="left"
          image="https://source.unsplash.com/400x200/?Nature"
          title="Icons"
          description="Our SVG icon library gives you full control over size and color"
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          textAlign="left"
          image="https://source.unsplash.com/400x200/?Nature"
          title="Icons"
          description="Our SVG icon library gives you full control over size and color"
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          textAlign="left"
          image="https://source.unsplash.com/400x200/?Nature"
          title="Icons"
          description="Our SVG icon library gives you full control over size and color"
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          textAlign="left"
          image="https://source.unsplash.com/400x200/?Nature"
          title="Icons"
          description="Our SVG icon library gives you full control over size and color"
        />
      </EuiFlexItem>
    </EuiFlexGrid>
  </EuiDocsPage>
);
