/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import {
  EuiText,
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiButton,
  EuiTab,
  EuiTabs,
  EuiIcon,
  EuiSwitch,
  EuiHorizontalRule,
  EuiCodeBlock,
  EuiFormLabel,
} from '@elastic/eui';

import { EuiDocsPage } from '../../components/documentation/eui/chrome/page/page';

export default () => (
  <EuiDocsPage
    currentUrl="button"
    pageHeader={{
      pageTitle: 'Button',
    }}>
    <EuiText grow={false}>
      <p>
        <strong>EuiButton</strong> comes in two styles. The fill style should be
        reserved for the main action and limited in number for a single page. Be
        sure to read the full button usage guidelines.
      </p>
    </EuiText>
    <EuiSpacer />
    <EuiPanel paddingSize="none" style={{ overflow: 'hidden' }}>
      <EuiPanel hasShadow={false} paddingSize="l" color="transparent">
        <EuiFlexGroup direction="column" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiFlexGroup alignItems="baseline">
              <EuiFlexItem>
                <EuiButton>Button</EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton fill>Button</EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton size="s">Button</EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton fill size="s">
                  Button
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup alignItems="baseline">
              <EuiFlexItem>
                <EuiButton color="secondary">Button</EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton color="secondary" fill>
                  Button
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton color="secondary" size="s">
                  Button
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton color="secondary" fill size="s">
                  Button
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup alignItems="baseline">
              <EuiFlexItem>
                <EuiButton color="warning">Button</EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton color="warning" fill>
                  Button
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton color="warning" size="s">
                  Button
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton color="warning" fill size="s">
                  Button
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup alignItems="baseline">
              <EuiFlexItem>
                <EuiButton color="danger">Button</EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton color="danger" fill>
                  Button
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton color="danger" size="s">
                  Button
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiButton color="danger" fill size="s">
                  Button
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
      <EuiPanel
        paddingSize="s"
        color="subdued"
        hasShadow={false}
        borderRadius="none">
        <EuiFlexGroup gutterSize="none" alignItems="center">
          <EuiFlexItem>
            <EuiTabs size="s" display="condensed">
              <EuiTab className="euiTab--small" isSelected>
                <EuiIcon type="editorCodeBlock" /> JS
              </EuiTab>
              <EuiTab className="euiTab--small">HTML</EuiTab>
              <EuiTab className="euiTab--small">Snippet</EuiTab>
              <EuiTab className="euiTab--small">
                <EuiIcon type="controlsHorizontal" /> Props
              </EuiTab>
            </EuiTabs>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFormLabel>Static &ensp; </EuiFormLabel>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiSwitch
              onChange={() => {}}
              checked={false}
              compressed
              label={<EuiFormLabel>Playground</EuiFormLabel>}
              disabled
            />
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiHorizontalRule margin="none" />
        <EuiCodeBlock
          language="html"
          fontSize="s"
          paddingSize="m"
          isCopyable
          overflowHeight={400}>
          {`import React from 'react';

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';

export default () => (
  <div>
    <EuiFlexGroup gutterSize="s" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiButton onClick={() => {}}>Primary</EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton fill onClick={() => {}}>
          Filled
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton size="s" onClick={() => {}}>
          Small
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton size="s" fill onClick={() => {}}>
          Small and filled
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>

    <EuiFlexGroup gutterSize="s" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiButton color="secondary" onClick={() => {}}>
          Secondary
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton color="secondary" fill onClick={() => {}}>
          Filled
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton color="secondary" size="s" onClick={() => {}}>
          Small
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton color="secondary" size="s" fill onClick={() => {}}>
          Small and filled
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>

    <EuiFlexGroup gutterSize="s" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiButton color="warning" onClick={() => {}}>
          Warning
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton color="warning" fill onClick={() => {}}>
          Filled
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton color="warning" size="s" onClick={() => {}}>
          Small
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton color="warning" size="s" fill onClick={() => {}}>
          Small and filled
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>

    <EuiFlexGroup gutterSize="s" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiButton color="danger" onClick={() => {}}>
          Danger
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton color="danger" fill onClick={() => {}}>
          Filled
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton color="danger" size="s" onClick={() => {}}>
          Small
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton color="danger" size="s" fill onClick={() => {}}>
          Small and filled
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>

    <EuiFlexGroup gutterSize="s" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiButton color="text" onClick={() => {}}>
          Text
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton color="text" fill onClick={() => {}}>
          Filled
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton color="text" size="s" onClick={() => {}}>
          Small
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton color="text" size="s" fill onClick={() => {}}>
          Small and filled
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>

    <EuiFlexGroup gutterSize="s" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiButton isDisabled onClick={() => {}}>
          Disabled
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton isDisabled fill onClick={() => {}}>
          Filled
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton isDisabled size="s" onClick={() => {}}>
          Small
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButton isDisabled size="s" fill onClick={() => {}}>
          Small and filled
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  </div>
);`}
        </EuiCodeBlock>
      </EuiPanel>
    </EuiPanel>
  </EuiDocsPage>
);
