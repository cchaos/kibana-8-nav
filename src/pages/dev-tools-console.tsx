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
      restrictWidth={false}
      pageHeader={{
        tabs: [
          { label: 'Console', isSelected: true },
          { label: 'Search profiler' },
          { label: 'Grok debugger' },
          { label: 'Painless lab' },
        ],
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
