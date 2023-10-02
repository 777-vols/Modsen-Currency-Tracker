import React, { Component } from 'react';
import searchImg from '@assets/searchIcon.svg';
import constBanksList from '@constants/constBanksList';
import constCurrencyCardsData from '@constants/constCurrencyCardsData';

import { Container } from '@/styled';

import BankCardMap from './BankCardMap';
import config from './config';
import SearchResultItem from './SearchResultItem';
import {
  BankCardHeader,
  BankCardInput,
  BankCardInputWrapper,
  BankCardMapWrapper,
  BankCardWrapper,
  SearchInputImage,
  SearchResultWrapper
} from './styled';

const { header, placeholderValue, notFound } = config;

class BankCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCyrrency: {},
      currencies: [],
      searchResultElements: [],
      searchValue: '',
      banksCoords: []
    };
  }

  componentDidMount() {
    const currenciesList = Object.entries(constCurrencyCardsData.quotesCards).map((card) => ({
      shortName: card[0],
      fullName: card[1].name
    }));
    this.setState({ currencies: currenciesList });
  }

  elasticSearchHandle = (event) => {
    const { currencies } = this.state;
    this.setState({ searchValue: event.target.value });
    if (event.target.value !== '') {
      const searchResults = Object.values(currencies).filter((currency) => {
        const inputValue = event.target.value.toLowerCase();
        if (
          currency.shortName.toLowerCase().includes(inputValue) ||
          currency.fullName.toLowerCase().includes(inputValue)
        )
          return currency;
        return null;
      });
      if (searchResults.length === 0) {
        this.setState({ searchResultElements: [{ fullName: '', shortName: notFound }] });
      } else {
        this.setState({ searchResultElements: searchResults });
      }
    } else {
      this.setState({ searchResultElements: [] });
    }
  };

  handleCurrencySelection = (shortName) => {
    this.setState({ searchResultElements: [], searchValue: shortName });
    const banks = constBanksList.filter((bank) =>
      bank.currencies.includes(shortName.toLowerCase())
    );
    this.setState({ banksCoords: banks });
  };

  render() {
    const { searchResultElements, searchValue, banksCoords } = this.state;
    const searchResultComponets = searchResultElements.map(({ shortName, fullName }) => (
      <SearchResultItem
        key={shortName}
        shortName={shortName}
        fullName={fullName}
        handleClick={this.handleCurrencySelection}
      />
    ));
    return (
      <section>
        <Container>
          <BankCardWrapper>
            <BankCardHeader>{header}</BankCardHeader>
            <BankCardInputWrapper>
              <BankCardInput
                value={searchValue}
                onChange={this.elasticSearchHandle}
                placeholder={placeholderValue}
              />
              <SearchInputImage src={searchImg} />
              <SearchResultWrapper>{searchResultComponets}</SearchResultWrapper>
            </BankCardInputWrapper>
            <BankCardMapWrapper>
              <BankCardMap banksCoords={banksCoords} />
            </BankCardMapWrapper>
          </BankCardWrapper>
        </Container>
      </section>
    );
  }
}

export default BankCard;
