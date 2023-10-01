import styled from 'styled-components';

export const TimelineWrapper = styled.div`
  margin: ${(props) => props.theme.padding.zero}px auto;
  max-width: 1206px;
  width: 100%;
`;
export const TimelinePanelWrapper = styled.div`
  color: ${(props) => props.theme.color};
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.padding.twentyFive}px;
  @media (${(props) => props.theme.media.smallM}) {
    flex-direction: column;
  }
`;
export const TimelineSelectWrapper = styled.div`
  max-width: 330px;
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.mediumL};
  @media (${(props) => props.theme.media.largeL}) {
    max-width: 280px;
    font-size: ${(props) => props.theme.fontSize.mediumM};
  }
  @media (${(props) => props.theme.media.mediumL}) {
    max-width: 250px;
    font-size: ${(props) => props.theme.fontSize.smallL};
  }
  @media (${(props) => props.theme.media.smallM}) {
    margin-bottom: ${(props) => props.theme.padding.twenty}px;
  }
`;

export const TimelineModalOpenButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.theme.color};
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 5px;
  height: 51px;
  margin-left: ${(props) => props.theme.padding.twenty}px;
  padding: ${(props) => props.theme.padding.zero}px ${(props) => props.theme.padding.twenty}px;
  font-size: ${(props) => props.theme.fontSize.mediumS};
  &:hover {
    box-shadow: 10px 5px 5px ${(props) => props.theme.colors.greenColor};
    border: 1px solid ${(props) => props.theme.colors.greenColor};
    color: ${(props) => props.theme.colors.greenColor};
  }
  @media (${(props) => props.theme.media.mediumL}) {
    height: 41px;
    font-size: ${(props) => props.theme.fontSize.smallL};
  }
  @media (${(props) => props.theme.media.smallM}) {
    font-size: ${(props) => props.theme.fontSize.smallM};
  }
`;

export const TimelineScheduleWrapper = styled.div`
  margin-top: ${(props) => props.theme.padding.hundredTwentyThree}px;
  @media (${(props) => props.theme.media.mediumL}) {
    margin-top: ${(props) => props.theme.padding.sixty}px;
  }
`;
export const TimelineSchedule = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
