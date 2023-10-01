import styled from 'styled-components';

export const ModalInputWrapper = styled.div`
  margin: ${(props) => props.theme.padding.zero}px auto;
  max-width: 150px;
  width: 100%;
  padding: ${(props) => props.theme.padding.seven}px;
`;
export const ModalInputHeader = styled.span`
  font-size: ${(props) => props.theme.fontSize.smallM};
  color: ${(props) => props.theme.color};
  margin-bottom: ${(props) => props.theme.padding.five}px;
`;
export const ModalStyledInput = styled.input`
  font-size: ${(props) => props.theme.fontSize.smallS};
  color: ${(props) => props.theme.colors.lightFontColor};
  width: 100%;
`;
