import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1256px;
  width: 100%;
  margin: ${({ theme }) => theme.margin.zero}px auto;
  padding: ${({ theme }) => theme.padding.zero}px ${({ theme }) => theme.padding.twelve}px;
  padding-top: ${({ theme }) => theme.padding.hundred}px;
  @media (${({ theme }) => theme.media.smallL}) {
    padding-top: ${({ theme }) => theme.padding.oneHundredFifty}px;
  }
`;
export const Inner = styled.div`
  display: flex;
  @media (${({ theme }) => theme.media.largeS}) {
    flex-direction: column;
  }
`;
export const Info = styled.div`
  max-width: 485px;
  width: 100%;
  margin-top: ${({ theme }) => theme.margin.twenty}px;
  @media (${({ theme }) => theme.media.largeS}) {
    margin: ${({ theme }) => theme.margin.zero}px auto;
    display: flex;
    justify-content: center;
  }
`;
export const InfoHead = styled.div`
  display: flex;
  align-items: flex-end;
  @media (${({ theme }) => theme.media.largeS}) {
    margin-bottom: ${({ theme }) => theme.margin.thirty}px;
  }
`;
export const InfoLogo = styled.img`
  width: 40px;
  height: 46px;
  @media (${({ theme }) => theme.media.mediumL}) {
    width: 30px;
    height: 34px;
  }
`;
export const InfoName = styled.span`
  background: ${({ theme }) => theme.colors.textGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-left: ${({ theme }) => theme.margin.twentyTwo}px;
  white-space: nowrap;
  @media (${({ theme }) => theme.media.smallS}) {
    font-size: ${({ theme }) => theme.fontSize.mediumS};
  }
`;
export const InfoBody = styled.div`
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  line-height: 36px;
  width: 482px;
  width: 100%;
  margin-top: ${({ theme }) => theme.margin.twenty}px;
  font-weight: ${({ theme }) => theme.fontWeight.small};
  @media (${({ theme }) => theme.media.largeS}) {
    display: none;
  }
`;
export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: ${({ theme }) => theme.padding.hundred}px;
  @media (${({ theme }) => theme.media.largeS}) {
    padding-left: ${({ theme }) => theme.padding.zero}px;
  }
  @media (${({ theme }) => theme.media.smallS}) {
    display: none;
  }
`;
export const MenuItem = styled.div`
  padding: ${({ theme }) => theme.padding.ten}px;
  width: 100%;
`;
export const MenuSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  margin-bottom: ${({ theme }) => theme.margin.thirtyTwo}px;
  display: block;
  @media (${({ theme }) => theme.media.largeS}) {
    font-size: ${({ theme }) => theme.fontSize.mediumS};
    display: flex;
    justify-content: center;
  }
`;
export const MenuList = styled.ul``;
export const ListItem = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.colors.lightGreyColor};
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  padding: ${({ theme }) => theme.padding.eight}px ${({ theme }) => theme.padding.zero};
  @media (${({ theme }) => theme.media.largeS}) {
    font-size: ${({ theme }) => theme.fontSize.smallL};
    display: flex;
    justify-content: center;
  }
  &:hover {
    color: ${({ theme }) => theme.color};
  }
`;
export const StyledSpan = styled.div`
  padding-top: ${({ theme }) => theme.padding.fiftyFive}px;
  padding-bottom: ${({ theme }) => theme.padding.fourty}px;
  color: ${({ theme }) => theme.colors.lightGreyColor};
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.mediumM};
  transition: 0.2s;
  @media (${({ theme }) => theme.media.largeS}) {
    font-size: ${({ theme }) => theme.fontSize.smallM};
    padding-top: ${({ theme }) => theme.padding.thirtyFive}px;
    padding-bottom: ${({ theme }) => theme.padding.twenty}px;
  }
`;
