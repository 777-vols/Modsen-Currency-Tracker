import PortalCreator from '@components/PortalCreator';
import React, { Component } from 'react';

import config from './config';
import { Content, Wrapper } from './styled';

const { notification } = config;

class Notification extends Component {
  render() {
    return (
      <PortalCreator wrapperId="timeline-notification">
        <Wrapper data-cy="timeline-notification">
          <Content>{notification}</Content>
        </Wrapper>
      </PortalCreator>
    );
  }
}

export default Notification;
