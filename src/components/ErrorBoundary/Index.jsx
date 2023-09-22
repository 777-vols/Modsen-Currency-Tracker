import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Global from '../../GlobalStyled';

import { ErrorPage, ErrorPageWrapper } from './styled';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPageWrapper>
          <Global />
          <ErrorPage />
        </ErrorPageWrapper>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};
export default ErrorBoundary;
