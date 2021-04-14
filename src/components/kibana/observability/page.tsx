import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import { EuiBreadcrumb, EuiButtonEmpty, EuiHeaderLinks } from '@elastic/eui';
import { KibanaPage, KibanaPageProps } from '../chrome/page/page';
import { ObservabilityNav } from './nav';
import { navigate } from 'gatsby';
import { KibanaChromeContext } from '../layout';
import { KibanaHeaderProps } from '../chrome/header';

export type ObservabilityPage = KibanaPageProps &
  KibanaHeaderProps & {
    navItem?: string;
    pageTitle?: string;
  };

export const ObservabilityPage: FunctionComponent<ObservabilityPage> = ({
  breadcrumbs,
  headerLinks,
  navItem,
  children,
  pageTitle,
  globals,
  ...rest
}) => {
  const baseBreadcrumb: EuiBreadcrumb[] = [
    {
      text: 'Observability',
      onClick: breadcrumbs?.length
        ? () => navigate('/observability/overview')
        : undefined,
    },
  ];

  let theBreadcrumbs = baseBreadcrumb;
  if (breadcrumbs?.length) {
    theBreadcrumbs = baseBreadcrumb.concat(breadcrumbs);
  }

  const theHeaderLinks: ReactNode = (
    <EuiHeaderLinks>{headerLinks}</EuiHeaderLinks>
  );

  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs: theBreadcrumbs,
      headerLinks: theHeaderLinks,
      pageTitle: pageTitle || 'Observability',
    });
  }, [breadcrumbs, headerLinks]);

  let setGlobals;
  if (globals) {
    setGlobals = {
      filters: false,
      placeholder: 'Search transactions, errors and metrics...',
      prepend: (
        <EuiButtonEmpty iconType="arrowDown" iconSide="right">
          Production
        </EuiButtonEmpty>
      ),
      compressed: false,
    };

    if (globals !== true) {
      setGlobals = {
        ...setGlobals,
        ...globals,
      };
    }
  }

  return (
    <KibanaPage
      solutionNav={<ObservabilityNav navItem={navItem} />}
      globals={setGlobals}
      {...rest}>
      {children}
    </KibanaPage>
  );
};
