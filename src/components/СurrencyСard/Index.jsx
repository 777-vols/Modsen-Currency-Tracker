import React, { useEffect, useState } from 'react';

import currencyImg from '../../assets/Currencies/Euro Icon.svg';
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

function CurrencyCard() {
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
    <CardWrapper onClick={openCloseWindow}>
      <CardInner>
        <CarrencyImage src={currencyImg} />
        <CurrencyStats>
          <CarrencyName>Euro</CarrencyName>
          <CurrencyRate>R$ 5,43</CurrencyRate>
        </CurrencyStats>
      </CardInner>
    </CardWrapper>
  );
}

export default CurrencyCard;
