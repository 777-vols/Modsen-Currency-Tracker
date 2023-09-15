import PortalCreator from '@helpers/createPortalHelper';
import PropTypes from 'prop-types';
import React from 'react';

import {
  CloseModalButton,
  ModalBackground,
  ModalHeader,
  ModalWindow,
  Result,
  SelectBlock,
  SelectSpan,
  SelectWrapper,
  StyledSelect
} from './styled';

function Modal({ isOpen, closeModalWindow }) {
  if (!isOpen) return null;
  return (
    <PortalCreator wrapperId="currency-modal">
      <ModalBackground>
        <ModalWindow>
          <CloseModalButton onClick={closeModalWindow}>X</CloseModalButton>
          <ModalHeader>Currency Converter</ModalHeader>
          <SelectWrapper>
            <SelectBlock>
              <SelectSpan>Amount of currency</SelectSpan>
              <StyledSelect></StyledSelect>
            </SelectBlock>
            <SelectBlock>
              <SelectSpan>From</SelectSpan>
              <StyledSelect></StyledSelect>
            </SelectBlock>
            <SelectBlock>
              <SelectSpan>To</SelectSpan>
              <StyledSelect></StyledSelect>
            </SelectBlock>
          </SelectWrapper>
          <Result>Result: </Result>
        </ModalWindow>
      </ModalBackground>
    </PortalCreator>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  closeModalWindow: PropTypes.func
};

export default Modal;
