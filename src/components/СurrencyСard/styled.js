import styled from 'styled-components';

export const CardWrapper = styled.div`
  cursor: pointer;
  max-width: 520px;
  width: 100%;
  height: 153px;
  border-radius: 8px;
  border: 1px solid rgb(167, 178, 195);
  background-color: rgb(71, 71, 71);
  display: flex;
  align-items: center;
  margin-top: 50px;
  transition: 0.3s;
  &:hover {
    background-color: rgb(41, 41, 41);
    box-shadow: 10px 5px 5px rgb(22, 218, 12);
    border: 1px solid rgb(22, 218, 12);
  }

  @media (max-width: 1100px) {
    height: 120px;
  }
  @media (max-width: 900px) {
    height: 80px;
  }
  @media (max-width: 650px) {
    height: 62px;
    max-width: 361px;
    border-radius: 3px;
    margin-top: 20px;
  }
`;
export const CardInner = styled.div`
  margin-left: 32px;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    margin-left: 20px;
  }
`;
export const CurrencyStats = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    margin-left: 20px;
  }
`;
export const CarrencyImage = styled.img`
  @media (max-width: 1100px) {
    height: 60px;
    width: 60px;
  }
  @media (max-width: 900px) {
    height: 45px;
    width: 45px;
  }
  @media (max-width: 650px) {
    height: 30px;
    width: 30px;
  }
`;
export const CarrencyName = styled.span`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 400;
  color: rgb(217, 217, 217);
  @media (max-width: 1100px) {
    font-size: 27px;
  }
  @media (max-width: 900px) {
    font-size: 20px;
  }
  @media (max-width: 650px) {
    font-size: 13px;
  }
`;
export const CurrencyRate = styled.span`
  font-size: 32px;
  color: rgb(167, 178, 195);
  font-weight: 300;
  @media (max-width: 1100px) {
    font-size: 23px;
  }
  @media (max-width: 900px) {
    font-size: 18px;
  }
  @media (max-width: 650px) {
    font-size: 12px;
  }
`;
