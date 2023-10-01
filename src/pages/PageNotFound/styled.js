import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PageNotFoundHeader = styled.h1`
  margin-top: ${(props) => props.theme.padding.thirty}px;
  font-size: ${(props) => props.theme.fontSize.mediumXL};
  display: flex;
  justify-content: center;
  color: red;
  @media (${(props) => props.theme.media.mediumL}) {
    font-size: ${(props) => props.theme.fontSize.mediumM};
  }
  @media (${(props) => props.theme.media.smallM}) {
    font-size: ${(props) => props.theme.fontSize.smallL};
  }
`;
export const LinkWrapper = styled.div`
  margin-top: ${(props) => props.theme.padding.thirty}px;
  display: flex;
  justify-content: center;
  height: 30px;
`;
export const PageNotFoundLink = styled(NavLink)`
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fontSize.mediumS};
  opacity: 0.8;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
  @media (${(props) => props.theme.media.smallM}) {
    font-size: ${(props) => props.theme.fontSize.smallM};
  }
`;
