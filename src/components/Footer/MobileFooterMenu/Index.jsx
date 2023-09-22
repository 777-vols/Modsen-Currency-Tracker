import React from 'react';

import arrow from '@assets/arrow.svg';

import {
  MenuButton,
  MenuItemArrow,
  MenuList,
  MenuListItem,
  MenuListSpan,
  MobileMenuItem,
  MobileMenuWrapper
} from './styled';

function MobileFooterMenu() {
  function menuButtonClick(event) {
    const arrowImg = event.currentTarget.children[0];
    const list = event.currentTarget.nextSibling;
    if (list.style.display === 'block') {
      list.style.display = 'none';
      arrowImg.style.transform = 'rotate(360deg)';
    } else {
      list.style.display = 'block';
      arrowImg.style.transform = 'rotate(180deg)';
    }
  }
  return (
    <nav>
      <MobileMenuWrapper>
        <MobileMenuItem>
          <MenuButton onClick={menuButtonClick}>
            General
            <MenuItemArrow src={arrow} />
          </MenuButton>
          <MenuList>
            <MenuListItem>
              <MenuListSpan>Market</MenuListSpan>
            </MenuListItem>
            <MenuListItem>
              <MenuListSpan>Service</MenuListSpan>
            </MenuListItem>
          </MenuList>
        </MobileMenuItem>

        <MobileMenuItem>
          <MenuButton onClick={menuButtonClick}>
            Product
            <MenuItemArrow src={arrow} />
          </MenuButton>
          <MenuList>
            <MenuListItem>
              <MenuListSpan>Sparks</MenuListSpan>
            </MenuListItem>
            <MenuListItem>
              <MenuListSpan>Snaps</MenuListSpan>
            </MenuListItem>
          </MenuList>
        </MobileMenuItem>

        <MobileMenuItem>
          <MenuButton onClick={menuButtonClick}>
            Community
            <MenuItemArrow src={arrow} />
          </MenuButton>
          <MenuList>
            <MenuListItem>
              <MenuListSpan>Ideas</MenuListSpan>
            </MenuListItem>
            <MenuListItem>
              <MenuListSpan>Streams</MenuListSpan>
            </MenuListItem>
          </MenuList>
        </MobileMenuItem>
      </MobileMenuWrapper>
    </nav>
  );
}

export default MobileFooterMenu;
