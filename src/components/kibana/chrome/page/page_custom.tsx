import React, { FunctionComponent } from 'react';

import { EuiPage, EuiPageProps } from '../../../eui/page/page_shim';

export type KibanaPageCustomProps = EuiPageProps;

export const KibanaPageCustom: FunctionComponent<KibanaPageCustomProps> = ({
  ...rest
}) => {
  return <EuiPage grow={true} paddingSize="none" {...rest} />;
};
