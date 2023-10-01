import React, { Component } from 'react';
import PortalCreator from '@components/PortalCreator';

import { NotificationSpan, NotificationWrapper } from './styled';

class Notification extends Component {
  render() {
    return (
      <PortalCreator wrapperId="timeline-notification">
        <NotificationWrapper id="timeline-notification">
          <NotificationSpan>The 30-day schedule has been successfully completed</NotificationSpan>
        </NotificationWrapper>
      </PortalCreator>
    );
  }
}

export default Notification;
