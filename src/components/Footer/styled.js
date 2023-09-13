import styled from 'styled-components';

export const FooterWrapper = styled.div`
  max-width: 1256px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;
export const FooterInner = styled.div`
  display: flex;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;
export const FooterInfo = styled.div`
  max-width: 485px;
  width: 100%;
  margin-top: 20px;
  @media (max-width: 1050px) {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;
export const FooterInfoHead = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: 1050px) {
    margin-bottom: 30px;
  }
`;
export const FooterInfoLogo = styled.img`
  width: 40px;
  height: 46px;
  @media (max-width: 900px) {
    width: 30px;
    height: 34px;
  }
`;
export const FooterInfoName = styled.span`
  background: linear-gradient(90.18deg, #00ce2c 0.2%, #aedf23 50%, #a3dc00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 26px;
  font-weight: 600;
  margin-left: 22px;
  white-space: nowrap;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
export const FooterInfoBody = styled.div`
  font-size: 24px;
  line-height: 36px;
  width: 482px;
  width: 100%;
  margin-top: 19px;
  font-weight: 300;
  @media (max-width: 1050px) {
    display: none;
  }
`;
export const FooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 105px;
  @media (max-width: 1050px) {
    padding-left: 0;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
export const FooterMenuItem = styled.div`
  padding: 10px;
  width: 100%;
`;
export const FooterMenuSpan = styled.span`
  font-size: 28px;
  margin-bottom: 32px;
  display: block;
  @media (max-width: 1050px) {
    font-size: 23px;
    display: flex;
    justify-content: center;
  }
`;
export const FooterMenuList = styled.ul``;
export const ListItem = styled.span`
  display: block;
  color: rgb(137, 137, 137);
  font-size: 24px;
  padding: 8px 0;
  @media (max-width: 1050px) {
    font-size: 18px;
    display: flex;
    justify-content: center;
  }
`;
export const FooterSpan = styled.div`
  padding: 55px 0 40px 0;
  color: rgb(137, 137, 137);
  display: flex;
  justify-content: center;
  font-size: 24px;
  @media (max-width: 1050px) {
    font-size: 15px;
    padding: 36px 0 20px 0;
  }
`;
