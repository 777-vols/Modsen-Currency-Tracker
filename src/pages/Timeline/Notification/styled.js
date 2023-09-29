import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-height: 50px;
  max-width: 650px;
  border-radius: 10px;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.color};
  @media (max-width: 900px) {
    padding: 15px 20px;
    max-width: 500px;
  }
`;
export const NotificationSpan = styled.span`
  font-size: 20px;
  font-weight: 700;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
