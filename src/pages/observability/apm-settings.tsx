import React from 'react';

import { EuiEmptyPrompt, EuiButton, EuiBreadcrumb } from '@elastic/eui';

import { ObservabilityPage } from '../../components/kibana/observability/page';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'APM',
    href: '#',
  },
  {
    text: 'Settings',
  },
];

export default () => (
  <>
    <ObservabilityPage
      template="centeredContent"
      pageTitle="APM Settings"
      headerLinks={<></>}
      breadcrumbs={breadcrumbs}
      navItem="Agent configuration">
      <EuiEmptyPrompt
        iconType="minusInCircle"
        title={<h1>No configurations found</h1>}
        body={
          <p>
            {"Let's"} change that! You can fine-tune agent configuration
            directly from Kibana without having to redeploy. Get started by
            creating your first configuration.
          </p>
        }
        actions={<EuiButton fill>Create configuration</EuiButton>}
      />
    </ObservabilityPage>
  </>
);
