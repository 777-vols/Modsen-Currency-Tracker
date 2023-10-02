import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SearchResultFullname, SearchResultShortName, SearchResultWrapper } from './styled';

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
      <SearchResultWrapper onClick={this.handleClick}>
        <SearchResultFullname>{fullName}</SearchResultFullname>
        <SearchResultShortName>{shortName}</SearchResultShortName>
      </SearchResultWrapper>
    );
  }
}
SearchResultItem.propTypes = {
  shortName: PropTypes.string,
  fullName: PropTypes.string,
  handleClick: PropTypes.func
};

export default SearchResultItem;
