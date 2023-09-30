import styled from 'styled-components';

const MarketPageHeader = styled.h1`
  margin-top: 30px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.color};
  @media (max-width: 900px) {
    font-size: 28px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export default MarketPageHeader;
