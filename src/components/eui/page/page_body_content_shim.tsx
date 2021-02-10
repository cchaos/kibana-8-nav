import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import {
  EuiPageContentBody as EuiPageContentBodyOld,
  EuiPageContentBodyProps as EuiPageContentBodyPropsOld,
} from '@elastic/eui';

export type EuiPageContentBodyProps = EuiPageContentBodyPropsOld & {
  /**
   * Sets the max-width of the page,
   * set to `true` to use the default size,
   * set to `false` to not restrict the width,
   * set to a number for a custom width in px,
   * set to a string for a custom width in custom measurement.
   */
  restrictWidth?: boolean | number | string;
};

export const EuiPageContentBody: FunctionComponent<EuiPageContentBodyProps> = ({
  className,
  children,
  restrictWidth = false,
  style,
  ...rest
}) => {
  let widthClassname;
  let newStyle;

  if (restrictWidth === true) {
    widthClassname = 'euiPageContentBody--restrictWidth-default';
  } else if (restrictWidth !== false) {
    widthClassname = 'euiPageContentBody--restrictWidth-custom';
    const value =
      typeof restrictWidth === 'number' ? `${restrictWidth}px` : restrictWidth;
    newStyle = { ...style, maxWidth: value };
  }

  const classes = classNames('euiPageContentBody', widthClassname, className);

  return (
    <EuiPageContentBodyOld
      className={classes}
      style={newStyle || style}
      {...rest}>
      {children}
    </EuiPageContentBodyOld>
  );
};
