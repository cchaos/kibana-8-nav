import { EuiPageHeader, EuiPageHeaderProps } from '@elastic/eui';
import React, { FunctionComponent } from 'react';

export type EuiDocsPageHeaderProps = EuiPageHeaderProps;

export const EuiDocsPageHeader: FunctionComponent<EuiDocsPageHeaderProps> = ({
  ...rest
}) => {
  return <EuiPageHeader {...rest} />;
};
