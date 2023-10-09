import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1486px;
  padding: ${({ theme }) => theme.padding.zero}px ${({ theme }) => theme.padding.fifteen}px;
  width: 100%;
  margin: ${({ theme }) => theme.margin.zero}px auto;
`;

export default Container;
