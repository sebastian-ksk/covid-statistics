import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardNameCountrie,
  ColumnInfo,
  MainContainer,
  TablePresentation,
} from './styles';

export const TableData = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <TablePresentation>
        <tr>
          <th>País</th>
          <th>Confirmados </th>
          <th>Fallecidos</th>
          <th>Recuperados</th>
        </tr>
        <tr>
          <ColumnInfo last={false}>
            <CardNameCountrie onClick={() => navigate('/singleCountrie')}>
              Colombia
            </CardNameCountrie>
          </ColumnInfo>
          <ColumnInfo last={false}> 1000</ColumnInfo>
          <ColumnInfo last={false}> 1000</ColumnInfo>
          <ColumnInfo last={true}> 1000</ColumnInfo>
        </tr>
        <tr>
          <ColumnInfo last={false}> Colombia</ColumnInfo>
          <ColumnInfo last={false}> 1000</ColumnInfo>
          <ColumnInfo last={false}> 1000</ColumnInfo>
          <ColumnInfo last={true}> 1000</ColumnInfo>
        </tr>
        <tr>
          <ColumnInfo last={false}> Colombia</ColumnInfo>
          <ColumnInfo last={false}> 1000</ColumnInfo>
          <ColumnInfo last={false}> 1000</ColumnInfo>
          <ColumnInfo last={true}> 1000</ColumnInfo>
        </tr>
        <tr>
          <ColumnInfo last={false}> Colombia</ColumnInfo>
          <ColumnInfo last={false}> 1000</ColumnInfo>
          <ColumnInfo last={false}> 1000</ColumnInfo>
          <ColumnInfo last={true}> 1000</ColumnInfo>
        </tr>
      </TablePresentation>
    </MainContainer>
  );
};
