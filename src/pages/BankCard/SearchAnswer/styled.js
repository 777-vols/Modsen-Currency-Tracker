import styled from 'styled-components';

export const AnswerWrapper = styled.div`
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
export const AnswerFullname = styled.span`
  color: ${(props) => props.theme.colors.darkFontColor};
  font-size: ${(props) => props.theme.fontSize.mediumS};
  @media (${(props) => props.theme.media.smallM}) {
    top: 18px;
  }
`;
export const AnswerShortName = styled.span`
  color: ${(props) => props.theme.colors.darkFontColor};
  font-size: ${(props) => props.theme.fontSize.smallM};
`;
