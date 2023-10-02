import React, { useMemo, useState } from 'react';
import Select from 'react-select';
import PortalCreator from '@components/PortalCreator';
import { constAllCurrenciesListMock } from '@constants/constCurrenciesMock';
import PropTypes from 'prop-types';

import config from './config';
import {
  CloseModalButton,
  ModalBackground,
  ModalHeader,
  ModalInner,
  ModalStyledInput,
  ModalStyledSpan,
  ModalWindow,
  Result,
  SelectSpan,
  StyledBlock,
  StyledSelect
} from './styled';

const { header, from, to, sum, result } = config;

function Modal({ closeModalWindow, convertFromTo, usdCourse }) {
  const [sumValue, setSumValue] = useState(1);
  const [convertToValue, setConvertToValue] = useState('usd');
  const { from: convertFrom } = convertFromTo;

  function handleInputType(event) {
    setSumValue(event.target.value);
  }

  function selectorHandler(selectedOption) {
    setConvertToValue(selectedOption.value);
  }

  function handleCloseModal() {
    closeModalWindow();
    setSumValue('1');
    setConvertToValue('usd');
  }

  const convertCurrency = () =>
    ((1 / usdCourse[convertFrom]) * (1 * usdCourse[convertToValue]) * sumValue).toFixed(4);

  const memoizedConvertCurrency = useMemo(() => convertCurrency(), [sumValue, convertToValue]);
  return (
    <PortalCreator wrapperId="home-modal">
      <ModalBackground onClick={(e) => e.currentTarget === e.target && handleCloseModal()}>
        <ModalWindow>
          <CloseModalButton onClick={handleCloseModal}>X</CloseModalButton>
          <ModalHeader>{header}</ModalHeader>
          <ModalInner>
            <StyledBlock>
              <SelectSpan>{sum}</SelectSpan>
              <ModalStyledInput
                data-cy="homeModal-input"
                value={sumValue}
                onChange={handleInputType}
              />
            </StyledBlock>
            <StyledBlock>
              <SelectSpan>{from}</SelectSpan>
              <ModalStyledSpan>{convertFrom}</ModalStyledSpan>
            </StyledBlock>
            <StyledSelect>
              <SelectSpan>{to}</SelectSpan>
              <Select
                id="homeModal-select"
                onChange={selectorHandler}
                defaultValue={{ value: convertToValue, label: convertToValue }}
                options={constAllCurrenciesListMock.map((currencyName) => ({
                  value: currencyName,
                  label: currencyName
                }))}></Select>
            </StyledSelect>
          </ModalInner>
          <Result>
            {result} <span id="converter-result">{usdCourse ? memoizedConvertCurrency : ''}</span>
          </Result>
        </ModalWindow>
      </ModalBackground>
    </PortalCreator>
  );
}

Modal.propTypes = {
  closeModalWindow: PropTypes.func,
  convertFromTo: PropTypes.object,
  usdCourse: PropTypes.object
};

export default Modal;
