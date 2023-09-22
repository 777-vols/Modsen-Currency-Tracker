import React from 'react';

import circleImg from '@assets/circleAnimation.svg';

import { CircleAnimation, LastUpadateSpan, LastUpadateWrapper } from './styled';

function LastUpadate() {
  function currentDate() {
    const date = new Date(+localStorage.getItem('localStorageInitTime'));
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes}${ampm}`;
  }

  return (
    <LastUpadateWrapper>
      <CircleAnimation src={circleImg} />
      <LastUpadateSpan>Last updated at {currentDate()}</LastUpadateSpan>
    </LastUpadateWrapper>
  );
}

export default LastUpadate;
