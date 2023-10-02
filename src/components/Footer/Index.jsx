import React, { useMemo } from 'react';
import logo from '@assets/logo.svg';
import urls from '@constants/urls';

import { Container } from '@/styled';

import config from './config';
import MobileFooterMenu from './MobileFooterMenu';
import {
  FooterInfo,
  FooterInfoBody,
  FooterInfoHead,
  FooterInfoLogo,
  FooterInfoName,
  FooterInner,
  FooterMenu,
  FooterMenuItem,
  FooterMenuList,
  FooterMenuSpan,
  FooterSpan,
  FooterWrapper,
  ListItem
} from './styled';

const { market } = urls;
const [{ content: infoName }, { content: infoBody }, { content: footerSpan }, configMenuItems] =
  config;

function Footer() {
  const menuItems = useMemo(
    () =>
      configMenuItems.map(({ header, items }) => (
        <FooterMenuItem key={header}>
          <FooterMenuSpan>{header}</FooterMenuSpan>
          <FooterMenuList>
            {items.map(({ id, itemContent }) => (
              <li key={id}>
                <ListItem to={market}>{itemContent}</ListItem>
              </li>
            ))}
          </FooterMenuList>
        </FooterMenuItem>
      )),
    [config]
  );
  return (
    <footer>
      <Container>
        <FooterWrapper>
          <FooterInner>
            <FooterInfo>
              <FooterInfoHead>
                <FooterInfoLogo src={logo} />
                <FooterInfoName>{infoName}</FooterInfoName>
              </FooterInfoHead>
              <FooterInfoBody>{infoBody}</FooterInfoBody>
            </FooterInfo>
            <MobileFooterMenu />
            <FooterMenu>{menuItems}</FooterMenu>
          </FooterInner>
          <FooterSpan>{footerSpan}</FooterSpan>
        </FooterWrapper>
      </Container>
    </footer>
  );
}

export default Footer;
