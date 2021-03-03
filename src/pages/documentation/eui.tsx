/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { EuiPageContent, EuiPage, EuiPageBody } from '@elastic/eui';

export default () => (
  <EuiPage restrictWidth>
    <EuiPageBody>
      <EuiPageContent />
    </EuiPageBody>
  </EuiPage>
);
