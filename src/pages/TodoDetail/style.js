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

export const Toolbar = styled.div`
  width: 100%;
  height: 54px;
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
  background-color: #F0002F;
`;

export const ToolbarActionWrapper = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ToolbarContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const ToolbarTitle = styled.h1`
  color: #FFF;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Content = styled.div`
  padding: 14px;
  background-color: #000;
  color: #FFF;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  white-space: pre-line;
`;

export const ContentDate = styled.p`
  display: block;
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 300;
  color: #FFF;
  letter-spacing: .01rem;
`;

export const FloatButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #F0002F;
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
