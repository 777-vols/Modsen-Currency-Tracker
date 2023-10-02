import styled from 'styled-components';

export const SearchResultWrapper = styled.div`
  max-width: 450px;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.inputBgGrey};
  padding: ${(props) => props.theme.padding.ten}px;
  margin: ${(props) => props.theme.padding.zero}px auto;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.colors.greyColor};
  }
`;
export const SearchResultShortName = styled.span`
  color: ${(props) => props.theme.colors.darkFontColor};
  font-size: ${(props) => props.theme.fontSize.mediumS};
  @media (${(props) => props.theme.media.smallM}) {
    top: 18px;
  }
`;
export const SearchResultFullname = styled.span`
  color: ${(props) => props.theme.colors.darkFontColor};
  font-size: ${(props) => props.theme.fontSize.smallM};
`;
