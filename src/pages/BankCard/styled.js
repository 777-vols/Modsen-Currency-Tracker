import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1420px;
  width: 100%;
  margin: ${(props) => props.theme.padding.zero}px auto;
  margin-top: ${(props) => props.theme.padding.fifty}px;
`;
export const Header = styled.h3`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.padding.twentyFive}px;
  font-size: ${(props) => props.theme.fontSize.mediumXL};
  font-weight: ${(props) => props.theme.fontWeight.small};
  @media (${(props) => props.theme.media.mediumL}) {
    font-size: ${(props) => props.theme.fontSize.mediumM};
  }
  @media (${(props) => props.theme.media.smallM}) {
    font-size: ${(props) => props.theme.fontSize.mediumS};
  }
`;
export const InputWrapper = styled.div`
  margin: ${(props) => props.theme.padding.zero}px auto;
  max-width: 450px;
  position: relative;
  @media (${(props) => props.theme.media.mediumL}) {
    max-width: 350px;
  }
  @media (${(props) => props.theme.media.smallM}) {
    max-width: 250px;
  }
`;
export const Input = styled.input`
  color: ${(props) => props.theme.colors.darkFontColor};
  font-size: ${(props) => props.theme.fontSize.smallL};
  background-color: ${(props) => props.theme.colors.inputBgGrey};
  border: none;
  height: 66px;
  width: 100%;
  padding: ${(props) => props.theme.padding.zero}px ${(props) => props.theme.padding.twenty}px;
  border-radius: 10px;
  margin: ${(props) => props.theme.padding.zero}px auto;
  @media (${(props) => props.theme.media.mediumL}) {
    max-width: 350px;
    height: 50px;
  }
  @media (${(props) => props.theme.media.smallM}) {
    max-width: 250px;
    height: 40px;
  }
`;
export const SearchInputImage = styled.img`
  position: absolute;
  right: 10px;
  top: 20px;
  @media (${(props) => props.theme.media.mediumL}) {
    top: 15px;
  }
  @media (${(props) => props.theme.media.smallM}) {
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
  @media (${(props) => props.theme.media.mediumL}) {
    top: 50px;
  }
  @media (${(props) => props.theme.media.smallM}) {
    top: 40px;
  }
`;
export const MapWrapper = styled.div`
  margin-top: ${(props) => props.theme.padding.hundred}px;
  height: 460px;
`;
