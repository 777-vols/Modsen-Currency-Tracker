import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;
  max-width: 520px;
  width: 100%;
  height: 153px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.lightGreyColor};
  background-color: ${({ theme }) => theme.colors.greyColor};
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.margin.fifty}px;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreyColor};
    box-shadow: 10px 5px 5px ${({ theme }) => theme.colors.greenColor};
    border: 2px solid ${({ theme }) => theme.colors.greenColor};
  }

  @media (${({ theme }) => theme.media.largeM}) {
    height: 120px;
  }
  @media (${({ theme }) => theme.media.mediumL}) {
    height: 80px;
  }
  @media (${({ theme }) => theme.media.smallL}) {
    height: 62px;
    max-width: 361px;
    border-radius: 3px;
    margin-top: ${({ theme }) => theme.margin.twenty}px;
  }
`;
export const InnerBlock = styled.div`
  margin-left: ${({ theme }) => theme.margin.thirtyTwo}px;
  display: flex;
  align-items: center;
  @media (${({ theme }) => theme.media.mediumL}) {
    margin-left: ${({ theme }) => theme.margin.twenty}px;
  }
`;
export const Stats = styled.div`
  margin-left: ${({ theme }) => theme.margin.thirty}px;
  display: flex;
  flex-direction: column;
  @media (${({ theme }) => theme.media.mediumL}) {
    margin-left: ${({ theme }) => theme.margin.twenty}px;
  }
`;
export const Image = styled.img`
  @media (${({ theme }) => theme.media.largeM}) {
    height: 60px;
    width: 60px;
  }
  @media (${({ theme }) => theme.media.mediumL}) {
    height: 45px;
    width: 45px;
  }
  @media (${({ theme }) => theme.media.smallL}) {
    height: 30px;
    width: 30px;
  }
`;
export const Name = styled.span`
  margin-top: ${({ theme }) => theme.margin.five}px;
  font-size: ${({ theme }) => theme.fontSize.mediumXL};
  font-weight: ${({ theme }) => theme.fontWeight.small};
  color: ${({ theme }) => theme.colors.currencyNameColor};
  @media (${({ theme }) => theme.media.largeM}) {
    font-size: ${({ theme }) => theme.fontSize.mediumM};
  }
  @media (${({ theme }) => theme.media.mediumL}) {
    font-size: ${({ theme }) => theme.fontSize.mediumS};
  }
  @media (${({ theme }) => theme.media.smallL}) {
    font-size: ${({ theme }) => theme.fontSize.smallS};
  }
`;
export const Rate = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mediumL};
  color: ${({ theme }) => theme.colors.currencyRateColor};
  font-weight: ${({ theme }) => theme.fontWeight.small};
  @media (${({ theme }) => theme.media.largeM}) {
    font-size: ${({ theme }) => theme.fontSize.mediumS};
  }
  @media (${({ theme }) => theme.media.mediumL}) {
    font-size: ${({ theme }) => theme.fontSize.smallL};
  }
  @media (${({ theme }) => theme.media.smallL}) {
    font-size: ${({ theme }) => theme.fontSize.smallS};
  }
`;
