import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  border: 1px solid #F0002F;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    border: 0;
  }

  @media screen and (min-width: 768px) {
    max-height: 700px;
    border-radius: 4px;
  }
`;