import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 30px;
  max-width: 700px;
  border-radius: 10px;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.color};
`;
export const NotificationSpan = styled.span`
  font-size: 20px;
`;
