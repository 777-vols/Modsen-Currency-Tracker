import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { AnswerFullname, AnswerShortName, AnswerWrapper } from './styled';

class SerachAnswer extends Component {
  handleClick = () => {
    this.props.handleClick(this.props.shortName);
  };

  render() {
    const { fullName, shortName, handleClick } = this.props;
    return (
      <AnswerWrapper onClick={this.handleClick}>
        <AnswerFullname>{fullName}</AnswerFullname>
        <AnswerShortName>{shortName}</AnswerShortName>
      </AnswerWrapper>
    );
  }
}
SerachAnswer.propTypes = {
  shortName: PropTypes.string,
  fullName: PropTypes.string,
  handleClick: PropTypes.func
};

export default SerachAnswer;
