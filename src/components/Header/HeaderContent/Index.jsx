import contentImg from '@assets/contentImage.svg';
import React from 'react';

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

function HeaderContent() {
  return (
    <ContentWrapper>
      <ContentInner>
        <ContentInfo>
          <InfoWrapper>
            <InfoTopPart>Modsen Currency</InfoTopPart>
            <InfoBottomPart>Tracker</InfoBottomPart>
          </InfoWrapper>
          <ContentSpanWrapper>
            <ContentSpan>Quotes for the dollar and other international currencies.</ContentSpan>
          </ContentSpanWrapper>
        </ContentInfo>
        <ContentImage src={contentImg} alt="Header content image" />
      </ContentInner>
    </ContentWrapper>
  );
}

export default HeaderContent;
