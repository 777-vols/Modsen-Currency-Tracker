import styled from 'styled-components';

export const TimelineWrapper = styled.div`
  margin: 0 auto;
  max-width: 1206px;
  width: 100%;
`;
export const TimelineSelectWrapper = styled.div``;
export const TimelineSelect = styled.select`
  max-width: 272px;
  width: 100%;
  height: 51px;
  background-color: transparent;
  color: ${(props) => props.theme.color};
  /* border: 2px solid ${(props) => props.theme.background}; */
  font-size: 30px;
`;
export const SelectOption = styled.option`
  color: black;
`;

export const TimelineScheduleWrapper = styled.div``;
export const TimelineCurrencyCard = styled.div``;
export const TimelineSchedule = styled.div``;
