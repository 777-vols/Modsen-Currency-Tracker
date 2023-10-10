import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margin.zero}px auto;
  max-width: 1206px;
  width: 100%;
`;
export const PanelWrapper = styled.div`
  color: ${({ theme }) => theme.color};
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.margin.twentyFive}px;
  @media (${({ theme }) => theme.media.smallM}) {
    flex-direction: column;
  }
`;
export const SelectWrapper = styled.div`
  max-width: 330px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.mediumL};
  @media (${({ theme }) => theme.media.largeL}) {
    max-width: 280px;
    font-size: ${({ theme }) => theme.fontSize.mediumM};
  }
  @media (${({ theme }) => theme.media.mediumL}) {
    max-width: 250px;
    font-size: ${({ theme }) => theme.fontSize.smallL};
  }
  @media (${({ theme }) => theme.media.smallM}) {
    margin-bottom: ${({ theme }) => theme.margin.twenty}px;
  }
`;

export const ModalOpenButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 5px;
  height: 51px;
  margin-left: ${({ theme }) => theme.margin.twenty}px;
  padding: ${({ theme }) => theme.padding.zero}px ${({ theme }) => theme.padding.twenty}px;
  font-size: ${({ theme }) => theme.fontSize.mediumS};
  &:hover {
    box-shadow: 10px 5px 5px ${({ theme }) => theme.colors.greenColor};
    border: 1px solid ${({ theme }) => theme.colors.greenColor};
    color: ${({ theme }) => theme.colors.greenColor};
  }
  @media (${({ theme }) => theme.media.mediumL}) {
    height: 41px;
    font-size: ${({ theme }) => theme.fontSize.smallL};
  }
  @media (${({ theme }) => theme.media.smallM}) {
    font-size: ${({ theme }) => theme.fontSize.smallM};
  }
`;

export const ScheduleWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margin.hundredTwentyThree}px;
  @media (${({ theme }) => theme.media.mediumL}) {
    margin-top: ${({ theme }) => theme.margin.sixty}px;
  }
`;
export const Schedule = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
