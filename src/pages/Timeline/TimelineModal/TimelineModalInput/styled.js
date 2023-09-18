import styled from 'styled-components';

export const ModalInputWrapper = styled.div`
  max-width: 150px;
  width: 100%;
  padding: 10px;
`;
export const ModalInputHeader = styled.span`
  color: white;
  color: ${(props) => props.theme.color};
  margin-bottom: 5px;
`;
export const ModalStyledInput = styled.input`
  color: ${(props) => props.theme.color};
  width: 100%;
`;
