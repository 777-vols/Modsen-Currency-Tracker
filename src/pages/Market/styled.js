import styled from 'styled-components';

const Header = styled.h1`
  margin-top: ${({ theme }) => theme.margin.thirty}px;
  font-size: ${({ theme }) => theme.fontSize.mediumXL};
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color};
  @media (${({ theme }) => theme.media.mediumL}) {
    font-size: ${({ theme }) => theme.fontSize.mediumM};
  }
  @media (${({ theme }) => theme.media.smallM}) {
    font-size: ${({ theme }) => theme.fontSize.smallL};
  }
`;

export default Header;
