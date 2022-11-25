import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 70%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid blue; */
  color: black;
`;

export const MenuContainer = styled.div`
  margin-top: 2%;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  column-count: 2;
  align-items: center;
  justify-content: space-between;

  color: black;
  /* border: 1px solid blue; */
`;

export const CardPresentation = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-radius: 20px;
  min-height: 50px;
  box-shadow: -17px 23px 61px 27px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  margin-top: 20px;
`;
