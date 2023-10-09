import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  padding: ${({ theme }) => theme.padding.twenty}px ${({ theme }) => theme.padding.fourty}px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-height: 50px;
  max-width: 650px;
  border-radius: 10px;
  color: ${({ theme }) => theme.background};
  background-color: ${({ theme }) => theme.color};
  @media (${({ theme }) => theme.media.mediumL}) {
    padding: ${({ theme }) => theme.padding.fifteen}px ${({ theme }) => theme.padding.twenty}px;
    max-width: 500px;
  }
`;
export const Content = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mediumS};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  @media (${({ theme }) => theme.media.mediumL}) {
    font-size: ${({ theme }) => theme.fontSize.smallM};
  }
`;
