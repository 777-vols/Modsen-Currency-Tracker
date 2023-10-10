import arrow from '@assets/arrow.svg';
import config from '@components/Footer/config';
import urls from '@constants/urls';
import mobileFooterButtonClickHelper from '@helpers/mobileFooterButtonClickHelper';
import React, { useMemo } from 'react';

import { ArrowImg, Button, Link, ListItem, MenuItem, MenuList, Wrapper } from './styled';

const { market } = urls;
const [, , , configMenuItems] = config;

function MobileFooterMenu() {
  function menuButtonClick(event) {
    mobileFooterButtonClickHelper(event);
  }

  const menuItems = useMemo(
    () =>
      configMenuItems.map(({ header, items }) => (
        <MenuItem key={header}>
          <Button onClick={menuButtonClick}>
            {header}
            <ArrowImg src={arrow} />
          </Button>
          <MenuList>
            {items.map(({ id, itemContent }) => (
              <ListItem key={id}>
                <Link to={market}>{itemContent}</Link>
              </ListItem>
            ))}
          </MenuList>
        </MenuItem>
      )),
    []
  );

  return <Wrapper>{menuItems}</Wrapper>;
}

export default MobileFooterMenu;
