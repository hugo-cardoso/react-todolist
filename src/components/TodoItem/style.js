import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: initial;
`;

export const Text = styled.p`
  color: #FFF;
  font-weight: 700;
  font-size: 16px;
  position: relative;
  overflow: initial;
  padding: 0 5px;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ::after {
    content: '';
    width: 0;
    height: 3px;
    background-color: #F0002F;
    position: absolute;
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
    transition: width .3s ease;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 50px;
  min-height: 50px;
  border-bottom: 1px solid #FFF;
  background-color: #000;
  opacity: 0;
  transform: translateX(-35px);
  animation-timing-function: ease;
  animation-name: enterLeftAnimation;
  animation-duration: .3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  ${ ({checked}) => checked && `
      & ${ Text } {
        ::after {
          content: '';
          width: calc(100% + 10px);
        }
      }
  ` };
  ${
    () => {
      let styles = ``;
      for (let i = 1; i < 20; i += 1) {
        styles += `
          :nth-child(${i}) {animation-delay: ${i}20ms;}
        `
      }
      return styles;
    }
  }

  :last-child {border-bottom: 0;}
`;

export const ActionWrapper = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

