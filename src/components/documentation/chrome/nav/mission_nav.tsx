import React, { ReactElement } from 'react';
import { navigate } from 'gatsby';

import {
  EuiCollapsibleNavGroup,
  EuiListGroupProps,
  EuiListGroup,
} from '@elastic/eui';

const deploymentsList: EuiListGroupProps['listItems'] = [
  // {
  //   label: 'Elastic Observability',
  //   iconType: 'logoObservability',
  //   size: 's',
  // },
  // {
  //   label: 'Elastic Security',
  //   iconType: 'logoSecurity',
  //   size: 's',
  // },
  {
    label: 'Product Design',
    iconType: 'glasses',
    onClick: () => navigate('documentation'),
  },
];

export type DocsMissionNavProps = {
  currentItem: string;
};

export function DocsMissionNav({
  currentItem,
}: DocsMissionNavProps): ReactElement {
  const getCurrent = deploymentsList?.find(
    (option) => option.label === currentItem
  );

  return (
    <EuiCollapsibleNavGroup
      title={
        <span>
          <small style={{ fontWeight: 'normal' }}>Mission</small> <br />
          <strong>{getCurrent?.label}</strong>
        </span>
      }
      iconType={getCurrent?.iconType}
      iconSize="xl"
      isCollapsible={true}
      initialIsOpen={false}
      background="dark">
      <div role="group" className="kibanaNavDeployment__content">
        <EuiListGroup size="s" listItems={deploymentsList} flush />
      </div>
    </EuiCollapsibleNavGroup>
  );
}
