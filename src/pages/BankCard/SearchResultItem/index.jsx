import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Fullname, ShortName, Wrapper } from './styled';

class SearchResultItem extends Component {
  handleClick = () => {
    const { fullName, shortName, handleClick } = this.props;
    if (fullName) {
      handleClick(shortName);
    }
  };

  render() {
    const { fullName, shortName } = this.props;
    return (
      <Wrapper onClick={this.handleClick}>
        <Fullname>{fullName}</Fullname>
        <ShortName>{shortName}</ShortName>
      </Wrapper>
    );
  }
}

SearchResultItem.propTypes = {
  shortName: PropTypes.string,
  fullName: PropTypes.string,
  handleClick: PropTypes.func
};

export default SearchResultItem;
