import styled from 'styled-components';

export const Window = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${(props) => props.theme.fontFamily};
  background: ${(props) => props.theme.background};
  max-width: 1050px;
  width: 100%;
  max-height: 550px;
  height: 100%;
  border-radius: 20px;
  position: relative;
  padding: ${(props) => props.theme.padding.twenty}px;
  margin: ${(props) => props.theme.padding.twentyFive}px;
`;

export const WarningSpan = styled.span`
  color: ${(props) => props.theme.colors.red};
  position: absolute;
  top: 10px;
  left: 30px;
  font-size: ${(props) => props.theme.fontSize.smallS};
`;
export const InfoButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.color};
  width: 35px;
  height: 35px;
  background: transparent;
  border-radius: 30px;
  font-size: ${(props) => props.theme.fontSize.mediumS};
  border: 2px solid ${(props) => props.theme.color};
  position: absolute;
  right: 15px;
  top: 60px;
  transition: 0.2s;
  z-index: 1000;

  &:hover {
    background: ${(props) => props.theme.colors.lightRed};
  }
`;
export const InfoWrapper = styled.span`
  padding: ${(props) => props.theme.padding.twenty}px;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.background};
  position: absolute;
  top: 0px;
  left: 0px;
  margin-right: ${(props) => props.theme.padding.eighty}px;
  max-width: 800px;
`;
export const InfoSpan = styled.span`
  font-size: ${(props) => props.theme.fontSize.smallM};
`;
export const InputsWrapper = styled.div`
  max-height: 450px;
  margin-right: ${(props) => props.theme.padding.fourty}px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  position: relative;
`;

export const ButtonsWrapper = styled.div`
  padding: ${(props) => props.theme.padding.twentyFive}px ${(props) => props.theme.padding.thirty}px
    ${(props) => props.theme.padding.zero}px ${(props) => props.theme.padding.thirty}px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  bottom: 10px;
  @media (${(props) => props.theme.media.smallS}) {
    padding: ${(props) => props.theme.padding.twentyFive}px ${(props) => props.theme.padding.ten}px
      ${(props) => props.theme.padding.zero}px ${(props) => props.theme.padding.ten}px;
  }
`;
export const ModalButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.color};
  background: transparent;
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 5px;
  transition: 0.2s;
  font-size: ${(props) => props.theme.fontSize.smallL};
  &:hover {
    color: ${(props) => props.theme.colors.greenColor};
    border: 1px solid ${(props) => props.theme.colors.greenColor};
  }
  @media (${(props) => props.theme.media.smallS}) {
    font-size: ${(props) => props.theme.fontSize.smallM};
  }
`;
