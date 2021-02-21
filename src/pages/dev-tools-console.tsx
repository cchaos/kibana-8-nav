import React, { useContext, useEffect } from 'react';

import { EuiBreadcrumb, EuiButton, EuiTab, EuiTabs } from '@elastic/eui';
import { KibanaChromeContext } from '../components/kibana/layout';
import { KibanaPage } from '../components/kibana/chrome/page/page';

// @ts-ignore
import consoleImg from '../images/Dev Tools - Console.png';

const breadcrumbs: EuiBreadcrumb[] = [
  {
    text: 'Dev Tools',
  },
];

export default () => {
  const setKibanaContext = useContext(KibanaChromeContext);

  useEffect(() => {
    setKibanaContext.setChrome({
      breadcrumbs,
      pageTitle: 'Dev tools | Console',
      fullHeight: true,
    });
  }, [breadcrumbs]);

  return (
    <KibanaPage
      style={{ overflow: 'hidden' }}
      pageContentProps={{
        style: {
          overflow: 'auto',
        },
      }}
      restrictWidth={false}
      pageHeader={{
        leftSideContent: (
          <EuiTabs display="condensed">
            <EuiTab isSelected>Console</EuiTab>
            <EuiTab>Search profiler</EuiTab>
            <EuiTab>Grok debugger</EuiTab>
            <EuiTab>Painless lab</EuiTab>
          </EuiTabs>
        ),
      }}
      bottomBar={
        <>
          <EuiButton size="s" color="ghost" minWidth={0}>
            History
          </EuiButton>
          &emsp;
          <EuiButton size="s" color="ghost" minWidth={0}>
            Settings
          </EuiButton>
          &emsp;
          <EuiButton size="s" color="ghost" minWidth={0}>
            Help
          </EuiButton>
        </>
      }>
      {/** TODO: How to afford for bottom bar displacement outside of body */}
      <div className="pageScreenshot__TBD" style={{ paddingBottom: 72 }}>
        <img
          className="pageScreenshot pageScreenshot--fullWidth"
          alt="Dev Tools / Console"
          width={1341}
          src={consoleImg}
        />
      </div>
    </KibanaPage>
  );
};
