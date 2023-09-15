import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Modal from '../Modal/Index';
import {
  CardInner,
  CardWrapper,
  CarrencyImage,
  CarrencyName,
  CurrencyRate,
  CurrencyStats
} from './styled';

const modal = document.querySelector('#modal');

function CurrencyCard({ firstVal, name, currencyImg }) {
  const [open, setOpen] = useState(false);
  const [element, setElement] = useState('');

  useEffect(() => {
    setElement(document.createElement('div'));
  }, []);
  useEffect(() => {
    if (open) modal.appendChild(element);
  });

  function openCloseWindow() {
    setOpen(!open);
  }

  if (open) {
    return <Modal closeWindow={openCloseWindow} parentEl={element} />;
  }

  return (
    <CardWrapper id={`card-${firstVal}`} onClick={openCloseWindow}>
      <CardInner>
        <CarrencyImage src={currencyImg} />
        <CurrencyStats>
          <CarrencyName>{name}</CarrencyName>
          <CurrencyRate>R$ 5,43</CurrencyRate>
        </CurrencyStats>
      </CardInner>
    </CardWrapper>
  );
}

CurrencyCard.propTypes = {
  firstVal: PropTypes.string,
  name: PropTypes.string,
  sign: PropTypes.string,
  currencyImg: PropTypes.string
};

export default CurrencyCard;
