import React from 'react';
import logo from '@assets/logo.svg';
import urls from '@constants/urls';

import { Container } from '@/styled';

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

function Footer() {
  return (
    <footer>
      <Container>
        <FooterWrapper>
          <FooterInner>
            <FooterInfo>
              <FooterInfoHead>
                <FooterInfoLogo src={logo} />
                <FooterInfoName>Modsen Currency Tracker</FooterInfoName>
              </FooterInfoHead>
              <FooterInfoBody>
                Since then, the company has grown organically to. Starsup is the world&apos;s
                largest trading platform, with $12 billion worth of currency trading and 500,000
                tickets sold daily to tens of thousands of traders worldwide.
              </FooterInfoBody>
            </FooterInfo>
            <MobileFooterMenu />
            <FooterMenu>
              <FooterMenuItem>
                <FooterMenuSpan>General</FooterMenuSpan>
                <FooterMenuList>
                  <li>
                    <ListItem to={urls.market}>Market</ListItem>
                  </li>
                  <li>
                    <ListItem to={urls.market}>Service</ListItem>
                  </li>
                </FooterMenuList>
              </FooterMenuItem>
              <FooterMenuItem>
                <FooterMenuSpan>Product</FooterMenuSpan>
                <FooterMenuList>
                  <li>
                    <ListItem to={urls.market}>Sparks</ListItem>
                  </li>
                  <li>
                    <ListItem to={urls.market}>Snaps</ListItem>
                  </li>
                </FooterMenuList>
              </FooterMenuItem>
              <FooterMenuItem>
                <FooterMenuSpan>Community</FooterMenuSpan>
                <FooterMenuList>
                  <li>
                    <ListItem to={urls.market}>Ideas</ListItem>
                  </li>
                  <li>
                    <ListItem to={urls.market}>Streams</ListItem>
                  </li>
                </FooterMenuList>
              </FooterMenuItem>
            </FooterMenu>
          </FooterInner>
          <FooterSpan>Startsup © 2023-2024, All Rights Reserved</FooterSpan>
        </FooterWrapper>
      </Container>
    </footer>
  );
}

export default Footer;
