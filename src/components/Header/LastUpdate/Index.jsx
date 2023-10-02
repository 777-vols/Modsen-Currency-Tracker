import React from 'react';
import circleImg from '@assets/LastUpdateIcons/small.svg';
import currentDateHelper from '@helpers/currentDateHelper';

import config from './config';
import { CircleAnimation, LastUpadateSpan, LastUpadateWrapper } from './styled';

const [{ content: spanContent }] = config;

function LastUpadate() {
  return (
    <LastUpadateWrapper>
      <CircleAnimation src={circleImg} />
      <LastUpadateSpan>
        {spanContent} {currentDateHelper()}
      </LastUpadateSpan>
    </LastUpadateWrapper>
  );
}

export default LastUpadate;
