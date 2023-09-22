import styled from 'styled-components';

export const TimelineWrapper = styled.div`
  margin: 0 auto;
  max-width: 1206px;
  width: 100%;
`;
export const TimelineSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const TimelineSelect = styled.select`
  cursor: pointer;
  max-width: 300px;
  width: 100%;
  height: 51px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-size: 30px;
  @media (max-width: 600px) {
    max-width: 250px;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
export const TimelineModalOpenButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.theme.color};
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 5px;
  height: 51px;
  margin-left: 20px;
  padding: 0 20px;
  font-size: 20px;
  &:hover {
    box-shadow: 10px 5px 5px rgb(22, 218, 12);
    border: 1px solid rgb(22, 218, 12);
    color: rgb(22, 218, 12);
  }
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
export const SelectOption = styled.option`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const TimelineScheduleWrapper = styled.div`
  margin-top: 123px;
  @media (max-width: 800px) {
    margin-top: 60px;
  }
`;
export const TimelineSchedule = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
