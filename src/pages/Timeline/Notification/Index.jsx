import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PortalCreator from '@helpers/createPortalHelper';

import { NotificationSpan, NotificationWrapper } from './styled';

class Notification extends Component {
  render() {
    if (!this.props.isOpen) return null;
    return (
      <PortalCreator wrapperId="timeline-notification">
        <NotificationWrapper id="timeline-notification">
          <NotificationSpan>The 30-day schedule has been successfully completed</NotificationSpan>
        </NotificationWrapper>
      </PortalCreator>
    );
  }
}

Notification.propTypes = {
  isOpen: PropTypes.bool
};

export default Notification;
