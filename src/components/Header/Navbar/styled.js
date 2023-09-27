import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  @media (max-width: 750px) {
    padding: 0 15px 0 10px;
    height: 50px;
  }
`;
export const StyledNav = styled.nav`
  max-width: 697px;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 700px) {
    padding: 0 10px;
  }
`;
export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const LinkWrapper = styled.li`
  padding: 0 10px;
  @media (max-width: 700px) {
    padding: 0 5px;
  }
`;
export const LogoLink = styled(NavLink)`
  padding: 0 10px;
  cursor: pointer;
`;
export const Logo = styled.img`
  width: 40px;
  height: 41px;

  @media (max-width: 700px) {
    width: 12px;
    height: 13px;
  }
`;
export const MenuLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  opacity: 0.7;
  color: ${(props) => props.theme.color};
  transition: 0.2s;
  white-space: nowrap;

  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.color};
  }

  &[aria-current] {
    opacity: 1;
    text-decoration: none;
    color: ${(props) => props.theme.color};

    &::after {
      margin-top: 1px;
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.color};
    }
  }

  @media (max-width: 700px) {
    font-size: 15px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
