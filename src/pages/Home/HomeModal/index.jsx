import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import Select from 'react-select';
import PortalCreator from '@components/PortalCreator';
import { constAllCurrenciesListMock } from '@constants/constCurrenciesMock';
import useOnClickOutside from '@hooks/useOnCickOutside';
import PropTypes from 'prop-types';

import config from './config';
import {
  Background,
  CloseButton,
  Header,
  InnerBlock,
  Panel,
  Result,
  SelectSpan,
  StyledInput,
  StyledSelect,
  StyledSpan,
  Window
} from './styled';

const { header, from, to, sum, result } = config;

function Modal({ closeModalWindow, convertFromTo, usdCourse }) {
  const [sumValue, setSumValue] = useState(1);
  const [convertToValue, setConvertToValue] = useState('usd');
  const { from: convertFrom } = convertFromTo;
  const converterRef = useRef();
  const handleInputType = useCallback((event) => setSumValue(event.target.value), []);

  const selectorHandler = useCallback(
    (selectedOption) => setConvertToValue(selectedOption.value),
    []
  );

  const handleCloseModal = useCallback(() => {
    closeModalWindow();
    setSumValue('1');
    setConvertToValue('usd');
  }, [closeModalWindow]);

  useOnClickOutside(converterRef, () => {
    handleCloseModal();
  });

  const convertCurrency = useMemo(
    () => ((1 / usdCourse[convertFrom]) * (1 * usdCourse[convertToValue]) * sumValue).toFixed(4),
    [convertFrom, convertToValue, sumValue, usdCourse]
  );

  return (
    <PortalCreator wrapperId="home-modal">
      <Background>
        <Window ref={converterRef}>
          <CloseButton onClick={handleCloseModal}>X</CloseButton>
          <Header>{header}</Header>
          <InnerBlock>
            <Panel>
              <SelectSpan>{sum}</SelectSpan>
              <StyledInput data-cy="homeModal-input" value={sumValue} onChange={handleInputType} />
            </Panel>
            <Panel>
              <SelectSpan>{from}</SelectSpan>
              <StyledSpan>{convertFrom}</StyledSpan>
            </Panel>
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
          </InnerBlock>
          <Result>
            {result} <span data-cy="converter-result">{usdCourse ? convertCurrency : ''}</span>
          </Result>
        </Window>
      </Background>
    </PortalCreator>
  );
}

Modal.propTypes = {
  closeModalWindow: PropTypes.func,
  convertFromTo: PropTypes.object,
  usdCourse: PropTypes.object
};

export default memo(Modal);
