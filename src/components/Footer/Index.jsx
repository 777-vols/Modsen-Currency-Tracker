import logo from '@assets/logo.svg';
import React from 'react';

import { Container } from '../../styled';
import MobileFooterMenu from './MobileFooterMenu/Index';
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
                    <ListItem>Market</ListItem>
                  </li>
                  <li>
                    <ListItem>Service</ListItem>
                  </li>
                </FooterMenuList>
              </FooterMenuItem>
              <FooterMenuItem>
                <FooterMenuSpan>Product</FooterMenuSpan>
                <FooterMenuList>
                  <li>
                    <ListItem>Sparks</ListItem>
                  </li>
                  <li>
                    <ListItem>Snaps</ListItem>
                  </li>
                </FooterMenuList>
              </FooterMenuItem>
              <FooterMenuItem>
                <FooterMenuSpan>Community</FooterMenuSpan>
                <FooterMenuList>
                  <li>
                    <ListItem>Ideas</ListItem>
                  </li>
                  <li>
                    <ListItem>Streams</ListItem>
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
