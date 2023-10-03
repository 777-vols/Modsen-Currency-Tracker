import React, { Component } from 'react';
import PortalCreator from '@components/PortalCreator';

import config from './config';
import { Content, Wrapper } from './styled';

const { notification } = config;

class Notification extends Component {
  render() {
    return (
      <PortalCreator wrapperId="timeline-notification">
        <Wrapper id="timeline-notification">
          <Content>{notification}</Content>
        </Wrapper>
      </PortalCreator>
    );
  }
}

export default Notification;
