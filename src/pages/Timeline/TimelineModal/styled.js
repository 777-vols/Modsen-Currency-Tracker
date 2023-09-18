import styled from 'styled-components';

export const TimelineModalWindow = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  background: ${(props) => props.theme.background};
  max-width: 1000px;
  width: 100%;
  max-height: 500px;
  height: 100%;
  border-radius: 20px;
  position: relative;
  padding: 20px;
  margin: 20px;
`;

export const TimelineModalInputsWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
`;
export const TimelineModalWindowInput = styled.input``;
