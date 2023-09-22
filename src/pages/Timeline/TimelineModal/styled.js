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
  @media (max-width: 900px) {
    overflow: auto;
  }
`;

export const TimelineModalInputsWrapper = styled.div`
  max-height: 500px;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
`;
