import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 450px;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.inputBgGrey};
  padding: ${({ theme }) => theme.padding.ten}px;
  margin: ${({ theme }) => theme.margin.zero}px auto;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.greyColor};
  }
`;
export const ShortName = styled.span`
  color: ${({ theme }) => theme.colors.darkFontColor};
  font-size: ${({ theme }) => theme.fontSize.mediumS};
  @media (${({ theme }) => theme.media.smallM}) {
    top: 18px;
  }
`;
export const Fullname = styled.span`
  color: ${({ theme }) => theme.colors.darkFontColor};
  font-size: ${({ theme }) => theme.fontSize.smallM};
`;
