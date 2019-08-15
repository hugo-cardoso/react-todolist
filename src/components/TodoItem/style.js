import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 50px;
  min-height: 50px;
  border-bottom: 1px solid #EEEEEE;
  background-color: #FFF;
  ${ ({checked}) => checked && `
      > * {
        opacity: .5;
      }
  ` };

  :first-child {border-top: 0;}
`;

export const ActionWrapper = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
`;