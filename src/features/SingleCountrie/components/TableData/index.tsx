import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ColumnInfo, MainContainer, TablePresentation } from './styles';

export const TableData = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <TablePresentation>
        <tr>
          <th>Fecha</th>
          <th>Confirmados </th>
          <th>Fallecidos</th>
          <th>Recuperados</th>
        </tr>
        <tr>
          <ColumnInfo last={false}>2022-10-21</ColumnInfo>
          <ColumnInfo last={false}> 1000</ColumnInfo>
          <ColumnInfo last={false}> 1000</ColumnInfo>
          <ColumnInfo last={true}> 1000</ColumnInfo>
        </tr>
      </TablePresentation>
    </MainContainer>
  );
};
