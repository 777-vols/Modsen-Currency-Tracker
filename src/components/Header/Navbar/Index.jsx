import React from 'react';

import logo from '@assets/logo.svg';
import * as urls from '@constants/urls';

import Checkbox from './Checkbox/Index';
import {
  LinkWrapper,
  Logo,
  LogoLink,
  MenuLink,
  MenuList,
  NavbarWrapper,
  StyledNav
} from './styled';

function Navbar() {
  return (
    <NavbarWrapper>
      <LogoLink link_test="logo" to={urls.baseUrl}>
        <Logo src={logo} alt="logo" />
      </LogoLink>

      <StyledNav>
        <MenuList id="menuList">
          <LinkWrapper>
            <MenuLink link_test="menu_home" to={urls.home}>
              Home
            </MenuLink>
          </LinkWrapper>
          <LinkWrapper>
            <MenuLink link_test="menu_timeline" to={urls.timeline}>
              Timeline
            </MenuLink>
          </LinkWrapper>
          <LinkWrapper>
            <MenuLink link_test="menu_bankCard" to={urls.bankCard}>
              Bank card
            </MenuLink>
          </LinkWrapper>
          <LinkWrapper>
            <MenuLink link_test="menu_contacts" to={urls.contact}>
              Contato
            </MenuLink>
          </LinkWrapper>
        </MenuList>
      </StyledNav>

      <Checkbox />
    </NavbarWrapper>
  );
}

export default Navbar;
