import React from 'react';
import circleImg from '@assets/LastUpdateIcons/small.svg';
import currentDateHelper from '@helpers/currentDateHelper';

import { CircleAnimation, LastUpadateSpan, LastUpadateWrapper } from './styled';

function LastUpadate() {
  return (
    <LastUpadateWrapper>
      <CircleAnimation src={circleImg} />
      <LastUpadateSpan>Last updated at {currentDateHelper()}</LastUpadateSpan>
    </LastUpadateWrapper>
  );
}

export default LastUpadate;
