import styled from 'styled-components';

export const Wrapper = styled.ul`
  margin-top: ${({ theme }) => theme.margin.fifty}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.margin.ten}px ${({ theme }) => theme.padding.zero}px;
`;
export const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mediumS};

  @media (${({ theme }) => theme.media.smallM}) {
    font-size: ${({ theme }) => theme.fontSize.smallM};
  }
`;
