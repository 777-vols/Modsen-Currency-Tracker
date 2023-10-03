import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.homeModalBg};
`;
export const Window = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  background: ${(props) => props.theme.background};
  max-width: 500px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  border-radius: 20px;
  position: relative;
  padding: ${(props) => props.theme.padding.fifteen}px;
  margin: ${(props) => props.theme.padding.fifteen}px;
`;
export const CloseButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fontSize.mediumS};
  border-radius: 5px;
  width: 35px;
  height: 35px;
  background: transparent;
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.colors.lightRed};
  }
`;

export const Header = styled.h5`
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fontSize.mediumL};
  display: flex;
  justify-content: center;
  @media (${(props) => props.theme.media.smallS}) {
    font-size: ${(props) => props.theme.fontSize.mediumS};
  }
`;

export const InnerBlock = styled.div`
  padding-top: ${(props) => props.theme.padding.thirty}px;
  padding-bottom: ${(props) => props.theme.padding.twenty}px;
  display: flex;
  justify-content: space-around;
`;
export const Panel = styled.div`
  min-width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.theme.padding.ten}px;
  width: 100%;
`;
export const SelectSpan = styled.span`
  margin: ${(props) => props.theme.padding.zero}px auto;
  margin-bottom: ${(props) => props.theme.padding.ten}px;
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fontSize.mediumS};
  white-space: nowrap;
  border-radius: 5px;
  @media (${(props) => props.theme.media.smallS}) {
    font-size: ${(props) => props.theme.fontSize.smallL};
  }
`;
export const StyledSpan = styled.span`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.mediumS};
  background: ${(props) => props.theme.colors.darkFontColor};
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  @media (${(props) => props.theme.media.smallS}) {
    height: 40px;
    font-size: ${(props) => props.theme.fontSize.smallL};
  }
`;
export const StyledInput = styled.input`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.mediumS};
  background: ${(props) => props.theme.colors.darkFontColor};
  width: 100%;
  height: 46px;
  border-radius: 5px;
  @media (${(props) => props.theme.media.smallS}) {
    height: 40px;
    font-size: ${(props) => props.theme.fontSize.smallL};
  }
`;
export const Result = styled.div`
  white-space: nowrap;
  overflow: auto;
  text-align: center;
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fontSize.mediumL};
  margin-bottom: ${(props) => props.theme.padding.twenty}px;
  overflow: auto;
  @media (${(props) => props.theme.media.smallS}) {
    margin-left: ${(props) => props.theme.padding.twentyFive}px;
    font-size: ${(props) => props.theme.fontSize.mediumM};
  }
`;

export const StyledSelect = styled.div`
  font-size: ${(props) => props.theme.fontSize.mediumS};
  min-width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.theme.padding.five}px;
  width: 100%;
  @media (${(props) => props.theme.media.smallS}) {
    font-size: ${(props) => props.theme.fontSize.smallL};
  }
`;
