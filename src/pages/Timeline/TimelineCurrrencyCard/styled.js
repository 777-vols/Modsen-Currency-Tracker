import styled from 'styled-components';

export const CardWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  @media (${(props) => props.theme.media.smallM}) {
    max-width: 300px;
    margin: ${(props) => props.theme.padding.zero}px auto;
  }
`;
export const CardImage = styled.img`
  @media (${(props) => props.theme.media.mediumL}) {
    width: 50px;
    height: 50px;
  }
`;
export const CardStats = styled.div`
  margin-left: ${(props) => props.theme.padding.twentyFive}px;
  display: flex;
  flex-direction: column;
`;
export const CardName = styled.span`
  font-size: ${(props) => props.theme.fontSize.mediumXL};
  @media (${(props) => props.theme.media.mediumL}) {
    font-size: ${(props) => props.theme.fontSize.mediumM};
  }
`;
export const CardShortName = styled.span`
  font-size: ${(props) => props.theme.fontSize.smallM};
  @media (${(props) => props.theme.media.mediumL}) {
    font-size: ${(props) => props.theme.fontSize.smallS};
  }
`;
