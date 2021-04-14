import React from 'react';

import {
  EuiHeaderLogo,
  EuiHeader,
  EuiButtonIcon,
  EuiHeaderSectionItem,
  useIsWithinBreakpoints,
  EuiHeaderProps,
  EuiToolTip,
} from '@elastic/eui';
import { ConsoleHelpMenu } from './help_menu';
import { navigate } from 'gatsby';
import { KibanaChromeSearch } from '../../kibana/chrome/search';
import {
  ConsoleDeploymentMenu,
  ConsoleDeploymentMenuProps,
} from './deployments_menu';
import { ConsoleUpdates } from './updates';
import { ConsoleUserMenu } from './user_menu';
import { CloudCompany, CloudUser } from '../../cloud/_data';

export type ConsoleHeaderProps = Omit<
  ConsoleDeploymentMenuProps,
  'companyName'
>;

export const consoleHeaderSections = (
  inDeployment: ConsoleHeaderProps['inDeployment'] = false,
  isMobile?: boolean
): EuiHeaderProps['sections'] => {
  function renderLogo() {
    return (
      <EuiHeaderLogo
        iconType="logoElastic"
        onClick={() => navigate('cloud')}
        aria-label="Go to Elastic console home"
        title="Go to Elastic console home">
        Elastic
      </EuiHeaderLogo>
    );
  }

  const sections: EuiHeaderProps['sections'] = [
    {
      items: [
        renderLogo(),
        <ConsoleDeploymentMenu
          companyName={CloudCompany}
          inDeployment={inDeployment}
        />,
      ],
      borders: 'none',
    },
    {
      items: [!isMobile && <KibanaChromeSearch />],
      borders: 'none',
    },
    {
      items: [
        isMobile && <KibanaChromeSearch />,
        <ConsoleHelpMenu />,
        <ConsoleUpdates />,
        <ConsoleUserMenu {...CloudUser} />,
        <EuiHeaderSectionItem>
          <EuiToolTip content="Add data">
            <EuiButtonIcon
              aria-label="Add data"
              iconType="plusInCircleFilled"
              display="base"
              size="s"
              color="ghost"
            />
          </EuiToolTip>
        </EuiHeaderSectionItem>,
      ],
      borders: 'none',
    },
  ];

  return sections;
};

export const ConsoleHeader: React.FunctionComponent<ConsoleHeaderProps> = ({
  inDeployment,
}) => {
  // TO FIX: This doesn't seem to work on load
  const isMobile = useIsWithinBreakpoints(['xs', 's']);

  return (
    <EuiHeader
      theme="dark"
      sections={consoleHeaderSections(inDeployment, isMobile)}
    />
  );
};
