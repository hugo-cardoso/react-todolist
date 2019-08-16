import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #000;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Placeholder = styled.div`
  width: 100%;
  min-height: 150px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;