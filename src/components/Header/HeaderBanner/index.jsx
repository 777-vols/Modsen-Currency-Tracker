import React from 'react';
import contentImg from '@assets/contentImage.svg';

import config from './config';
import {
  BottomPartWrapper,
  Content,
  ContentImage,
  HeaderBottomPart,
  HeaderTopPart,
  Panel,
  StyledSpan,
  TopPartWrapper,
  Wrapper
} from './styled';

const [{ content: topPart }, { content: bottomPart }, { content: spanContent }] = config;

function HeaderBanner() {
  return (
    <Wrapper>
      <Content>
        <Panel>
          <TopPartWrapper>
            <HeaderTopPart>{topPart}</HeaderTopPart>
            <HeaderBottomPart>{bottomPart}</HeaderBottomPart>
          </TopPartWrapper>
          <BottomPartWrapper>
            <StyledSpan>{spanContent}</StyledSpan>
          </BottomPartWrapper>
        </Panel>
        <ContentImage src={contentImg} alt="Header content image" />
      </Content>
    </Wrapper>
  );
}

export default HeaderBanner;
