import React from 'react';
import { createPortal } from 'react-dom';

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

function Modal({ closeWindow, parentEl }) {
  return createPortal(
    <ModalBackground>
      <ModalWindow>
        <CloseModalButton onClick={closeWindow}>X</CloseModalButton>
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
    </ModalBackground>,
    parentEl
  );
}

export default Modal;
