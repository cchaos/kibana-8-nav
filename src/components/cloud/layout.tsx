import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useState,
} from 'react';

import { useHasMounted } from '../hasMounted';

import { CloudChrome } from './chrome/chrome';

interface CloudChromeContextShape {
  chrome?: CloudChrome;
  setChrome: React.Dispatch<
    React.SetStateAction<CloudChromeContextShape['chrome']>
  >;
}

export const CloudChromeContext = createContext<CloudChromeContextShape>({
  chrome: {
    breadcrumbs: [
      {
        text: 'Overview',
      },
    ],
    pageTitle: 'Overview',
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setChrome: () => {},
});

const CloudLayout: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  const hasMounted = useHasMounted();

  const [chromeOptions, setChromeOptions] = useState({
    breadcrumbs: [
      {
        text: 'Overview',
      },
    ],
    pageTitle: 'Overview',
  });

  if (!hasMounted) {
    return null;
  }

  return (
    <CloudChromeContext.Provider
      // @ts-ignore
      value={{ chrome: chromeOptions, setChrome: setChromeOptions }}>
      <CloudChrome {...chromeOptions}>{children}</CloudChrome>
    </CloudChromeContext.Provider>
  );
};

export default CloudLayout;
