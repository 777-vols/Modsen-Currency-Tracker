import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.h1`
  margin-top: ${({ theme }) => theme.margin.thirty}px;
  font-size: ${({ theme }) => theme.fontSize.mediumXL};
  display: flex;
  justify-content: center;
  color: red;
  @media (${({ theme }) => theme.media.mediumL}) {
    font-size: ${({ theme }) => theme.fontSize.mediumM};
  }
  @media (${({ theme }) => theme.media.smallM}) {
    font-size: ${({ theme }) => theme.fontSize.smallL};
  }
`;
export const LinkWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margin.thirty}px;
  display: flex;
  justify-content: center;
  height: 30px;
`;
export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.fontSize.mediumS};
  opacity: 0.8;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
  @media (${({ theme }) => theme.media.smallM}) {
    font-size: ${({ theme }) => theme.fontSize.smallM};
  }
`;
