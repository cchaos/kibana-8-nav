import React, { Fragment, useState } from 'react';
import { find } from 'lodash';

import {
  EuiPopover,
  EuiButton,
  EuiSelectable,
  EuiPopoverTitle,
  EuiPopoverFooter,
  htmlIdGenerator,
  EuiBadge,
  EuiSelectableProps,
} from '@elastic/eui';

import theme from '@elastic/eui/dist/eui_theme_dark.json';

import { CloudDeployments } from '../../cloud/_data';
import { Link, navigate } from 'gatsby';

export type ConsoleDeploymentMenuProps = {
  companyName: string;
  inDeployment?: boolean;
};

export const ConsoleDeploymentMenu: React.FunctionComponent<ConsoleDeploymentMenuProps> = ({
  companyName,
  inDeployment = false,
  ...props
}) => {
  if (!inDeployment) {
    return (
      <EuiBadge color={theme.euiColorMediumShade} {...props}>
        {companyName}
      </EuiBadge>
    );
  }

  const [options, setOptions] = useState(CloudDeployments);
  const [selectedDeployment, setSelectedDeployment] = useState(
    find(CloudDeployments, { checked: 'on' })
  );
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onMenuButtonClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const onDeploymentSelect = (options: EuiSelectableProps['options']) => {
    setOptions(options);
    setMenuIsOpen(false);
    setSelectedDeployment(find(options, { checked: 'on' }));
    navigate('/');
  };

  const createMenuId = htmlIdGenerator('ConsoleDeploymentMenu');
  const menuId = createMenuId();

  const button = (
    <EuiBadge
      color={theme.euiColorMediumShade}
      iconType="arrowDown"
      iconSide="right"
      onClick={onMenuButtonClick}
      onClickAriaLabel="Deployment details"
      aria-controls={menuId}
      aria-expanded={menuIsOpen}
      aria-haspopup="true"
      {...props}>
      {selectedDeployment?.label}
    </EuiBadge>
  );

  return (
    <EuiPopover
      id={menuId}
      button={button}
      isOpen={menuIsOpen}
      closePopover={closeMenu}
      ownFocus
      anchorPosition="downLeft"
      panelPaddingSize="none">
      <EuiSelectable
        options={options}
        onChange={onDeploymentSelect}
        singleSelection="always"
        style={{ width: 220 }}>
        {(list) => (
          <Fragment>
            <EuiPopoverTitle paddingSize="s">
              <Link to="cloud">{companyName}</Link>
            </EuiPopoverTitle>
            {list}
            <EuiPopoverFooter paddingSize="s">
              <EuiButton
                size="s"
                onClick={() => navigate('cloud/deployment')}
                fullWidth
                isDisabled={selectedDeployment?.label !== 'Squirrel'}>
                Manage deployment
              </EuiButton>
            </EuiPopoverFooter>
          </Fragment>
        )}
      </EuiSelectable>
    </EuiPopover>
  );
};
