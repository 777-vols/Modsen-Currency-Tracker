import styled from 'styled-components';

export const Window = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${({ theme }) => theme.fontFamily};
  background: ${({ theme }) => theme.background};
  max-width: 1050px;
  width: 100%;
  max-height: 550px;
  height: 100%;
  border-radius: 20px;
  position: relative;
  padding: ${({ theme }) => theme.padding.twenty}px;
  margin: ${({ theme }) => theme.margin.twentyFive}px;
`;

export const WarningSpan = styled.span`
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  top: 10px;
  left: 30px;
  font-size: ${({ theme }) => theme.fontSize.smallS};
`;
export const InfoButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  width: 35px;
  height: 35px;
  background: transparent;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSize.mediumS};
  border: 2px solid ${({ theme }) => theme.color};
  position: absolute;
  right: 15px;
  top: 60px;
  transition: 0.2s;
  z-index: 1000;

  &:hover {
    background: ${({ theme }) => theme.colors.lightRed};
  }
`;
export const InfoWrapper = styled.div`
  padding: ${({ theme }) => theme.padding.twenty}px;
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`;
export const InfoSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.smallM};
`;
export const InputsWrapper = styled.div`
  max-height: 450px;
  margin-right: ${({ theme }) => theme.margin.fourty}px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  position: relative;
`;

export const ButtonsWrapper = styled.div`
  padding: ${({ theme }) => theme.padding.twentyFive}px ${({ theme }) => theme.padding.thirty}px
    ${({ theme }) => theme.padding.zero}px ${({ theme }) => theme.padding.thirty}px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  bottom: 10px;
  @media (${({ theme }) => theme.media.smallS}) {
    padding: ${({ theme }) => theme.padding.twentyFive}px ${({ theme }) => theme.padding.ten}px
      ${({ theme }) => theme.padding.zero}px ${({ theme }) => theme.padding.ten}px;
  }
`;
export const ModalButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 5px;
  transition: 0.2s;
  font-size: ${({ theme }) => theme.fontSize.smallL};
  &:hover {
    color: ${({ theme }) => theme.colors.greenColor};
    border: 1px solid ${({ theme }) => theme.colors.greenColor};
  }
  @media (${({ theme }) => theme.media.smallS}) {
    font-size: ${({ theme }) => theme.fontSize.smallM};
  }
`;
