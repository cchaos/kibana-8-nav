import React, { FunctionComponent } from 'react';

import { EuiEmptyPrompt, EuiEmptyPromptProps } from '@elastic/eui';

export type KibanaPageEmptyContentProps = EuiEmptyPromptProps;

export const KibanaPageEmptyContent: FunctionComponent<KibanaPageEmptyContentProps> = ({
  ...rest
}) => {
  return <EuiEmptyPrompt {...rest} />;
};
