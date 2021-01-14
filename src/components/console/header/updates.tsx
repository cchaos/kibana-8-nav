import React, { FunctionComponent, Fragment, useState } from 'react';

import { EuiIcon, EuiHeaderSectionItemButton } from '@elastic/eui';

import { EuiHeaderAlertFlyout } from '../../eui/header';
import { updates } from '../../kibana/_data';

export const ConsoleUpdates: FunctionComponent = () => {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const closeFlyout = () => {
    setIsFlyoutVisible(false);
  };

  const toggleFlyout = () => {
    setIsFlyoutVisible(!isFlyoutVisible);
    setShowNotification(false);
  };

  const button = (
    <EuiHeaderSectionItemButton
      aria-controls="headerNewsFeed"
      aria-expanded={isFlyoutVisible}
      aria-haspopup="true"
      aria-label="News feed"
      notification={showNotification ? '•' : undefined}
      onClick={toggleFlyout}>
      <EuiIcon type="email" size="m" />
    </EuiHeaderSectionItemButton>
  );

  let flyout;
  if (isFlyoutVisible) {
    flyout = (
      <EuiHeaderAlertFlyout
        id="headerNewsFeed"
        alerts={updates}
        version="Version 8.0"
        onClose={closeFlyout}
      />
    );
  }

  return (
    <Fragment>
      {button}
      {flyout}
    </Fragment>
  );
};
