import logo from '@assets/logo.svg';
import urls from '@constants/urls';
import useOnClickOutside from '@hooks/useOnCickOutside';
import React, { useMemo, useRef, useState } from 'react';

import { Container } from '@/styled';

import Checkbox from './Checkbox';
import config from './config';
import {
  BurgerMenuButton,
  ButtonsWrapper,
  LinkWrapper,
  Logo,
  LogoLink,
  MenuLink,
  MenuList,
  StyledBar,
  StyledNav,
  StyledNavMobile,
  Wrapper
} from './styled';

function Navbar() {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
  const mobileMenuRef = useRef();

  function burgerButtonHandle() {
    setBurgerMenuIsOpen((prevState) => !prevState);
  }

  useOnClickOutside(mobileMenuRef, () => {
    if (burgerMenuIsOpen) {
      burgerButtonHandle();
    }
  });

  const { baseUrl } = urls;

  const navbarItems = useMemo(
    () =>
      config.map(({ name, url }) => (
        <LinkWrapper key={name}>
          <MenuLink data-cy={`nav_${name}`} to={url}>
            {name}
          </MenuLink>
        </LinkWrapper>
      )),
    []
  );
  return (
    <Container>
      <Wrapper ref={mobileMenuRef}>
        <LogoLink data-cy="nav_logo" to={baseUrl}>
          <Logo src={logo} alt="logo" />
        </LogoLink>

        <StyledNav open={burgerMenuIsOpen}>
          <MenuList data-cy="navList">{navbarItems}</MenuList>
        </StyledNav>
        <StyledNavMobile open={burgerMenuIsOpen}>
          <MenuList data-cy="navList">{navbarItems}</MenuList>
        </StyledNavMobile>
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
      </Wrapper>
    </Container>
  );
}

export default Navbar;
