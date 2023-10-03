import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1256px;
  width: 100%;
  margin: ${(props) => props.theme.padding.zero}px auto;
  padding: ${(props) => props.theme.padding.zero}px ${(props) => props.theme.padding.twelve}px;
  padding-top: ${(props) => props.theme.padding.hundred}px;
  @media (${(props) => props.theme.media.smallL}) {
    padding-top: ${(props) => props.theme.padding.oneHundredFifty}px;
  }
`;
export const Inner = styled.div`
  display: flex;
  @media (${(props) => props.theme.media.largeS}) {
    flex-direction: column;
  }
`;
export const Info = styled.div`
  max-width: 485px;
  width: 100%;
  margin-top: ${(props) => props.theme.padding.twenty}px;
  @media (${(props) => props.theme.media.largeS}) {
    margin: ${(props) => props.theme.padding.zero}px auto;
    display: flex;
    justify-content: center;
  }
`;
export const InfoHead = styled.div`
  display: flex;
  align-items: flex-end;
  @media (${(props) => props.theme.media.largeS}) {
    margin-bottom: ${(props) => props.theme.padding.thirty}px;
  }
`;
export const InfoLogo = styled.img`
  width: 40px;
  height: 46px;
  @media (${(props) => props.theme.media.mediumL}) {
    width: 30px;
    height: 34px;
  }
`;
export const InfoName = styled.span`
  background: ${(props) => props.theme.colors.textGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: ${(props) => props.theme.fontSize.mediumM};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  margin-left: ${(props) => props.theme.padding.twentyTwo}px;
  white-space: nowrap;
  @media (${(props) => props.theme.media.smallS}) {
    font-size: ${(props) => props.theme.fontSize.mediumS};
  }
`;
export const InfoBody = styled.div`
  font-size: ${(props) => props.theme.fontSize.mediumM};
  line-height: 36px;
  width: 482px;
  width: 100%;
  margin-top: ${(props) => props.theme.padding.twenty}px;
  font-weight: ${(props) => props.theme.fontWeight.small};
  @media (${(props) => props.theme.media.largeS}) {
    display: none;
  }
`;
export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: ${(props) => props.theme.padding.hundred}px;
  @media (${(props) => props.theme.media.largeS}) {
    padding-left: ${(props) => props.theme.padding.zero}px;
  }
  @media (${(props) => props.theme.media.smallS}) {
    display: none;
  }
`;
export const MenuItem = styled.div`
  padding: ${(props) => props.theme.padding.ten}px;
  width: 100%;
`;
export const MenuSpan = styled.span`
  font-size: ${(props) => props.theme.fontSize.mediumM};
  margin-bottom: ${(props) => props.theme.padding.thirtyTwo}px;
  display: block;
  @media (${(props) => props.theme.media.largeS}) {
    font-size: ${(props) => props.theme.fontSize.mediumS};
    display: flex;
    justify-content: center;
  }
`;
export const MenuList = styled.ul``;
export const ListItem = styled(NavLink)`
  display: block;
  color: ${(props) => props.theme.colors.lightGreyColor};
  font-size: ${(props) => props.theme.fontSize.mediumM};
  padding: ${(props) => props.theme.padding.eight}px ${(props) => props.theme.padding.zero};
  @media (${(props) => props.theme.media.largeS}) {
    font-size: ${(props) => props.theme.fontSize.smallL};
    display: flex;
    justify-content: center;
  }
  &:hover {
    color: ${(props) => props.theme.color};
  }
`;
export const StyledSpan = styled.div`
  padding-top: ${(props) => props.theme.padding.fiftyFive}px;
  padding-bottom: ${(props) => props.theme.padding.fourty}px;
  color: ${(props) => props.theme.colors.lightGreyColor};
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.mediumM};
  transition: 0.2s;
  @media (${(props) => props.theme.media.largeS}) {
    font-size: ${(props) => props.theme.fontSize.smallM};
    padding-top: ${(props) => props.theme.padding.thirtyFive}px;
    padding-bottom: ${(props) => props.theme.padding.twenty}px;
  }
`;
