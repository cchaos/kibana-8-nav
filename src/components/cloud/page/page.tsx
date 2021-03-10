import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from 'react';

import {
  EuiBreadcrumb,
  EuiPageTemplate,
  EuiPageTemplateProps,
  useIsWithinBreakpoints,
  useResizeObserver,
} from '@elastic/eui';

import { CloudChromeContext } from '../layout';

export type CloudPageProps = EuiPageTemplateProps & {
  breadcrumbs?: EuiBreadcrumb[];
  pageTitle: string;
  sideNav?: ReactNode;
  bottomBar?: ReactNode;
};

export const CloudPage: FunctionComponent<CloudPageProps> = ({
  breadcrumbs,
  pageTitle,
  sideNav,
  bottomBar,
  pageBodyProps = {},
  className,
  children,
  ...rest
}) => {
  const isMobile = useIsWithinBreakpoints(['xs', 's']);
  const setHeaderItems = useContext(CloudChromeContext);

  useEffect(() => {
    setHeaderItems.setChrome({
      breadcrumbs,
      pageTitle,
    });
  }, [breadcrumbs]);

  let optionalBottomBar;
  if (bottomBar) {
    const resizeRef = useRef<HTMLDivElement | null>(null);

    optionalBottomBar = (
      <div
        ref={resizeRef}
        className="euiBottomBar euiBottomBar--paddingSmall"
        style={{ left: isMobile ? 0 : 240 }}>
        {bottomBar}
      </div>
    );

    const dimensions = useResizeObserver(resizeRef.current);

    pageBodyProps.style = {
      paddingBottom: dimensions.height + 24,
      ...pageBodyProps.style,
    };
  }

  return (
    <EuiPageTemplate
      className={className}
      pageSideBar={sideNav}
      pageBodyProps={pageBodyProps}
      {...rest}>
      {children}
      {optionalBottomBar}
    </EuiPageTemplate>
  );
};
