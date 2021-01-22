import React, { FunctionComponent } from 'react';
import {
  EuiPageHeaderProps,
  EuiPageHeader,
} from '../../../../eui/page/page_header_shim';

export type EuiDocsPageHeaderProps = EuiPageHeaderProps;

export const EuiDocsPageHeader: FunctionComponent<EuiDocsPageHeaderProps> = ({
  ...rest
}) => {
  return <EuiPageHeader {...rest} />;
};
