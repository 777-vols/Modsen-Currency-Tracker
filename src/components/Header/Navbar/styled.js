import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

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
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const BurgerMenuButton = styled.button`
  display: none;
  float: left;
  margin-right: 30px;
  outline: 0;
  border: 0;
  padding: 5px 5px 0 5px;
  background: none;

  @media (max-width: 500px) {
    display: block;
  }

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(4px, 4px);
      width: 27px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 27px;
    }
  }
`;
export const StyledBar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.color};
`;

export const StyledNav = styled.nav`
  max-width: 697px;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 700px) {
    padding: 0 10px;
  }
  @media (max-width: 500px) {
    position: absolute;
    border: 2px solid ${(props) => props.theme.color};
    top: 49px;
    left: 0px;
    z-index: 100;
    width: 180px;
    height: 300px;
    max-width: 100%;
    padding: 20px 30px 20px 20px;
    background-color: ${(props) => props.theme.background};
    transform: translateX(-100%);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${(props) =>
      props.open &&
      css`
        transform: translateX(0);
        display: block;
      `}
  }
`;
export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
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
    width: 20px;
    height: 20px;
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
  @media (max-width: 500px) {
    font-size: 18px;
    display: block;
    margin-top: 10px;
  }
`;
