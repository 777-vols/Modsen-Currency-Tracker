import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1420px;
  width: 100%;
  margin: ${({ theme }) => theme.margin.zero}px auto;
  margin-top: ${({ theme }) => theme.margin.fifty}px;
`;
export const Header = styled.h3`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.margin.twentyFive}px;
  font-size: ${({ theme }) => theme.fontSize.mediumXL};
  font-weight: ${({ theme }) => theme.fontWeight.small};
  @media (${({ theme }) => theme.media.mediumL}) {
    font-size: ${({ theme }) => theme.fontSize.mediumM};
  }
  @media (${({ theme }) => theme.media.smallM}) {
    font-size: ${({ theme }) => theme.fontSize.mediumS};
  }
`;
export const InputWrapper = styled.div`
  margin: ${({ theme }) => theme.margin.zero}px auto;
  max-width: 450px;
  position: relative;
  @media (${({ theme }) => theme.media.mediumL}) {
    max-width: 350px;
  }
  @media (${({ theme }) => theme.media.smallM}) {
    max-width: 250px;
  }
`;
export const Input = styled.input`
  color: ${({ theme }) => theme.colors.darkFontColor};
  font-size: ${({ theme }) => theme.fontSize.smallL};
  background-color: ${({ theme }) => theme.colors.inputBgGrey};
  border: none;
  height: 66px;
  width: 100%;
  padding: ${({ theme }) => theme.padding.zero}px ${({ theme }) => theme.padding.twenty}px;
  border-radius: 10px;
  margin: ${({ theme }) => theme.margin.zero}px auto;
  @media (${({ theme }) => theme.media.mediumL}) {
    max-width: 350px;
    height: 50px;
  }
  @media (${({ theme }) => theme.media.smallM}) {
    max-width: 250px;
    height: 40px;
  }
`;
export const SearchInputImage = styled.img`
  position: absolute;
  right: 10px;
  top: 20px;
  @media (${({ theme }) => theme.media.mediumL}) {
    top: 15px;
  }
  @media (${({ theme }) => theme.media.smallM}) {
    top: 10px;
    width: 15px;
    height: 15px;
  }
`;
export const SearchResultWrapper = styled.div`
  top: 66px;
  position: absolute;
  z-index: 999;
  width: 100%;
  @media (${({ theme }) => theme.media.mediumL}) {
    top: 50px;
  }
  @media (${({ theme }) => theme.media.smallM}) {
    top: 40px;
  }
`;
export const MapWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margin.hundred}px;
  height: 460px;
`;
