import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  padding: ${(props) => props.theme.padding.twenty}px ${(props) => props.theme.padding.fourty}px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-height: 50px;
  max-width: 650px;
  border-radius: 10px;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.color};
  @media (${(props) => props.theme.media.mediumL}) {
    padding: ${(props) => props.theme.padding.fifteen}px ${(props) => props.theme.padding.twenty}px;
    max-width: 500px;
  }
`;
export const Content = styled.span`
  font-size: ${(props) => props.theme.fontSize.mediumS};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  @media (${(props) => props.theme.media.mediumL}) {
    font-size: ${(props) => props.theme.fontSize.smallM};
  }
`;
