import styled from 'styled-components';

export const TimelineModalWindow = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  background: ${(props) => props.theme.background};
  max-width: 1050px;
  width: 100%;
  max-height: 510px;
  height: 100%;
  border-radius: 20px;
  position: relative;
  padding: 20px;
  margin: 20px;
`;

export const TimelineModalInputsWrapper = styled.div`
  max-height: 470px;
  margin: 15px;
  margin-right: 40px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;
