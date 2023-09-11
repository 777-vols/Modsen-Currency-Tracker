import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px 0 50px;
  @media (max-width: 700px) {
    padding: 0 15px 0 10px;
  }
`;
export const StyledNav = styled.nav`
  max-width: 657px;
  width: 100%;
`;
export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const LinkWrapper = styled.div`
  padding: 0 10px;
  @media (max-width: 700px) {
    padding: 0 5px;
  }
`;
export const LogoLink = styled(NavLink)`
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
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s;
  white-space: nowrap;

  &:hover {
    color: #fef6f6;
  }

  &[aria-current] {
    text-decoration: none;
    color: #fef6f6;

    &::after {
      margin-top: 1px;
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: white;
    }
  }

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;
