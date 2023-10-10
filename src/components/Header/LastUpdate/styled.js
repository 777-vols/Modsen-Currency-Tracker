import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.padding.fiftyFive}px ${({ theme }) => theme.padding.zero}px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (${({ theme }) => theme.media.mediumL}) {
    padding: ${({ theme }) => theme.padding.thirty}px ${({ theme }) => theme.padding.zero}px;
  }
  @media (${({ theme }) => theme.media.smallS}) {
    padding: ${({ theme }) => theme.padding.twenty}px ${({ theme }) => theme.padding.zero}px;
  }
`;
export const StyledSpan = styled.span`
  margin-left: ${({ theme }) => theme.margin.eighteen}px;
  font-size: ${({ theme }) => theme.fontSize.mediumXL};
  display: flex;
  align-items: center;
  @media (${({ theme }) => theme.media.mediumL}) {
    font-size: ${({ theme }) => theme.fontSize.smallL};
  }
  @media (${({ theme }) => theme.media.smallS}) {
    margin-left: ${({ theme }) => theme.margin.ten}px;
    font-size: ${({ theme }) => theme.fontSize.smallS};
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
