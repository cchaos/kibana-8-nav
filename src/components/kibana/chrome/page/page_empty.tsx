import React, { FunctionComponent } from 'react';

import { EuiEmptyPrompt, EuiEmptyPromptProps } from '@elastic/eui';

export type KibanaPageEmptyProps = EuiEmptyPromptProps;

export const KibanaPageEmpty: FunctionComponent<KibanaPageEmptyProps> = ({
  ...rest
}) => {
  return <EuiEmptyPrompt {...rest} />;
};
