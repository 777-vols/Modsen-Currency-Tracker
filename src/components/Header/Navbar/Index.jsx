import React, { useMemo, useRef, useState } from 'react';
import logo from '@assets/logo.svg';
import urls from '@constants/urls';
import useOnClickOutside from '@hooks/useOnCickOutside';

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
  Wrapper
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

  const navbarItems = useMemo(
    () =>
      config.map(({ name, url }) => (
        <LinkWrapper key={name}>
          <MenuLink data-cy={`nav_${name}`} to={url}>
            {name}
          </MenuLink>
        </LinkWrapper>
      )),
    [config]
  );
  return (
    <Container>
      <Wrapper ref={navRef}>
        <LogoLink data-cy="nav_logo" to={baseUrl}>
          <Logo src={logo} alt="logo" />
        </LogoLink>

        <StyledNav open={burgerMenuIsOpen}>
          <MenuList data-cy="navList">{navbarItems}</MenuList>
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
      </Wrapper>
    </Container>
  );
}

export default Navbar;
