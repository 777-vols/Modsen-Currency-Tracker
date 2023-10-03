import styled from 'styled-components';

const Header = styled.h1`
  margin-top: ${(props) => props.theme.padding.thirty}px;
  font-size: ${(props) => props.theme.fontSize.mediumXL};
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.color};
  @media (${(props) => props.theme.media.mediumL}) {
    font-size: ${(props) => props.theme.fontSize.mediumM};
  }
  @media (${(props) => props.theme.media.smallM}) {
    font-size: ${(props) => props.theme.fontSize.smallL};
  }
`;

export default Header;
