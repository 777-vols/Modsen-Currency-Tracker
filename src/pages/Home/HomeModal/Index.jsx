import PortalCreator from '@helpers/createPortalHelper';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  CloseModalButton,
  ModalBackground,
  ModalHeader,
  ModalStyledInput,
  ModalStyledSpan,
  ModalWindow,
  Result,
  SelectBlock,
  SelectSpan,
  SelectWrapper,
  StyledSelect
} from './styled';

function Modal({ isOpen, closeModalWindow, convertFromTo, allCurrenciesList, usdCourse }) {
  const [sumValue, setSumValue] = useState(1);
  const [convertToValue, setConvertToValue] = useState('usd');

  function handleInputType(event) {
    setSumValue(event.target.value);
  }

  function selectorHandler(event) {
    setConvertToValue(event.target.value);
  }
  const convertCurrency = () =>
    ((1 / usdCourse[convertFromTo.from]) * (1 * usdCourse[convertToValue]) * sumValue).toFixed(4);

  if (!isOpen) return null;
  return (
    <PortalCreator wrapperId="home-modal">
      <ModalBackground>
        <ModalWindow>
          <CloseModalButton onClick={closeModalWindow}>X</CloseModalButton>
          <ModalHeader>Currency Converter</ModalHeader>
          <SelectWrapper>
            <SelectBlock>
              <SelectSpan>Sum</SelectSpan>
              <ModalStyledInput value={sumValue} onChange={handleInputType} />
            </SelectBlock>
            <SelectBlock>
              <SelectSpan>From</SelectSpan>
              <ModalStyledSpan>{convertFromTo.from}</ModalStyledSpan>
            </SelectBlock>
            <SelectBlock>
              <SelectSpan>To</SelectSpan>
              <StyledSelect value={convertToValue} onChange={selectorHandler}>
                {allCurrenciesList.map((currencyName) => (
                  <option key={currencyName} value={currencyName}>
                    {currencyName}
                  </option>
                ))}
              </StyledSelect>
            </SelectBlock>
          </SelectWrapper>
          <Result>Result: {usdCourse ? convertCurrency() : ''}</Result>
        </ModalWindow>
      </ModalBackground>
    </PortalCreator>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  closeModalWindow: PropTypes.func,
  convertFromTo: PropTypes.object,
  allCurrenciesList: PropTypes.array,
  usdCourse: PropTypes.object
};

export default Modal;
