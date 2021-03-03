import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import {
  EuiButton,
  EuiButtonProps,
  EuiPageHeader,
  EuiPageHeaderProps,
  ExclusiveUnion,
} from '@elastic/eui';

import { EuiSuperDatePicker } from '../../../eui/super_date_picker';
import {
  EuiButtonPropsForAnchor,
  EuiButtonPropsForButton,
  // eslint-disable-next-line import/no-unresolved
} from '@elastic/eui/src/components/button/button';

export type KibanaPageHeaderProps = EuiPageHeaderProps & {
  time?: boolean;
  actionButtons?: ReactNode[];
};

export const KibanaPageHeaderPrimaryAddButton: FunctionComponent<
  EuiButtonProps &
    ExclusiveUnion<EuiButtonPropsForAnchor, EuiButtonPropsForButton>
> = ({ ...buttonProps }) => (
  <EuiButton iconType="plusInCircleFilled" {...buttonProps} fill />
);

export const KibanaPageHeader: FunctionComponent<KibanaPageHeaderProps> = ({
  className,
  rightSideItems,
  time,
  actionButtons,
  ...rest
}) => {
  const classes = classNames('kbnPageHeader', className);

  let extraSettings: Partial<EuiPageHeaderProps> = {};

  if (!rightSideItems && time) {
    rightSideItems = [<EuiSuperDatePicker />];
    extraSettings = {
      responsive: 'reverse',
      rightSideGroupProps: { responsive: true },
    };
  } else if (!rightSideItems && actionButtons) {
    rightSideItems = actionButtons;
  }

  return (
    <EuiPageHeader
      {...rest}
      rightSideItems={rightSideItems}
      {...extraSettings}
      className={classes}
    />
  );
};
