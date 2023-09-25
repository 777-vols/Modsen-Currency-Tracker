import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PageNotFoundHeader = styled.h1`
  margin-top: 30px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  color: red;
  @media (max-width: 900px) {
    font-size: 28px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const LinkWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  height: 30px;
`;
export const PageNotFoundLink = styled(NavLink)`
  color: ${(props) => props.theme.color};
  font-size: 23px;
  opacity: 0.8;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
