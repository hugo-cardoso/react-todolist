import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 25px;
  color: #FFF;
  font-weight: 700;
  margin-bottom: 25px;
  text-transform: uppercase;
  text-align: center;

  & > small {
    font-weight: 400;
    font-size: inherit;
    color: inherit;
  }
`;

export const ButtonAuth = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  background-color: #F0002F;
  border: 0;
  cursor: pointer;
`;