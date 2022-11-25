import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 80%;
  height: 70vh;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

export const ButtonContainer = styled.div`
  width: 99%;
  height: 10%;
  display: flex;
  flex-wrap: wrap;
  column-count: 2;
  align-items: center;
  justify-content: center;
  color: black;
  /* border: 1px solid blue; */
`;

export const ButtonAdd = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  font-weight: 700;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  /* border: 1px solid blue; */
`;

export const TableContainer = styled.div`
  width: 99%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  column-count: 2;
  /* border: 1px solid blue; */
`;
