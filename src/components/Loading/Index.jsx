import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

import { LoadingWrapper } from './styled';

function Loading() {
  return (
    <LoadingWrapper>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4dff00"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </LoadingWrapper>
  );
}

export default Loading;
