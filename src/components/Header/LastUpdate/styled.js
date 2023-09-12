import styled from 'styled-components';

export const LastUpadateWrapper = styled.div`
  padding: 56px 0;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 30px 0;
  }
  @media (max-width: 500px) {
    padding: 20px 0;
  }
`;
export const LastUpadateSpan = styled.span`
  margin-left: 18px;
  font-size: 33px;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    font-size: 17px;
  }
  @media (max-width: 500px) {
    margin-left: 10px;
    font-size: 12px;
    line-height: 23px;
  }
`;
export const CircleAnimation = styled.img`
  @media (max-width: 900px) {
    width: 30px;
  }
  @media (max-width: 500px) {
    width: 25px;
  }
`;
