import React, { FunctionComponent } from 'react';

import { EuiPage, EuiPageProps } from '../../../eui/page/page_shim';

export type KibanaPageDefaultProps = EuiPageProps;

export const KibanaPageDefault: FunctionComponent<KibanaPageDefaultProps> = ({
  children,
  ...rest
}) => {
  return (
    <EuiPage grow={true} paddingSize="none" {...rest}>
      {children}
    </EuiPage>
  );
};
