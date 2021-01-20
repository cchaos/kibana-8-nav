import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import { EuiPage, EuiEmptyPrompt, EuiButton } from '@elastic/eui';

const NotFoundPage = () => (
  <EuiPage restrictWidth>
    <EuiEmptyPrompt
      iconType="faceSad"
      title={<h2>Ack! There&apos;s nothing here.</h2>}
      body={
        <Fragment>
          <p>You found a page that doesn&apos;t exist.</p>
        </Fragment>
      }
      actions={
        <Link to="/">
          <EuiButton color="primary" fill>
            Go Home
          </EuiButton>
        </Link>
      }
    />
  </EuiPage>
);

export default NotFoundPage;
