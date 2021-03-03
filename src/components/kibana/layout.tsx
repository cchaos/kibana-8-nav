import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useState,
} from 'react';
import { KibanaChrome } from './chrome/chrome';

export interface KibanaChromeContextShape {
  chrome?: KibanaChrome;
  setChrome: React.Dispatch<
    React.SetStateAction<KibanaChromeContextShape['chrome']>
  >;
}

export const KibanaChromeContext = createContext<KibanaChromeContextShape>({
  chrome: {
    breadcrumbs: [
      {
        text: 'Home',
      },
    ],
    headerLinks: [],
    pageTitle: 'Home',
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setChrome: () => {},
});

const Layout: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  const [chromeOptions, setChromeOptions] = useState({
    breadcrumbs: [
      {
        text: 'Home',
      },
    ],
    headerLinks: [],
    pageTitle: 'Home',
    saved: false,
  });

  return (
    <KibanaChromeContext.Provider
      // @ts-ignore
      value={{ chrome: chromeOptions, setChrome: setChromeOptions }}>
      <KibanaChrome {...chromeOptions}>{children}</KibanaChrome>
    </KibanaChromeContext.Provider>
  );
};

export default Layout;
