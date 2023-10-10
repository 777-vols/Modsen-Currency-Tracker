import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margin.zero}px auto;
  max-width: 150px;
  width: 100%;
  padding: ${({ theme }) => theme.padding.seven}px;
`;
export const Header = styled.span`
  font-size: ${({ theme }) => theme.fontSize.smallM};
  color: ${({ theme }) => theme.color};
  margin-bottom: ${({ theme }) => theme.margin.five}px;
`;
export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.smallS};
  color: ${({ theme }) => theme.colors.lightFontColor};
  width: 100%;
`;
