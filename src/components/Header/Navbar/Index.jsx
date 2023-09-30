import React, { useRef, useState } from 'react';
import logo from '@assets/logo.svg';
import urls from '@constants/urls';
import useOnClickOutside from '@hooks/useOnCickOutside';

import { Container } from '@/styled';

import Checkbox from './Checkbox/Index';
import navbarConfig from './config';
import {
  BurgerMenuButton,
  ButtonsWrapper,
  LinkWrapper,
  Logo,
  LogoLink,
  MenuLink,
  MenuList,
  NavbarWrapper,
  StyledBar,
  StyledNav
} from './styled';

function Navbar() {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
  const navRef = useRef();

  function burgerButtonHandle() {
    setBurgerMenuIsOpen((prevState) => !prevState);
  }

  useOnClickOutside(navRef, () => {
    if (burgerMenuIsOpen) {
      burgerButtonHandle();
    }
  });

  const { baseUrl } = urls;
  const navbarItems = navbarConfig.map(({ name, url }) => (
    <LinkWrapper key={name}>
      <MenuLink data-cy={`nav_${name}`} to={url}>
        {name}
      </MenuLink>
    </LinkWrapper>
  ));
  return (
    <Container>
      <NavbarWrapper ref={navRef}>
        <LogoLink data-cy="nav_logo" to={baseUrl}>
          <Logo src={logo} alt="logo" />
        </LogoLink>

        <StyledNav open={burgerMenuIsOpen}>
          <MenuList id="menuList">{navbarItems}</MenuList>
        </StyledNav>
        <ButtonsWrapper>
          <BurgerMenuButton
            className={burgerMenuIsOpen ? 'active' : ''}
            onClick={burgerButtonHandle}>
            <StyledBar />
            <StyledBar />
            <StyledBar />
          </BurgerMenuButton>
          <Checkbox />
        </ButtonsWrapper>
      </NavbarWrapper>
    </Container>
  );
}

export default Navbar;
