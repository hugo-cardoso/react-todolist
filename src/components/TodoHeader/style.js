import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 15px 0 15px;
  display: flex;
  flex-direction: column;
  background-color: #F0002F;

  @media screen and (min-width: 768px) {
    flex: 0 0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: #FFF;
  font-size: 20px;
  text-align: left;
  font-weight: 700;
  flex: 1;

  & > small {
    font-weight: 400;
    font-size: inherit;
    color: inherit;
  }
`;

export const ButtonLogout = styled.button`
  height: 100%;
  display: flex;
  align-items: flex-start;
  background-color: transparent;
  border: 0;
  appearance: none;
  cursor: pointer;
`;

export const LoadingIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  background-color: transparent;
  border: 0;
  appearance: none;
  cursor: pointer;
  margin-right: 15px;

  & svg {
    animation-duration: .1s;
  }
`;

export const ButtonSend = styled.button`
  width: 50px;
  background-color: #FFF;
  margin-left: 14px;
  border: 0;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
`;


export const Input = styled.textarea.attrs({
  autocomplete: 'off',
})`
  flex: 1;
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 3px;
  padding: 14px;
  color: #FFF;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  appearance: none;
  background-color: #000;
  text-transform: uppercase;
  transition: height .3s ease;
  resize: none;

  &:focus {
    height: 150px;
  }

  @media screen and (max-width: 768px) {
    height: 50px;
    font-size: 16px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
`;

export const Tabs = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  position: relative;

  ::before {
    content: '';
    width: calc(100% / ${ ({tabsCount}) => tabsCount });
    height: 2px;
    background-color: #FFF;
    bottom: 0;
    left: calc(calc(100% / ${ ({tabsCount}) => tabsCount }) * ${({tabActive}) => tabActive});
    position: absolute;
    transition: left .3s ease;
  }
`;

export const Tab = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 16px;
  font-weight: ${ ({isActive}) => isActive ? 700 : 400 };
  padding: 0 15px;
  position: relative;
`;