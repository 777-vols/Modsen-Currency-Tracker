import styled from 'styled-components';

export const BankCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1420px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
`;
export const BankCardHeaderWrapper = styled.div``;
export const BankCardHeader = styled.h3`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 38px;
  @media (max-width: 900px) {
    font-size: 28px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
export const BankCardInputWrapper = styled.div`
  margin: 0 auto;
  max-width: 450px;
  position: relative;
  @media (max-width: 900px) {
    max-width: 350px;
  }
  @media (max-width: 600px) {
    max-width: 250px;
  }
`;
export const BankCardInput = styled.input`
  color: rgb(158, 158, 158);
  font-size: 18px;
  background-color: rgb(27, 32, 40);
  border: none;
  height: 66px;
  width: 100%;
  padding: 0 20px;
  border-radius: 10px;
  margin: 0 auto;
  @media (max-width: 900px) {
    max-width: 350px;
    height: 50px;
  }
  @media (max-width: 600px) {
    max-width: 250px;
    height: 40px;
  }
`;
export const SearchInputImage = styled.img`
  position: absolute;
  right: 10px;
  top: 20px;
  @media (max-width: 900px) {
    top: 15px;
  }
  @media (max-width: 600px) {
    top: 10px;
    width: 15px;
    height: 15px;
  }
`;
export const InputAnswersWrapper = styled.div`
  top: 66px;
  position: absolute;
  z-index: 999;
  width: 100%;
  @media (max-width: 900px) {
    top: 50px;
  }
  @media (max-width: 600px) {
    top: 40px;
  }
`;
export const BankCardMapWrapper = styled.div`
  margin-top: 100px;
  height: 460px;
`;
