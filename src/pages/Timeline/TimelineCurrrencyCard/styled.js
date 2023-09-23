import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  @media (max-width: 600px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;
export const CardImage = styled.img`
  @media (max-width: 900px) {
    width: 50px;
    height: 50px;
  }
`;
export const CardStats = styled.div`
  margin-left: 26px;
  display: flex;
  flex-direction: column;
`;
export const CardName = styled.span`
  font-size: 35px;
  @media (max-width: 900px) {
    font-size: 25px;
  }
`;
export const CardShortName = styled.span`
  font-size: 16px;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;
