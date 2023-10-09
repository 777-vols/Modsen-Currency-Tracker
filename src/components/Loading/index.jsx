import styledColors from '@constants/styles/colors';
import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

import { Wrapper } from './styled';

function Loading() {
  return (
    <Wrapper>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color={styledColors.greenColor}
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Wrapper>
  );
}

export default Loading;
