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
    width: 29px;
    height: 29px;
    top: -1px;
    background: transparent;
    border: 2px solid white;
    border-radius: 50px;
    transition: 0.2s;
  }

  @media (max-width: 700px) {
    width: 30px;
    height: 15px;
    border: 1px solid white;
    &:after {
      left: ${({ $currentTheme }) => ($currentTheme ? '0px' : '10px')};
      width: 15px;
      height: 15px;
      border: 1px solid white;
    }
  }
`;
export const SwichToggle = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
`;
