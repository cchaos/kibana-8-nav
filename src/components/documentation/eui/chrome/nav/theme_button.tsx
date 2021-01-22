import React from 'react';
import { EuiButtonProps, EuiButton } from '@elastic/eui';
import ThemeContext from '../../../../../themes/ThemeContext';

export const EuiDocsThemeButton: React.FunctionComponent<EuiButtonProps> = ({
  ...props
}) => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <EuiButton
          size="s"
          color="text"
          iconType={context.theme === 'dark' ? 'faceSad' : 'faceHappy'}
          onClick={context.toggleDark}
          isLoading={context.themeIsLoading}
          {...props}>
          {context.theme === 'dark' ? 'Light theme' : 'Amsterdam - Light theme'}
        </EuiButton>
      )}
    </ThemeContext.Consumer>
  );
};
