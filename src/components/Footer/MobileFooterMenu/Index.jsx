import React, { useMemo } from 'react';
import arrow from '@assets/arrow.svg';
import config from '@components/Footer/config';
import urls from '@constants/urls';
import mobileFooterButtonClick from '@helpers/mobileFooterButtonClick';

import {
  ListItem,
  MenuButton,
  MenuItemArrow,
  MenuList,
  MenuListItem,
  MobileMenuItem,
  MobileMenuWrapper
} from './styled';

const { market } = urls;
const [, , , configMenuItems] = config;

function MobileFooterMenu() {
  function menuButtonClick(event) {
    mobileFooterButtonClick(event);
  }

  const menuItems = useMemo(
    () =>
      configMenuItems.map(({ header, items }) => (
        <MobileMenuItem key={header}>
          <MenuButton onClick={menuButtonClick}>
            {header}
            <MenuItemArrow src={arrow} />
          </MenuButton>
          <MenuList>
            {items.map(({ id, itemContent }) => (
              <MenuListItem key={id}>
                <ListItem to={market}>{itemContent}</ListItem>
              </MenuListItem>
            ))}
          </MenuList>
        </MobileMenuItem>
      )),
    [config]
  );

  return <MobileMenuWrapper>{menuItems}</MobileMenuWrapper>;
}

export default MobileFooterMenu;
