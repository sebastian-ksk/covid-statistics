import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ColumnInfo, MainContainer, TablePresentation } from './styles';

export const TableData = () => {
  const navigate = useNavigate();
  const { registers } = useSelector((state: any) => state.singCountry);

  return (
    <MainContainer>
      <TablePresentation>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Confirmados </th>
            <th>Fallecidos</th>
            <th>Recuperados</th>
          </tr>
        </thead>
        <tbody>
          {registers.map((register: any) => {
            return (
              <tr key={register.ID}>
                <ColumnInfo last={false}>{register?.Date}</ColumnInfo>
                <ColumnInfo last={false}> {register?.Confirmed}</ColumnInfo>
                <ColumnInfo last={false}> {register?.Deaths}</ColumnInfo>
                <ColumnInfo last={true}> {register?.Recovered}</ColumnInfo>
              </tr>
            );
          })}
        </tbody>
      </TablePresentation>
    </MainContainer>
  );
};
