import React, { useMemo, useState } from 'react';
import Select from 'react-select';
import PortalCreator from '@components/PortalCreator';
import PropTypes from 'prop-types';

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

function Modal({ closeModalWindow, convertFromTo, allCurrenciesList, usdCourse }) {
  const [sumValue, setSumValue] = useState(1);
  const [convertToValue, setConvertToValue] = useState('usd');

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
    ((1 / usdCourse[convertFromTo.from]) * (1 * usdCourse[convertToValue]) * sumValue).toFixed(4);

  const memoizedConvertCurrency = useMemo(() => convertCurrency(), [sumValue]);

  return (
    <PortalCreator wrapperId="home-modal">
      <ModalBackground onClick={(e) => e.currentTarget === e.target && handleCloseModal()}>
        <ModalWindow>
          <CloseModalButton onClick={handleCloseModal}>X</CloseModalButton>
          <ModalHeader>Currency Converter</ModalHeader>
          <ModalInner>
            <StyledBlock>
              <SelectSpan>Sum</SelectSpan>
              <ModalStyledInput
                data-cy="homeModal-input"
                value={sumValue}
                onChange={handleInputType}
              />
            </StyledBlock>
            <StyledBlock>
              <SelectSpan>From</SelectSpan>
              <ModalStyledSpan>{convertFromTo.from}</ModalStyledSpan>
            </StyledBlock>
            <StyledSelect>
              <SelectSpan>To</SelectSpan>
              <Select
                id="homeModal-select"
                onChange={selectorHandler}
                defaultValue={{ value: convertToValue, label: convertToValue }}
                options={allCurrenciesList.map((currencyName) => ({
                  value: currencyName,
                  label: currencyName
                }))}></Select>
            </StyledSelect>
          </ModalInner>
          <Result>
            Result: <span id="converter-result">{usdCourse ? memoizedConvertCurrency : ''}</span>
          </Result>
        </ModalWindow>
      </ModalBackground>
    </PortalCreator>
  );
}

Modal.propTypes = {
  closeModalWindow: PropTypes.func,
  convertFromTo: PropTypes.object,
  allCurrenciesList: PropTypes.array,
  usdCourse: PropTypes.object
};

export default Modal;
