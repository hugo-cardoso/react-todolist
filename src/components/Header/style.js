import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #CFD8DC;
  
  @media screen and (min-width: 768px) {
    flex: 0 0;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: #455A64;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #B0BEC5;
  border-radius: 3px;
  padding: 0 10px;
  color: #616161;
  font-size: 13px;
  font-weight: 500;
  appearance: none;

  @media screen and (max-width: 768px) {
    height: 40px;
    font-size: 16px;
  }
`;