import searchImg from '@assets/search-normal.svg';
import currencyCardsData from '@constants/currencyCardsData';
import React, { Component } from 'react';

import { Container } from '../../styled';
import BanckCardMap from './BanckCardMap/Index';
import SerachAnswer from './SearchAnswer/Index';
import {
  BankCardHeader,
  BankCardHeaderWrapper,
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
      searchValue: ''
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
    this.setState({ value: event.target.value });
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
      this.setState({ searchAnswers: answers });
    } else {
      this.setState({ searchAnswers: [] });
    }
  };

  handleCurrencySelection = (shortName) => {
    this.setState({ searchAnswers: [], value: shortName });
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
            <BankCardHeaderWrapper>
              <BankCardHeader>Search currency in the bank</BankCardHeader>
              <BankCardInputWrapper>
                <BankCardInput
                  value={this.state.value}
                  onChange={this.elasticSearchHandle}
                  placeholder="Currency search..."
                />
                <SearchInputImage src={searchImg} />
                <InputAnswersWrapper>{serchAnswersComponents}</InputAnswersWrapper>
              </BankCardInputWrapper>
            </BankCardHeaderWrapper>
            <BankCardMapWrapper>
              <BanckCardMap />
            </BankCardMapWrapper>
          </BankCardWrapper>
        </Container>
      </section>
    );
  }
}

export default BankCard;
