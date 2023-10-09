import error from '@assets/error.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${(props) => props.theme.colors.lightPink};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  min-height: 250px;
  min-width: 250px;
  width: 700px;
  height: 700px;
  display: flex;
  justify-content: center;
  background-image: url(${error});
  @media (${(props) => props.theme.media.mediumS}) {
    width: 500px;
    height: 500px;
  }
  @media (${(props) => props.theme.media.smallS}) {
    width: 300px;
    height: 300px;
  }
`;
