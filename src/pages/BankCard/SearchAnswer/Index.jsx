import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AnswerFullname, AnswerShortName, AnswerWrapper } from './styled';

class SearchAnswer extends Component {
  handleClick = () => {
    const { fullName, shortName, handleClick } = this.props;
    if (fullName) {
      handleClick(shortName);
    }
  };

  render() {
    const { fullName, shortName } = this.props;
    return (
      <AnswerWrapper onClick={this.handleClick}>
        <AnswerFullname>{fullName}</AnswerFullname>
        <AnswerShortName>{shortName}</AnswerShortName>
      </AnswerWrapper>
    );
  }
}
SearchAnswer.propTypes = {
  shortName: PropTypes.string,
  fullName: PropTypes.string,
  handleClick: PropTypes.func
};

export default SearchAnswer;
