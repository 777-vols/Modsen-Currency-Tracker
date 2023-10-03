import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1486px;
  padding: ${(props) => props.theme.padding.zero}px ${(props) => props.theme.padding.fifteen}px;
  width: 100%;
  margin: ${(props) => props.theme.padding.zero}px auto;
`;

export default Container;
