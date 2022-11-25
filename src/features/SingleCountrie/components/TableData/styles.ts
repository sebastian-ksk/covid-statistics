import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 80vh;
  padding: 4px 4px;
  overflow-y: scroll;
  border-radius: 10px;
  box-shadow: -53px 46px 82px -21px rgba(0, 0, 0, 0.1);
`;

export const TablePresentation = styled.table`
  width: 100%;
  tr {
    border-top: 1px solid gray;
    width: 100%;
  }
  th {
    height: 55px;
    min-height: 50px;
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
  height: 40px;
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
