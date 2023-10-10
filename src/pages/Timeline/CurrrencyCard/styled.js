import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  @media (${({ theme }) => theme.media.smallM}) {
    max-width: 300px;
    margin: ${({ theme }) => theme.margin.zero}px auto;
  }
`;
export const Image = styled.img`
  @media (${({ theme }) => theme.media.mediumL}) {
    width: 50px;
    height: 50px;
  }
`;
export const Stats = styled.div`
  margin-left: ${({ theme }) => theme.margin.twentyFive}px;
  display: flex;
  flex-direction: column;
`;
export const FullName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mediumXL};
  @media (${({ theme }) => theme.media.mediumL}) {
    font-size: ${({ theme }) => theme.fontSize.mediumM};
  }
`;
export const ShortName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.smallM};
  @media (${({ theme }) => theme.media.mediumL}) {
    font-size: ${({ theme }) => theme.fontSize.smallS};
  }
`;
