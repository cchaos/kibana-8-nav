import React, {
  ReactNode,
  FunctionComponent,
  createContext,
  useState,
} from 'react';
import { DocsChrome } from './chrome/chrome';

interface DocsChromeContextShape {
  chrome?: DocsChrome;
  setChrome: React.Dispatch<
    React.SetStateAction<DocsChromeContextShape['chrome']>
  >;
}

export const DocsChromeContext = createContext<DocsChromeContextShape>({
  chrome: {
    breadcrumbs: [
      {
        text: 'Documentation',
      },
      {
        text: 'Product Design',
      },
    ],
    pageTitle: 'Product Design',
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setChrome: () => {},
});

const DocsLayout: FunctionComponent<{
  children?: ReactNode;
}> = ({ children }) => {
  const [chromeOptions, setChromeOptions] = useState({
    breadcrumbs: [
      {
        text: 'Documentation',
      },
      {
        text: 'Product Design',
      },
    ],
    pageTitle: 'Product Design',
  });

  return (
    <DocsChromeContext.Provider
      // @ts-ignore
      value={{ chrome: chromeOptions, setChrome: setChromeOptions }}>
      <DocsChrome {...chromeOptions}>{children}</DocsChrome>
    </DocsChromeContext.Provider>
  );
};

export default DocsLayout;
