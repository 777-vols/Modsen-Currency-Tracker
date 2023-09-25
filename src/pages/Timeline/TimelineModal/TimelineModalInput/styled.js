import styled from 'styled-components';

export const ModalInputWrapper = styled.div`
  margin: 0 auto;
  max-width: 150px;
  width: 100%;
  padding: 7px;
`;
export const ModalInputHeader = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.color};
  margin-bottom: 5px;
`;
export const ModalStyledInput = styled.input`
  font-size: 13px;
  color: ${(props) => props.theme.background};
  width: 100%;
`;
