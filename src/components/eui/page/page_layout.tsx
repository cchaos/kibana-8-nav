import React, { FunctionComponent, HTMLAttributes, useEffect } from 'react';
import classNames from 'classnames';

import { CommonProps, EuiHeader, EuiHeaderProps } from '@elastic/eui';

export const NUMBER_OF_FIXED_HEADERS = [1, 2, 3] as const;

export type EuiHeaderPropsExtended = Omit<EuiHeaderProps, 'position'> & {
  position?: 'static' | 'fixed' | 'sticky';
};

export type EuiPageLayoutProps = CommonProps &
  HTMLAttributes<HTMLDivElement> & {
    headers?: EuiHeaderPropsExtended[];
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
  fullHeight,
  headers,
  ...rest
}) => {
  useEffect(() => {
    if (headers?.length) {
      const numberOfFixedHeaders = headers.reduce(function (num, header) {
        if (header.position === 'fixed') {
          num += 1;
        }
        return num;
      }, 0);

      const numberOfStickyHeaders = headers.reduce(function (num, header) {
        if (header.position === 'sticky') {
          num += 1;
        }
        return num;
      }, 0);

      document.body.classList.add(
        classNames({
          [`euiBody--${numberOfFixedHeaders}FixedHeaders`]: numberOfFixedHeaders,
          [`euiBody--${numberOfStickyHeaders}StickyHeaders`]: numberOfStickyHeaders,
        })
      );

      return () => {
        // Remove the class
        document.body.classList.remove(
          `euiBody--${numberOfFixedHeaders}FixedHeaders`,
          `euiBody--${numberOfStickyHeaders}StickyHeaders`
        );
      };
    }
  }, [headers]);

  const classes = classNames(
    'euiPageLayout',
    {
      'euiPageLayout--fullHeight': fullHeight,
      // [`euiPageLayout--${numberOfFixedHeaders}FixedHeaders`]: numberOfFixedHeaders,
    },
    className
  );

  let headerNodes;
  if (headers?.length) {
    headerNodes = headers.map((header, index) => (
      // @ts-ignore Add `sticky`
      <EuiHeader role="banner" key={index} {...header} />
    ));
  }

  return (
    <div className={classes} {...rest}>
      {headerNodes}
      {children}
    </div>
  );
};
