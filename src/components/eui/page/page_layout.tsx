import React, { FunctionComponent, HTMLAttributes, useEffect } from 'react';
import classNames from 'classnames';

import { CommonProps } from '@elastic/eui';

export const NUMBER_OF_FIXED_HEADERS = [1, 2, 3] as const;

export type EuiPageLayoutProps = CommonProps &
  HTMLAttributes<HTMLDivElement> & {
    /**
     * Helper that adjusts the layout based on the number of fixed headers.
     * Adds body classes.
     */
    numberOfFixedHeaders?: typeof NUMBER_OF_FIXED_HEADERS[number];
    /**
     * Stretches the page content but doesn't extend past the window height.
     * This means you must add scroll ability somewhere in your content.
     * Be sure to apply `overflow: hidden` to all the containers until you reach the one you desire to scroll.
     */
    fullHeight?: boolean;
  };

export const EuiPageLayout: FunctionComponent<EuiPageLayoutProps> = ({
  className,
  children,
  numberOfFixedHeaders,
  fullHeight,
  ...rest
}) => {
  useEffect(() => {
    if (numberOfFixedHeaders) {
      document.body.classList.add(
        `euiBody--${numberOfFixedHeaders}FixedHeaders`
      );

      return () => {
        // Remove the class
        document.body.classList.remove(
          `euiBody--${numberOfFixedHeaders}FixedHeaders`
        );
      };
    }
  }, [numberOfFixedHeaders]);

  const classes = classNames(
    'euiPageLayout',
    {
      'euiPageLayout--fullHeight': fullHeight,
    },
    `euiPageLayout--${numberOfFixedHeaders}FixedHeaders`,
    className
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
