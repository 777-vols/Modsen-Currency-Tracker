import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${({ theme }) => theme.margin.zero}px auto;
  background: ${({ theme }) => theme.colors.bgGradient};
  filter: drop-shadow(rgba(36, 121, 64, 0.7) 0px 0px 0px);
  padding: ${({ theme }) => theme.padding.thirtyTwo}px ${({ theme }) => theme.padding.zero}px
    ${({ theme }) => theme.padding.fiftyEight}px ${({ theme }) => theme.padding.fourtyFive}px;
  @media (${({ theme }) => theme.media.mediumL}) {
    padding: ${({ theme }) => theme.padding.twenty}px;
  }
  @media (${({ theme }) => theme.media.mediumL}) {
    padding: ${({ theme }) => theme.padding.twenty}px ${({ theme }) => theme.padding.five}px;
  }
`;
export const Content = styled.div`
  display: flex;
  max-width: 1065px;
  width: 100%;
  justify-content: center;
`;
export const Panel = styled.div``;
export const TopPartWrapper = styled.div`
  background: ${({ theme }) => theme.colors.textGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-right: ${({ theme }) => theme.margin.sixty}px;
  @media (${({ theme }) => theme.media.mediumL}) {
    margin: ${({ theme }) => theme.margin.zero}px auto;
  }
`;
export const HeaderTopPart = styled.h1`
  line-height: 105px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.largeL};

  @media (${({ theme }) => theme.media.largeL}) {
    line-height: 90px;
    font-size: ${({ theme }) => theme.fontSize.largeM};
  }
  @media (${({ theme }) => theme.media.mediumL}) {
    line-height: 60px;
    font-size: ${({ theme }) => theme.fontSize.largeS};
  }
  @media (${({ theme }) => theme.media.smallS}) {
    line-height: 45px;
    font-size: ${({ theme }) => theme.fontSize.mediumXL};
  }
`;
export const HeaderBottomPart = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.largeXL};
  line-height: 120px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  display: flex;
  justify-content: right;

  @media (${({ theme }) => theme.media.largeL}) {
    line-height: 100px;
    font-size: ${({ theme }) => theme.fontSize.largeL};
  }
  @media (${({ theme }) => theme.media.mediumL}) {
    justify-content: center;
    line-height: 60px;
    font-size: ${({ theme }) => theme.fontSize.largeS};
  }
  @media (${({ theme }) => theme.media.smallS}) {
    line-height: 45px;
    font-size: ${({ theme }) => theme.fontSize.mediumXL};
  }
`;
export const BottomPartWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margin.eight}px;
  display: flex;
  justify-content: right;
  @media (${({ theme }) => theme.media.mediumL}) {
    justify-content: center;
  }
`;
export const StyledSpan = styled.span`
  width: 100%;
  max-width: 397px;
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  font-weight: ${({ theme }) => theme.fontWeight.small};
  line-height: 46px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkFontColor};
  @media (${({ theme }) => theme.media.largeL}) {
    font-size: ${({ theme }) => theme.fontSize.mediumS};
    line-height: 35px;
  }
  @media (${({ theme }) => theme.media.mediumL}) {
    max-width: 230px;
    font-size: ${({ theme }) => theme.fontSize.smallM};
    line-height: 25px;
  }
  @media (${({ theme }) => theme.media.smallS}) {
    max-width: 183px;
    font-size: ${({ theme }) => theme.fontSize.smallS};
    line-height: 20px;
  }
`;
export const ContentImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 313px;
  @media (${({ theme }) => theme.media.largeL}) {
    max-width: 245px;
  }
  @media (${({ theme }) => theme.media.mediumL}) {
    display: none;
  }
`;
