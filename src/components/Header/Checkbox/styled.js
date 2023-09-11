import styled from 'styled-components';

export const StyledLabel = styled.label`
  cursor: pointer;
  width: 50px;
  height: 30px;
  background: transparent;
  display: block;
  border: 2px solid white;
  border-radius: 50px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: ${({ $currentTheme }) => ($currentTheme ? '0px' : '20px')};
    width: 27px;
    height: 27px;
    background: transparent;
    border: 2px solid white;
    border-radius: 30px;
    transition: 0.2s;
  }
`;
export const SwichToggle = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
`;
