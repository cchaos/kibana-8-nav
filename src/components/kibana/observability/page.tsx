import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import { EuiBreadcrumb, EuiHeaderLinks } from '@elastic/eui';
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

  return (
    <KibanaPage solutionNav={<ObservabilityNav navItem={navItem} />} {...rest}>
      {children}
    </KibanaPage>
  );
};
