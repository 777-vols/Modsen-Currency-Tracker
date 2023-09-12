import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 1420px;
  background: linear-gradient(45deg, rgba(18, 18, 18, 1) 10%, rgba(36, 121, 64, 0) 100%);
  filter: drop-shadow(rgba(36, 121, 64, 0.7) 0px 0px 0px);
  padding: 32px 0px 58px 45px;
  @media (max-width: 900px) {
    padding: 20px;
  }
  @media (max-width: 900px) {
    padding: 20px 4px;
  }
`;
export const ContentInner = styled.div`
  display: flex;
  max-width: 1065px;
  width: 100%;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;
export const ContentInfo = styled.div``;
export const InfoWrapper = styled.div`
  background: linear-gradient(90.18deg, #00ce2c 0.2%, #aedf23 50%, #a3dc00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-right: 60px;
  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;
export const InfoTopPart = styled.h1`
  line-height: 105px;
  font-weight: 600;
  font-size: 76px;

  @media (max-width: 1105px) {
    line-height: 90px;
    font-size: 60px;
  }
  @media (max-width: 900px) {
    line-height: 60px;
    font-size: 50px;
  }
  @media (max-width: 500px) {
    line-height: 45px;
    font-size: 35px;
  }
`;
export const InfoBottomPart = styled.h2`
  font-size: 90px;
  line-height: 120px;
  font-weight: 600;
  display: flex;
  justify-content: right;

  @media (max-width: 1105px) {
    line-height: 100px;
    font-size: 75px;
  }
  @media (max-width: 900px) {
    justify-content: center;
    line-height: 60px;
    font-size: 50px;
  }
  @media (max-width: 500px) {
    line-height: 45px;
    font-size: 35px;
  }
`;
export const ContentSpanWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: right;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;
export const ContentSpan = styled.span`
  width: 100%;
  max-width: 397px;
  font-size: 25px;
  font-weight: 300;
  line-height: 46px;
  text-align: center;
  @media (max-width: 1105px) {
    font-size: 20px;
    line-height: 35px;
  }
  @media (max-width: 900px) {
    max-width: 230px;
    font-size: 15px;
    line-height: 25px;
  }
  @media (max-width: 500px) {
    max-width: 183px;
    font-size: 12px;
    line-height: 20px;
  }
`;
export const ContentImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 313px;
  @media (max-width: 1105px) {
    max-width: 250px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
