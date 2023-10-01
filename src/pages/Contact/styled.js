import styled from 'styled-components';

export const Contacts = styled.ul`
  margin-top: ${(props) => props.theme.padding.fifty}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
`;
export const ContactItem = styled.li`
  display: flex;
  justify-content: center;
  margin: ${(props) => props.theme.padding.ten}px ${(props) => props.theme.padding.zero}px;
`;
export const ContactSpan = styled.span`
  font-size: ${(props) => props.theme.fontSize.mediumS};

  @media (${(props) => props.theme.media.smallM}) {
    font-size: ${(props) => props.theme.fontSize.smallM};
  }
`;
