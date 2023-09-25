import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-width: 360px;
`;

export default AppWrapper;
