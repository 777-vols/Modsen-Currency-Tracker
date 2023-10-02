import React from 'react';
import contentImg from '@assets/contentImage.svg';

import config from './config';
import {
  ContentImage,
  ContentInfo,
  ContentInner,
  ContentSpan,
  ContentSpanWrapper,
  ContentWrapper,
  InfoBottomPart,
  InfoTopPart,
  InfoWrapper
} from './styled';

const [{ content: topPart }, { content: bottomPart }, { content: spanContent }] = config;

function HeaderBanner() {
  return (
    <ContentWrapper>
      <ContentInner>
        <ContentInfo>
          <InfoWrapper>
            <InfoTopPart>{topPart}</InfoTopPart>
            <InfoBottomPart>{bottomPart}</InfoBottomPart>
          </InfoWrapper>
          <ContentSpanWrapper>
            <ContentSpan>{spanContent}</ContentSpan>
          </ContentSpanWrapper>
        </ContentInfo>
        <ContentImage src={contentImg} alt="Header content image" />
      </ContentInner>
    </ContentWrapper>
  );
}

export default HeaderBanner;
