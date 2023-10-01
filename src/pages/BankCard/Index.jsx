import React, { Component } from 'react';
import searchImg from '@assets/searchIcon.svg';
import constBanksList from '@constants/constBanksList';
import constCurrencyCardsData from '@constants/constCurrencyCardsData';

import { Container } from '@/styled';

import BankCardMap from './BankCardMap';
import SearchAnswer from './SearchAnswer';
import {
  BankCardHeader,
  BankCardInput,
  BankCardInputWrapper,
  BankCardMapWrapper,
  BankCardWrapper,
  InputAnswersWrapper,
  SearchInputImage
} from './styled';

class BankCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCyrrency: {},
      currencies: [],
      searchAnswers: [],
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
      const answers = Object.values(currencies).filter((currency) => {
        const inputValue = event.target.value.toLowerCase();
        if (
          currency.shortName.toLowerCase().includes(inputValue) ||
          currency.fullName.toLowerCase().includes(inputValue)
        )
          return currency;
        return null;
      });
      if (answers.length === 0) {
        this.setState({ searchAnswers: [{ fullName: '', shortName: 'Nothing found...' }] });
      } else {
        this.setState({ searchAnswers: answers });
      }
    } else {
      this.setState({ searchAnswers: [] });
    }
  };

  handleCurrencySelection = (shortName) => {
    this.setState({ searchAnswers: [], searchValue: shortName });
    const banks = constBanksList.filter((bank) =>
      bank.currencies.includes(shortName.toLowerCase())
    );
    this.setState({ banksCoords: banks });
  };

  render() {
    const { searchAnswers, searchValue, banksCoords } = this.state;
    const searchAnswersComponents = searchAnswers.map((answer, index) => (
      <SearchAnswer
        key={index}
        shortName={answer.shortName}
        fullName={answer.fullName}
        handleClick={this.handleCurrencySelection}
      />
    ));
    return (
      <section>
        <Container>
          <BankCardWrapper>
            <BankCardHeader>Search currency in the bank</BankCardHeader>
            <BankCardInputWrapper>
              <BankCardInput
                value={searchValue}
                onChange={this.elasticSearchHandle}
                placeholder="Currency search..."
              />
              <SearchInputImage src={searchImg} />
              <InputAnswersWrapper>{searchAnswersComponents}</InputAnswersWrapper>
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
