import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(85, 85, 85, 0.7);
`;
export const ModalWindow = styled.div`
  font-family: 'Poppins', sans-serif;
  background: rgb(25, 25, 25);
  max-width: 500px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  border-radius: 20px;
  position: relative;
  padding: 20px;
`;
export const CloseModalButton = styled.button`
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-size: 23px;
  border-radius: 5px;
  width: 35px;
  height: 35px;
  background: transparent;
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
  transition: 0.3s;
  &:hover {
    background-color: rgb(255, 0, 0, 0.5);
  }
`;

export const ModalHeader = styled.h5`
  color: rgb(255, 255, 255);
  font-size: 30px;
  display: flex;
  justify-content: center;
`;

export const SelectWrapper = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: space-around;
`;
export const SelectBlock = styled.div`
  min-width: 60px;
  display: flex;
  flex-direction: column;
`;
export const SelectSpan = styled.span`
  margin-bottom: 10px;
  color: rgb(255, 255, 255);
  font-size: 20px;
`;
export const Result = styled.span`
  color: rgb(255, 255, 255);
  font-size: 30px;
  margin-left: 40px;
`;

export const StyledSelect = styled.select``;
