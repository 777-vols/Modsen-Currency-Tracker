import styled from 'styled-components';

export const AnswerWrapper = styled.div`
  max-width: 450px;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(27, 32, 40);
  padding: 10px;
  margin: 0 auto;
  transition: 0.3s;
  &:hover {
    background-color: rgb(17, 22, 40);
  }
`;
export const AnswerFullname = styled.span`
  font-size: 22px;
  @media (max-width: 600px) {
    top: 18px;
  }
`;
export const AnswerShortName = styled.span`
  font-size: 15px;
`;
