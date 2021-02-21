import React, { FunctionComponent } from 'react';

import {
  EuiEmptyPrompt,
  EuiEmptyPromptProps,
  EuiPageContent,
} from '@elastic/eui';

export type KibanaPageEmptyProps = EuiEmptyPromptProps;

export const KibanaPageEmpty: FunctionComponent<KibanaPageEmptyProps> = ({
  ...rest
}) => {
  return (
    <EuiPageContent verticalPosition="center" horizontalPosition="center">
      <EuiEmptyPrompt {...rest} />
    </EuiPageContent>
  );
};
