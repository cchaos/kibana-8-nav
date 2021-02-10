/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

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
  EuiTitle,
} from '@elastic/eui';

import { EuiDocsPage } from '../../components/documentation/eui/chrome/page/page';

export default () => {
  const [selectedTab, setSelectedTab] = useState('');
  const [showingPlayground, setShowingPlayground] = useState(false);

  const onTabClick = (selectedTab: string) => {
    setSelectedTab((currentTab) =>
      currentTab !== selectedTab ? selectedTab : ''
    );
  };

  return (
    <EuiDocsPage
      currentUrl="button"
      pageHeader={{
        pageTitle: 'Button',
      }}>
      <EuiText grow={false}>
        <p>
          <strong>EuiButton</strong> comes in two styles. The fill style should
          be reserved for the main action and limited in number for a single
          page. Be sure to read the full button usage guidelines.
        </p>
      </EuiText>
      <EuiSpacer />
      <EuiPanel paddingSize="none" style={{ overflow: 'hidden' }}>
        <EuiPanel hasShadow={false} paddingSize="l" color="transparent">
          <EuiFlexGroup direction="column" alignItems="center">
            {showingPlayground ? (
              <EuiDocsButtonPlayground />
            ) : (
              <EuiDocsButtonExample />
            )}
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
                <EuiTab
                  disabled={showingPlayground}
                  className="euiTab--small"
                  isSelected={selectedTab === 'JS'}
                  onClick={() => onTabClick('JS')}>
                  <EuiIcon type="editorCodeBlock" /> JS
                </EuiTab>
                <EuiTab className="euiTab--small">HTML</EuiTab>
                <EuiTab className="euiTab--small" disabled={showingPlayground}>
                  Snippet
                </EuiTab>
                <EuiTab
                  className="euiTab--small"
                  isSelected={selectedTab === 'Props'}
                  onClick={() => onTabClick('Props')}>
                  <EuiIcon type="controlsHorizontal" /> Props
                </EuiTab>
              </EuiTabs>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFormLabel>Static &ensp; </EuiFormLabel>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiSwitch
                onChange={() => setShowingPlayground((isShowing) => !isShowing)}
                checked={showingPlayground}
                compressed
                label={<EuiFormLabel>Playground</EuiFormLabel>}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
          {selectedTab && <EuiHorizontalRule margin="none" />}
          {selectedTab === 'JS' && <EuiDocsButtonSrc />}
          {selectedTab === 'Props' && (
            <EuiDocsButtonPropsPlaygroundHTML playground={showingPlayground} />
          )}
        </EuiPanel>
      </EuiPanel>
    </EuiDocsPage>
  );
};

const EuiDocsButtonPlayground = () => (
  <>
    <EuiFlexItem grow={false}>
      <div>
        <EuiButton>Button</EuiButton>
      </div>
    </EuiFlexItem>
    <EuiFlexItem className="eui-fullWidth" grow={true}>
      <EuiSpacer />
      <EuiCodeBlock language="html" fontSize="s" paddingSize="m" isCopyable>
        {'<EuiButton>Button</EuiButton>'}
      </EuiCodeBlock>
    </EuiFlexItem>
  </>
);

const EuiDocsButtonExample = () => (
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
    <EuiSpacer />
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
    <EuiSpacer />
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
    <EuiSpacer />
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
);

const EuiDocsButtonSrc = () => (
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
);

const EuiDocsButtonPropsPlaygroundHTML = ({ playground = false }) => (
  <>
    <EuiSpacer />
    <EuiTitle size="xs">
      <h3>EuiButton</h3>
    </EuiTitle>
    <EuiSpacer size="s" />
    <table
      style={{ background: 'transparent' }}
      className="euiTable euiTable--responsive"
      id="playground">
      <thead>
        <tr>
          <th className="euiTableHeaderCell" scope="col" role="columnheader">
            <div className="euiTableCellContent">
              <span className="euiTableCellContent__text" title="Prop">
                Prop
              </span>
            </div>
          </th>
          <th className="euiTableHeaderCell" scope="col" role="columnheader">
            <div className="euiTableCellContent">
              <span className="euiTableCellContent__text" title="Type">
                Type
              </span>
            </div>
          </th>
          {!playground && (
            <th className="euiTableHeaderCell" scope="col" role="columnheader">
              <div className="euiTableCellContent">
                <span className="euiTableCellContent__text" title="Default">
                  Default
                </span>
              </div>
            </th>
          )}
          {playground && (
            <th className="euiTableHeaderCell" scope="col" role="columnheader">
              <div className="euiTableCellContent">
                <span className="euiTableCellContent__text" title="Modify">
                  Modify
                </span>
              </div>
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        <EuiButtonPropsRow playground={playground} />
        <EuiButtonPropsRow playground={playground} />
        <EuiButtonPropsRow playground={playground} />
        <EuiButtonPropsRow playground={playground} />
        <EuiButtonPropsRow playground={playground} />
      </tbody>
    </table>
  </>
);

const EuiButtonPropsRow = ({ playground = false }) => {
  return (
    <tr className="euiTableRow">
      <td className="euiTableRowCell">
        <div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">
          Prop
        </div>
        <div className="euiTableCellContent playgroundKnobs__rowCell">
          <span className="euiTableCellContent__text">
            <strong className="eui-textBreakNormal">fill</strong>
            <br />
            Make button a solid color for prominence
            <br />
          </span>
        </div>
      </td>
      <td className="euiTableRowCell">
        <div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">
          Type
        </div>
        <div className="euiTableCellContent playgroundKnobs__rowCell">
          <span className="euiTableCellContent__text">
            <span className="euiCodeBlock euiCodeBlock--fontSmall euiCodeBlock--paddingLarge euiCodeBlock--inline">
              <code className="euiCodeBlock__code">
                <span className="eui-textBreakNormal">
                  boolean
                  <br />
                </span>
              </code>
            </span>
          </span>
        </div>
      </td>
      {!playground && (
        <td className="euiTableRowCell">
          <div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">
            Default
          </div>
          <div className="euiTableCellContent playgroundKnobs__rowCell">
            <span className="euiTableCellContent__text" />
          </div>
        </td>
      )}
      {playground && (
        <td className="euiTableRowCell">
          <div className="euiTableRowCell__mobileHeader euiTableRowCell--hideForDesktop">
            Modify
          </div>
          <div className="euiTableCellContent playgroundKnobs__rowCell euiTableCellContent--overflowingContent">
            <div className="euiSwitch euiSwitch--compressed">
              <button
                id="fill"
                aria-checked="false"
                className="euiSwitch__button"
                role="switch"
                type="button"
                aria-labelledby="i4d3a3331-5dac-11eb-ab18-edb9f1b224d9">
                <span className="euiSwitch__body">
                  <span className="euiSwitch__thumb" />
                  <span className="euiSwitch__track" />
                </span>
              </button>
              <span
                className="euiSwitch__label"
                id="i4d3a3331-5dac-11eb-ab18-edb9f1b224d9"
              />
            </div>
          </div>
        </td>
      )}
    </tr>
  );
};
