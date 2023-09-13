import styled from 'styled-components';

export const StyledLabel = styled.label`
  cursor: pointer;
  min-width: 50px;
  height: 30px;
  background: transparent;
  display: block;
  border: 2px solid ${(props) => props.theme.color};
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
    border: 2px solid ${(props) => props.theme.color};
    border-radius: 50px;
    transition: 0.2s;
  }

  @media (max-width: 750px) {
    min-width: 28px;
    height: 15px;
    border: 1px solid ${(props) => props.theme.color};
    &:after {
      left: ${({ $currentTheme }) => ($currentTheme ? '0px' : '11px')};
      width: 15.5px;
      height: 15.5px;
      /* top: -2 px; */
      border: 1px solid ${(props) => props.theme.color};
    }
  }
`;
export const SwichToggle = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
`;
