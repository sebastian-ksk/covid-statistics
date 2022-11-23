import styled from 'styled-components';

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 100%) {
    width: 100%;
  }
  @media (max-height: 100vh) {
    height: 100vh;
  }
  color: white;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-left: 2%;
  box-shadow: -5px 11px 18px -4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2%;
  /* border: solid 1px blue; */
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-left: 2%;
  box-shadow: -5px 11px 18px -4px rgba(0, 0, 0, 0.1);
`;
