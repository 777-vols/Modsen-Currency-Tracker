import logo from '@assets/logo.svg';
import React, { useMemo } from 'react';

import { Container } from '@/styled';

import config from './config';
import MobileFooterMenu from './MobileFooterMenu';
import {
  Info,
  InfoBody,
  InfoHead,
  InfoLogo,
  InfoName,
  Inner,
  ListItem,
  Menu,
  MenuItem,
  MenuList,
  MenuSpan,
  StyledSpan,
  Wrapper
} from './styled';

const [{ content: infoName }, { content: infoBody }, { content: footerSpan }, configMenuItems] =
  config;

function Footer() {
  const menuItems = useMemo(
    () =>
      configMenuItems.map(({ header, items }) => (
        <MenuItem key={header}>
          <MenuSpan>{header}</MenuSpan>
          <MenuList>
            {items.map(({ id, itemContent, url }) => (
              <li key={id}>
                <ListItem to={url}>{itemContent}</ListItem>
              </li>
            ))}
          </MenuList>
        </MenuItem>
      )),
    []
  );
  return (
    <footer>
      <Container>
        <Wrapper>
          <Inner>
            <Info>
              <InfoHead>
                <InfoLogo src={logo} />
                <InfoName>{infoName}</InfoName>
              </InfoHead>
              <InfoBody>{infoBody}</InfoBody>
            </Info>
            <MobileFooterMenu />
            <Menu>{menuItems}</Menu>
          </Inner>
          <StyledSpan>{footerSpan}</StyledSpan>
        </Wrapper>
      </Container>
    </footer>
  );
}

export default Footer;
