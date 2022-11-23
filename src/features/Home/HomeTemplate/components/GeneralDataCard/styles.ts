import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid gray; */
  width: 70%;
  border-radius: 20px;
  min-height: 150px;
  box-shadow: -17px 23px 61px 27px rgba(0, 0, 0, 0.1);
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid gray; */
  width: 100%;
  height: 30%;
  h1 {
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blue};
  }
  h2 {
    font-weight: 300;
    font-size: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.green};
  }
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
`;

export const TablePresentation = styled.table`
  width: 100%;
  height: 100%;
  /* border: 2px solid blue; */
  tr {
    width: 100%;
  }
  th {
    height: 30%;
    background-color: rgb(76, 191, 166, 0.1);
    font-weight: 300;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

type PropsTd = {
  last: boolean;
};
export const ColumnInfo = styled.td<PropsTd>`
  font-weight: 300;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  border-right: ${({ last }) => (last ? 'none' : '1px solid gray')};
  color: ${({ theme }) => theme.colors.blue};
`;

export const PlusNumber = styled.div`
  width: 70%;
  height: 20px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.red};
`;
