import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(45deg, rgba(18, 18, 18, 1) 10%, rgba(36, 121, 64, 0) 100%);
  filter: drop-shadow(rgba(36, 121, 64, 0.7) 0px 0px 0px);
  padding: 32px 0px 58px 45px;
`;
export const ContentInner = styled.div`
  display: flex;
  max-width: 1065px;
  width: 100%;
`;
export const ContentInfo = styled.div``;
export const InfoWrapper = styled.div`
  background: linear-gradient(90.18deg, #00ce2c 0.2%, #aedf23 50%, #a3dc00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-right: 60px;
`;
export const InfoTopPart = styled.h1`
  line-height: 105px;
  font-weight: 600;
  font-size: 76px;
`;
export const InfoBottomPart = styled.h2`
  font-size: 90px;
  line-height: 120px;
  font-weight: 600;
  display: flex;
  justify-content: right;
`;
export const ContentSpanWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: right;
`;
export const ContentSpan = styled.span`
  width: 100%;
  max-width: 397px;
  font-size: 25px;
  font-weight: 300;
  line-height: 46px;
  text-align: center;
`;
export const ContentImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 313px;
`;
