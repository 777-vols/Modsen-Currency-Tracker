import React, { Component } from 'react';
import PortalCreator from '@components/PortalCreator';

import config from './config';
import { NotificationSpan, NotificationWrapper } from './styled';

const { notification } = config;

class Notification extends Component {
  render() {
    return (
      <PortalCreator wrapperId="timeline-notification">
        <NotificationWrapper id="timeline-notification">
          <NotificationSpan>{notification}</NotificationSpan>
        </NotificationWrapper>
      </PortalCreator>
    );
  }
}

export default Notification;
