import circleImg from '@assets/LastUpdateIcons/small.svg';
import currentDateHelper from '@helpers/currentDateHelper';
import React from 'react';

import config from './config';
import { CircleAnimation, StyledSpan, Wrapper } from './styled';

const [{ content: spanContent }] = config;

function LastUpadate() {
  return (
    <Wrapper>
      <CircleAnimation src={circleImg} />
      <StyledSpan>
        {spanContent} {currentDateHelper()}
      </StyledSpan>
    </Wrapper>
  );
}

export default LastUpadate;
