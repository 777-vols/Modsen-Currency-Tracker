import styled from 'styled-components';

export const LastUpadateWrapper = styled.div`
  padding: ${(props) => props.theme.padding.fiftyFive}px ${(props) => props.theme.padding.zero}px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (${(props) => props.theme.media.mediumL}) {
    padding: ${(props) => props.theme.padding.thirty}px ${(props) => props.theme.padding.zero}px;
  }
  @media (${(props) => props.theme.media.smallS}) {
    padding: ${(props) => props.theme.padding.twenty}px ${(props) => props.theme.padding.zero}px;
  }
`;
export const LastUpadateSpan = styled.span`
  margin-left: ${(props) => props.theme.padding.eighteen}px;
  font-size: ${(props) => props.theme.fontSize.mediumXL};
  display: flex;
  align-items: center;
  @media (${(props) => props.theme.media.mediumL}) {
    font-size: ${(props) => props.theme.fontSize.smallL};
  }
  @media (${(props) => props.theme.media.smallS}) {
    margin-left: ${(props) => props.theme.padding.ten}px;
    font-size: ${(props) => props.theme.fontSize.smallS};
    line-height: 23px;
  }
`;

export const CircleAnimation = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  animation: pulse 3s infinite;
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(50, 205, 50, 0.6);
    }
    70% {
      box-shadow: 0 0 0 12px rgba(50, 205, 50, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(50, 205, 50, 0);
    }
  }
`;
