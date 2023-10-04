import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Global from '@/GlobalStyled';

import { Content, Wrapper } from './styled';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Wrapper>
          <Global />
          <Content />
        </Wrapper>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};
export default ErrorBoundary;
