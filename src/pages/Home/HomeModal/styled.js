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
  background: ${({ theme }) => theme.colors.homeModalBg};
`;
export const Window = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  background: ${({ theme }) => theme.background};
  max-width: 500px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  border-radius: 20px;
  position: relative;
  padding: ${({ theme }) => theme.padding.fifteen}px;
  margin: ${({ theme }) => theme.margin.fifteen}px;
`;
export const CloseButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.fontSize.mediumS};
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
    background-color: ${({ theme }) => theme.colors.lightRed};
  }
`;

export const Header = styled.h5`
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.fontSize.mediumL};
  display: flex;
  justify-content: center;
  @media (${({ theme }) => theme.media.smallS}) {
    font-size: ${({ theme }) => theme.fontSize.mediumS};
  }
`;

export const InnerBlock = styled.div`
  padding-top: ${({ theme }) => theme.padding.thirty}px;
  padding-bottom: ${({ theme }) => theme.padding.twenty}px;
  display: flex;
  justify-content: space-around;
`;
export const Panel = styled.div`
  min-width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.ten}px;
  width: 100%;
`;
export const SelectSpan = styled.span`
  margin: ${({ theme }) => theme.margin.zero}px auto;
  margin-bottom: ${({ theme }) => theme.margin.ten}px;
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.fontSize.mediumS};
  white-space: nowrap;
  border-radius: 5px;
  @media (${({ theme }) => theme.media.smallS}) {
    font-size: ${({ theme }) => theme.fontSize.smallL};
  }
`;
export const StyledSpan = styled.span`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.mediumS};
  background: ${({ theme }) => theme.colors.darkFontColor};
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  @media (${({ theme }) => theme.media.smallS}) {
    height: 40px;
    font-size: ${({ theme }) => theme.fontSize.smallL};
  }
`;
export const StyledInput = styled.input`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.mediumS};
  background: ${({ theme }) => theme.colors.darkFontColor};
  width: 100%;
  height: 46px;
  border-radius: 5px;
  @media (${({ theme }) => theme.media.smallS}) {
    height: 40px;
    font-size: ${({ theme }) => theme.fontSize.smallL};
  }
`;
export const Result = styled.div`
  white-space: nowrap;
  overflow: auto;
  text-align: center;
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.fontSize.mediumL};
  margin-bottom: ${({ theme }) => theme.margin.twenty}px;
  overflow: auto;
  @media (${({ theme }) => theme.media.smallS}) {
    margin-left: ${({ theme }) => theme.margin.twentyFive}px;
    font-size: ${({ theme }) => theme.fontSize.mediumM};
  }
`;

export const StyledSelect = styled.div`
  font-size: ${({ theme }) => theme.fontSize.mediumS};
  min-width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.five}px;
  width: 100%;
  @media (${({ theme }) => theme.media.smallS}) {
    font-size: ${({ theme }) => theme.fontSize.smallL};
  }
`;
