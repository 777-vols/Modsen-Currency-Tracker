import styled from 'styled-components';

export const Contacts = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
`;
export const ContactItem = styled.li`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;
export const ContactSpan = styled.span`
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
