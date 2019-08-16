import styled, { keyframes } from 'styled-components';

const enterLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-35px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;


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
  animation: ${ enterLeft } .5s ease;
  ${ ({checked}) => checked && `
      & ${ Text } {
        ::after {
          content: '';
          width: calc(100% + 10px);
        }
      }
  ` };

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

