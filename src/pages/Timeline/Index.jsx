import React, { Component } from 'react';
import Select from 'react-select';
import constCurrencyCardsData from '@constants/constCurrencyCardsData';
import * as allThemes from '@constants/themes';
import {
  isHighInputValueIncorrect,
  isLowPriceInputValueIncorrect
} from '@helpers/isPriceInputValueIncorrectHelper';
import observer from '@observer/observer';

import { Container } from '@/styled';

import TimelineChartSchedule from './ChartSchedule';
import config from './config';
import TimeLineCurrencyCard from './CurrrencyCard';
import TimelineModal from './ModalWindow';
import {
  ModalOpenButton,
  PanelWrapper,
  Schedule,
  ScheduleWrapper,
  SelectWrapper,
  Wrapper
} from './styled';

const { buttonValue } = config;
const { quotesCards } = constCurrencyCardsData;

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimelineCurrency: 'USD',
      timelineCurrencyCard: quotesCards.USD,
      modalInputsData: {},
      sheduleData: {},
      modalIsOpen: false,
      warningIsActive: false
    };
  }

  setModalInputsDataLow = (inputDay, inputValue) => {
    const { modalInputsData } = this.state;
    if (isLowPriceInputValueIncorrect(inputValue, modalInputsData, inputDay)) {
      return;
    }
    this.setState((prevState) => ({
      modalInputsData: {
        ...prevState.modalInputsData,
        [inputDay]: { ...modalInputsData[inputDay], lowPrice: inputValue }
      }
    }));
  };

  setModalInputsDataHigh = (inputDay, inputValue) => {
    const { modalInputsData } = this.state;
    if (isHighInputValueIncorrect(inputValue)) {
      return;
    }
    this.setState((prevState) => ({
      modalInputsData: {
        ...prevState.modalInputsData,
        [inputDay]: { ...modalInputsData[inputDay], highPrice: inputValue }
      }
    }));
  };

  setModalIsOpen = () => {
    this.setState(({ modalIsOpen }) => ({
      modalIsOpen: !modalIsOpen
    }));
  };

  clearAllInputsValues = () => {
    this.setState({ modalInputsData: {} });
  };

  createSheduleHandler = () => {
    const { modalIsOpen, modalInputsData } = this.state;
    const correctInputsForDay = Object.values(modalInputsData).filter((value) => {
      const dayValuesArray = Object.values(value);
      if (
        dayValuesArray[0] !== '' &&
        dayValuesArray[1] !== '' &&
        Number(dayValuesArray[1] >= 100)
      ) {
        return value;
      }
      return null;
    });
    if (modalIsOpen && observer.checkNumberOfFilledDays(correctInputsForDay)) {
      this.setState((prevState) => ({
        sheduleData: { ...prevState.modalInputsData },
        modalIsOpen: false
      }));
    } else {
      this.setState({ warningIsActive: true });
      setTimeout(() => this.setState({ warningIsActive: false }), 3000);
    }
  };

  setTimelineCurrency = (selectedOption) => {
    this.setState({
      currentTimelineCurrency: selectedOption.value,
      timelineCurrencyCard: quotesCards[selectedOption.value],
      modalInputsData: {}
    });
  };

  selectOptionsList = Object.keys(quotesCards).reduce(
    (accum, element) => [
      ...accum,
      {
        value: element,
        label: quotesCards[element].name
      }
    ],
    []
  );

  colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'transparent',
      color: 'inherit',
      cursor: 'pointer'
    }),
    option: (styles) => {
      const styleObject = {
        ...styles,
        color: allThemes.lightTheme.color,
        cursor: 'pointer'
      };
      return styleObject;
    },
    singleValue: (provided) => ({
      ...provided,
      color: 'inherit',
      cursor: 'pointer'
    })
  };

  render() {
    const { currentTimelineCurrency, sheduleData, warningIsActive, modalIsOpen, modalInputsData } =
      this.state;
    const { name: currencyFullName, img: currencyImg } = this.state.timelineCurrencyCard;
    return (
      <section>
        <Container>
          <Wrapper>
            <PanelWrapper>
              <SelectWrapper>
                <Select
                  id="timeline-select"
                  styles={this.colourStyles}
                  onChange={this.setTimelineCurrency}
                  defaultValue={this.selectOptionsList[0]}
                  options={this.selectOptionsList}></Select>
              </SelectWrapper>
              <ModalOpenButton id="enter-values" onClick={this.setModalIsOpen}>
                {buttonValue}
              </ModalOpenButton>
            </PanelWrapper>
            <ScheduleWrapper>
              <TimeLineCurrencyCard
                currencyShortName={currentTimelineCurrency}
                currencyFullName={currencyFullName}
                currencyImg={currencyImg}
              />
              <Schedule>
                <TimelineChartSchedule modalData={sheduleData} />
              </Schedule>
            </ScheduleWrapper>
          </Wrapper>
        </Container>
        {modalIsOpen && (
          <TimelineModal
            warningIsActive={warningIsActive}
            closeModalWindow={this.setModalIsOpen}
            clearAllInputsValues={this.clearAllInputsValues}
            createSheduleHandler={this.createSheduleHandler}
            handleInputLow={this.setModalInputsDataLow}
            handleInputHigh={this.setModalInputsDataHigh}
            inputsData={modalInputsData}
          />
        )}
      </section>
    );
  }
}

export default Timeline;
