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
  background: ${(props) => props.theme.background};
  max-width: 500px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  border-radius: 20px;
  position: relative;
  padding: 15px;
  margin: 15px;
`;
export const CloseModalButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.color};
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
  color: ${(props) => props.theme.color};
  font-size: 30px;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const ModalInner = styled.div`
  padding: 30px 0 20px 0;
  display: flex;
  justify-content: space-around;
`;
export const StyledBlock = styled.div`
  min-width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 100%;
`;
export const SelectSpan = styled.span`
  margin: 0 auto;
  margin-bottom: 10px;
  color: ${(props) => props.theme.color};
  font-size: 20px;
  white-space: nowrap;
  border-radius: 5px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
export const ModalStyledSpan = styled.span`
  text-align: center;
  font-size: 23px;
  background: rgb(255, 255, 255);
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  @media (max-width: 500px) {
    height: 40px;
    font-size: 18px;
  }
`;
export const ModalStyledInput = styled.input`
  text-align: center;
  font-size: 23px;
  background: rgb(255, 255, 255);
  width: 100%;
  height: 46px;
  border-radius: 5px;
  @media (max-width: 500px) {
    height: 40px;
    font-size: 18px;
  }
`;
export const Result = styled.div`
  white-space: nowrap;
  overflow: auto;
  text-align: center;
  color: ${(props) => props.theme.color};
  font-size: 30px;
  margin-bottom: 20px;
  overflow: auto;
  @media (max-width: 500px) {
    margin-left: 25px;
    font-size: 25px;
  }
`;

export const StyledSelect = styled.div`
  font-size: 23px;
  min-width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  width: 100%;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
