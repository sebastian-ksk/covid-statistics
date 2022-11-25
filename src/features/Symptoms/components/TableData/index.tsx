import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ColumnInfo, MainContainer, TablePresentation } from './styles';
import { SymptomsPage } from '../../../../pages/SymptomsPage/index';

export const TableData = () => {
  const { registers } = useSelector((state: any) => state.symptoms);
  return (
    <MainContainer>
      <TablePresentation>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido </th>
            <th>Temperatura</th>
            <th>Tos</th>
            <th>Fiebre</th>
            <th>Dolor de Cabeza</th>
          </tr>
        </thead>
        <tbody>
          {registers.map((symptom: any) => {
            return (
              <tr>
                <ColumnInfo last={false}>{symptom?.name}</ColumnInfo>
                <ColumnInfo last={false}>{symptom?.lastName}</ColumnInfo>
                <ColumnInfo last={false}> {symptom?.temp}</ColumnInfo>
                {symptom?.symptoms.map((item: any, index: number) => {
                  return (
                    <ColumnInfo
                      last={index === symptom?.symptoms.length - 1 && true}
                    >
                      {item.value ? 'Yes' : 'No'}
                    </ColumnInfo>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </TablePresentation>
    </MainContainer>
  );
};
