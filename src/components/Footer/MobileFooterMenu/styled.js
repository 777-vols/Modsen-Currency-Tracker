import styled from 'styled-components';

export const MobileMenuWrapper = styled.div`
  margin: 0 auto;
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
  padding: 15px;
`;
export const MenuListSpan = styled.span``;

export const MenuButton = styled.button`
  color: white;
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  border: none;
  border-bottom: 1px solid white;
`;

export const MenuItemArrow = styled.img`
  transition: 0.3s;
`;
