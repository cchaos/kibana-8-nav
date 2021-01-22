import React from 'react';
import { Link } from 'gatsby';
import { EuiBreadcrumb } from '@elastic/eui';
import { CloudPage } from '../../components/cloud/page';

// @ts-ignore
import cloudImg from '../../images/Cloud - Home.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Overview',
  },
];

export default () => {
  return (
    <CloudPage
      pageTitle="Cloud"
      breadcrumbs={breadcrumbs}
      hasPageContent={false}>
      <div className="eui-textCenter">
        <Link className="pageScreenshot__TBD" to="cloud/deployments">
          <img
            className="pageScreenshot pageScreenshot--fullWidth"
            alt="Cloud overview"
            width={1638}
            src={cloudImg}
          />
        </Link>
      </div>
    </CloudPage>
  );
};
