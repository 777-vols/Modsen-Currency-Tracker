import React, { Component } from 'react';
import searchImg from '@assets/search-normal.svg';
import banksList from '@constants/banksList';
import currencyCardsData from '@constants/currencyCardsData';

import { Container } from '../../styled';

import BankCardMap from './BankCardMap/Index';
import SerachAnswer from './SearchAnswer/Index';
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
    const currenciesList = Object.entries(currencyCardsData.quotesCards).map((card) => ({
      shortName: card[0],
      fullName: card[1].name
    }));
    this.setState({ currencies: currenciesList });
  }

  elasticSearchHandle = (event) => {
    this.setState({ searchValue: event.target.value });
    if (event.target.value !== '') {
      const answers = Object.values(this.state.currencies).filter((currency) => {
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
    const banks = banksList.filter((bank) => bank.currencies.includes(shortName.toLowerCase()));
    this.setState({ banksCoords: banks });
  };

  render() {
    const serchAnswersComponents = this.state.searchAnswers.map((answer, index) => (
      <SerachAnswer
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
                value={this.state.searchValue}
                onChange={this.elasticSearchHandle}
                placeholder="Currency search..."
              />
              <SearchInputImage src={searchImg} />
              <InputAnswersWrapper>{serchAnswersComponents}</InputAnswersWrapper>
            </BankCardInputWrapper>
            <BankCardMapWrapper>
              <BankCardMap banksCoords={this.state.banksCoords} />
            </BankCardMapWrapper>
          </BankCardWrapper>
        </Container>
      </section>
    );
  }
}

export default BankCard;
