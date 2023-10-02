import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MobileMenuWrapper = styled.nav`
  margin: ${(props) => props.theme.padding.zero}px auto;
  max-width: 355px;
  width: 100%;
  @media (min-width: 500px) {
    display: none;
  }
`;
export const MobileMenuItem = styled.div``;
export const MenuList = styled.ul`
  display: none;
  transform: translateX(-150%);
  animation: ani 0.5s forwards;
  @keyframes ani {
    0% {
      transform: translateX(-150%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const MenuListItem = styled.li`
  padding: ${(props) => props.theme.padding.ten}px;
`;
export const ListItem = styled(NavLink)`
  color: ${(props) => props.theme.color};
`;

export const MenuButton = styled.button`
  color: ${(props) => props.theme.color};
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color};
`;

export const MenuItemArrow = styled.img`
  transition: 0.3s;
`;
