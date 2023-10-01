import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${(props) => props.theme.padding.zero}px auto;
  background: ${(props) => props.theme.colors.bgGradient};
  filter: drop-shadow(rgba(36, 121, 64, 0.7) 0px 0px 0px);
  padding: ${(props) => props.theme.padding.thirtyTwo}px ${(props) => props.theme.padding.zero}px
    ${(props) => props.theme.padding.fiftyEight}px ${(props) => props.theme.padding.fourtyFive}px;
  @media (${(props) => props.theme.media.mediumL}) {
    padding: ${(props) => props.theme.padding.twenty}px;
  }
  @media (${(props) => props.theme.media.mediumL}) {
    padding: ${(props) => props.theme.padding.twenty}px ${(props) => props.theme.padding.five}px;
  }
`;
export const ContentInner = styled.div`
  display: flex;
  max-width: 1065px;
  width: 100%;
  justify-content: center;
`;
export const ContentInfo = styled.div``;
export const InfoWrapper = styled.div`
  background: ${(props) => props.theme.colors.textGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-right: ${(props) => props.theme.padding.sixty}px;
  @media (${(props) => props.theme.media.mediumL}) {
    margin: ${(props) => props.theme.padding.zero}px auto;
  }
`;
export const InfoTopPart = styled.h1`
  line-height: 105px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: ${(props) => props.theme.fontSize.largeL};

  @media (${(props) => props.theme.media.largeL}) {
    line-height: 90px;
    font-size: ${(props) => props.theme.fontSize.largeM};
  }
  @media (${(props) => props.theme.media.mediumL}) {
    line-height: 60px;
    font-size: ${(props) => props.theme.fontSize.largeS};
  }
  @media (${(props) => props.theme.media.smallS}) {
    line-height: 45px;
    font-size: ${(props) => props.theme.fontSize.mediumXL};
  }
`;
export const InfoBottomPart = styled.h2`
  font-size: ${(props) => props.theme.fontSize.largeXL};
  line-height: 120px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  display: flex;
  justify-content: right;

  @media (${(props) => props.theme.media.largeL}) {
    line-height: 100px;
    font-size: ${(props) => props.theme.fontSize.largeL};
  }
  @media (${(props) => props.theme.media.mediumL}) {
    justify-content: center;
    line-height: 60px;
    font-size: ${(props) => props.theme.fontSize.largeS};
  }
  @media (${(props) => props.theme.media.smallS}) {
    line-height: 45px;
    font-size: ${(props) => props.theme.fontSize.mediumXL};
  }
`;
export const ContentSpanWrapper = styled.div`
  margin-top: ${(props) => props.theme.padding.eight}px;
  display: flex;
  justify-content: right;
  @media (${(props) => props.theme.media.mediumL}) {
    justify-content: center;
  }
`;
export const ContentSpan = styled.span`
  width: 100%;
  max-width: 397px;
  font-size: ${(props) => props.theme.fontSize.mediumM};
  font-weight: ${(props) => props.theme.fontWeight.small};
  line-height: 46px;
  text-align: center;
  color: ${(props) => props.theme.colors.darkFontColor};
  @media (${(props) => props.theme.media.largeL}) {
    font-size: ${(props) => props.theme.fontSize.mediumS};
    line-height: 35px;
  }
  @media (${(props) => props.theme.media.mediumL}) {
    max-width: 230px;
    font-size: ${(props) => props.theme.fontSize.smallM};
    line-height: 25px;
  }
  @media (${(props) => props.theme.media.smallS}) {
    max-width: 183px;
    font-size: ${(props) => props.theme.fontSize.smallS};
    line-height: 20px;
  }
`;
export const ContentImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 313px;
  @media (${(props) => props.theme.media.largeL}) {
    max-width: 245px;
  }
  @media (${(props) => props.theme.media.mediumL}) {
    display: none;
  }
`;
