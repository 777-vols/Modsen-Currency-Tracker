import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.twentyFive}px ${({ theme }) => theme.padding.fifty}px;
  @media (${({ theme }) => theme.media.mediumS}) {
    padding: ${({ theme }) => theme.padding.twenty}px ${({ theme }) => theme.padding.zero}px;
    height: 70px;
  }
  @media (${({ theme }) => theme.media.smallM}) {
    height: 50px;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const BurgerMenuButton = styled.button`
  cursor: pointer;
  display: none;
  float: left;
  margin-right: ${({ theme }) => theme.margin.thirty}px;
  outline: 0;
  border: 0;
  padding: ${({ theme }) => theme.padding.five}px ${({ theme }) => theme.padding.five}px
    ${({ theme }) => theme.padding.zero}px ${({ theme }) => theme.padding.five}px;
  background: none;

  @media (${({ theme }) => theme.media.smallS}) {
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
  margin-bottom: ${({ theme }) => theme.margin.five}px;
  background-color: ${({ theme }) => theme.color};
`;

export const StyledNav = styled.nav`
  max-width: 697px;
  width: 100%;
  padding: ${({ theme }) => theme.padding.zero}px ${({ theme }) => theme.padding.twenty}px;
  @media (${({ theme }) => theme.media.mediumS}) {
    padding: ${({ theme }) => theme.padding.zero}px ${({ theme }) => theme.padding.ten}px;
  }
  @media (${({ theme }) => theme.media.smallS}) {
    display: none;
  }
`;
export const StyledNavMobile = styled.nav`
  display: none;
  @media (${({ theme }) => theme.media.smallS}) {
    display: block;
    position: absolute;
    border: 2px solid ${({ theme }) => theme.color};
    top: 49px;
    left: 0px;
    z-index: 100;
    width: 180px;
    height: 300px;
    max-width: 100%;
    padding: ${({ theme }) => theme.padding.twenty}px ${({ theme }) => theme.padding.thirty}px
      ${({ theme }) => theme.padding.twenty}px ${({ theme }) => theme.padding.twenty}px;
    background-color: ${({ theme }) => theme.background};
    transform: translateX(-100%);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${({ open }) =>
      open &&
      css`
        transform: translateX(0);
        display: block;
      `}
  }
`;
export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  @media (${({ theme }) => theme.media.smallS}) {
    flex-direction: column;
  }
`;
export const LinkWrapper = styled.li`
  padding: ${({ theme }) => theme.padding.zero}px ${({ theme }) => theme.padding.ten}px;
  @media (${({ theme }) => theme.media.mediumS}) {
    padding: ${({ theme }) => theme.padding.zero}px ${({ theme }) => theme.padding.five}px;
  }
`;
export const LogoLink = styled(NavLink)`
  padding: ${({ theme }) => theme.padding.zero}px ${({ theme }) => theme.padding.ten}px;
  cursor: pointer;
`;
export const Logo = styled.img`
  width: 40px;
  height: 41px;

  @media (${({ theme }) => theme.media.mediumS}) {
    width: 20px;
    height: 20px;
  }
`;
export const MenuLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.mediumS};
  opacity: 0.7;
  color: ${({ theme }) => theme.color};
  transition: 0.2s;
  white-space: nowrap;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.color};
  }

  &[aria-current] {
    opacity: 1;
    text-decoration: none;
    color: ${({ theme }) => theme.color};

    &::after {
      margin-top: ${({ theme }) => theme.margin.one}px;
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.color};
    }
  }

  @media (${({ theme }) => theme.media.mediumS}) {
    font-size: ${({ theme }) => theme.fontSize.smallM};
  }
  @media (${({ theme }) => theme.media.smallS}) {
    font-size: ${({ theme }) => theme.fontSize.smallL};
    display: block;
    margin-top: ${({ theme }) => theme.margin.ten}px;
  }
`;
