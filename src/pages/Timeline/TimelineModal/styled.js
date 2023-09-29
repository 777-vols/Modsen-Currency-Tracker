import styled from 'styled-components';

export const TimelineModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;
  background: ${(props) => props.theme.background};
  max-width: 1050px;
  width: 100%;
  max-height: 550px;
  height: 100%;
  border-radius: 20px;
  position: relative;
  padding: 20px;
  margin: 25px;
`;

export const WarningSpan = styled.span`
  color: rgb(255, 0, 0);
  position: absolute;
  top: 10px;
  left: 30px;
  font-size: 13px;
`;
export const InfoButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.color};
  width: 35px;
  height: 35px;
  background: transparent;
  border-radius: 30px;
  font-size: 20px;
  border: 2px solid ${(props) => props.theme.color};
  position: absolute;
  right: 15px;
  top: 60px;
  transition: 0.2s;

  &:hover {
    background: rgb(255, 0, 0, 0.5);
  }
`;
export const ModalInfoWrapper = styled.span`
  padding: 20px;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.background};
  position: absolute;
  top: 20px;
  left: 30px;
  margin-right: 80px;
  max-width: 800px;
`;
export const ModalInfoSpan = styled.span`
  font-size: 15px;
`;
export const TimelineModalInputsWrapper = styled.div`
  max-height: 450px;
  margin-right: 40px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;

export const ButtonsWrapper = styled.div`
  padding: 25px 30px 0 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  bottom: 10px;
  @media (max-width: 500px) {
    padding: 25px 10px 0 10px;
  }
`;
export const ModalButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.color};
  background: transparent;
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 5px;
  transition: 0.2s;
  font-size: 17px;
  &:hover {
    color: rgb(22, 218, 12);
    border: 1px solid rgb(22, 218, 12);
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
