import React, { Component } from 'react';
import searchImg from '@assets/searchIcon.svg';
import constBanksList from '@constants/constBanksList';
import constCurrencyCardsData from '@constants/constCurrencyCardsData';
import elasticSearchHelper from '@helpers/elasticSearchHelper';

import { Container } from '@/styled';

import BankCardMap from './BankCardMap';
import config from './config';
import SearchResultItem from './SearchResultItem';
import {
  Header,
  Input,
  InputWrapper,
  MapWrapper,
  SearchInputImage,
  SearchResultWrapper,
  Wrapper
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
    elasticSearchHelper(event, currencies, notFound, this.setState.bind(this));
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
          <Wrapper>
            <Header>{header}</Header>
            <InputWrapper>
              <Input
                value={searchValue}
                onChange={this.elasticSearchHandle}
                placeholder={placeholderValue}
              />
              <SearchInputImage src={searchImg} />
              <SearchResultWrapper>{searchResultComponets}</SearchResultWrapper>
            </InputWrapper>
            <MapWrapper>
              <BankCardMap banksCoords={banksCoords} />
            </MapWrapper>
          </Wrapper>
        </Container>
      </section>
    );
  }
}

export default BankCard;
