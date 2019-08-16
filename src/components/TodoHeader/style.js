import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px;
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
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: #FFF;
  font-size: 20px;
  text-align: left;
  font-weight: 700;
  margin-bottom: 15px;

  & > small {
    font-weight: 400;
    font-size: inherit;
    color: inherit;
  }
`;

export const ButtonLogout = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  appearance: none;
  cursor: pointer;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 3px;
  padding: 0 15px;
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  appearance: none;
  background-color: #000;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    height: 50px;
    font-size: 16px;
  }
`;