import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100wv;
  height: 100vh;
  background: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Wrapper;
