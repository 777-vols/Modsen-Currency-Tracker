import styled from 'styled-components';

export const AppWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  /* background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color}; */
  background-color: #030304;
  color: #ffffff;
  min-width: 360px;
`;

export const Container = styled.div`
  max-width: 1476px;
  padding: 0px 10px;
  width: 100%;
  margin: 0 auto;
`;
