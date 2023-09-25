import styled from 'styled-components';

export const LastUpadateWrapper = styled.div`
  padding: 56px 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 16px;
  height: 16px;
  border-radius: 50%;
  animation: pulse 3s infinite;
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(50, 205, 50, 0.6);
    }
    70% {
      box-shadow: 0 0 0 12px rgba(50, 205, 50, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(50, 205, 50, 0);
    }
  }
`;
