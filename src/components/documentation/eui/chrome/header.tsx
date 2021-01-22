import React from 'react';
import { navigate } from 'gatsby';

import {
  EuiHeaderLogo,
  EuiBadge,
  EuiHeader,
  EuiHeaderSectionItemButton,
  EuiIcon,
} from '@elastic/eui';
import theme from '@elastic/eui/dist/eui_theme_dark.json';

import { EuiDocsThemeButton } from './nav';
import { EuiSticky } from '../../../eui';

// eslint-disable-next-line @typescript-eslint/ban-types
export type EuiDocsHeaderProps = {};

export const EuiDocsHeader: React.FunctionComponent<EuiDocsHeaderProps> = ({}) => {
  function renderLogo() {
    return (
      <EuiHeaderLogo
        iconType="logoElastic"
        onClick={() => navigate('eui')}
        aria-label="Goes to home">
        Elastic UI
      </EuiHeaderLogo>
    );
  }

  return (
    <EuiSticky zIndex={1000} id="kbnHeader">
      <EuiHeader
        theme="dark"
        sections={[
          {
            items: [
              renderLogo(),
              <EuiBadge color={theme.euiColorMediumShade}>v. 32.3.0</EuiBadge>,
            ],
            borders: 'none',
          },
          {
            items: [<EuiDocsThemeButton />],
            borders: 'none',
          },
          {
            items: [
              <EuiHeaderSectionItemButton>
                <EuiIcon type="logoGithub" size="m" />
              </EuiHeaderSectionItemButton>,
              <EuiHeaderSectionItemButton>
                <EuiIcon type="logoCodesandbox" size="m" />
              </EuiHeaderSectionItemButton>,
              <EuiHeaderSectionItemButton>
                <EuiIcon type="logoSketch" size="m" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />
    </EuiSticky>
  );
};
