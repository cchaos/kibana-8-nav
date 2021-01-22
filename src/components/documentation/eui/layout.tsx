import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useState,
} from 'react';
import { EuiDocsChrome } from './chrome/chrome';

interface EuiChromeContextShape {
  chrome?: EuiDocsChrome;
  setChrome: React.Dispatch<
    React.SetStateAction<EuiChromeContextShape['chrome']>
  >;
}

export const EuiChromeContext = createContext<EuiChromeContextShape>({
  chrome: {
    pageTitle: 'Home',
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setChrome: () => {},
});

const EuiDocsLayout: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  const [chromeOptions, setChromeOptions] = useState({
    pageTitle: 'Home',
  });

  return (
    <EuiChromeContext.Provider
      // @ts-ignore
      value={{ chrome: chromeOptions, setChrome: setChromeOptions }}>
      <EuiDocsChrome {...chromeOptions}>{children}</EuiDocsChrome>
    </EuiChromeContext.Provider>
  );
};

export default EuiDocsLayout;
