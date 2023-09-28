import styled from 'styled-components';

export const TimelineModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;
  background: ${(props) => props.theme.background};
  max-width: 1050px;
  width: 100%;
  max-height: 530px;
  height: 100%;
  border-radius: 20px;
  position: relative;
  padding: 20px;
  margin: 25px;
`;

export const TimelineModalInputsWrapper = styled.div`
  max-height: 430px;
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
