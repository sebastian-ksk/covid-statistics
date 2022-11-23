import React from 'react';
import {
  CardContainer,
  ColumnInfo,
  DataContainer,
  PlusNumber,
  TablePresentation,
  TitlesContainer,
} from './styles';

export const GeneralDataCard = () => {
  return (
    <CardContainer>
      <TitlesContainer>
        <h1>Casos Globales</h1>
        <h2>Actualizado el 26 de ene. a las 9:03 horas</h2>
      </TitlesContainer>
      <DataContainer>
        <TablePresentation>
          <tr>
            <th>Confirmados</th>
            <th>Fallecidos</th>
            <th>Recuperados</th>
          </tr>
          <tr>
            <ColumnInfo last={false}>
              354.956.437
              <PlusNumber>+5.2845</PlusNumber>
            </ColumnInfo>
            <ColumnInfo last={false}>
              354.956.437
              <PlusNumber>+5.2845</PlusNumber>
            </ColumnInfo>
            <ColumnInfo last={true}>
              354.956.437
              <PlusNumber>+5.2845</PlusNumber>
            </ColumnInfo>
          </tr>
        </TablePresentation>
      </DataContainer>
    </CardContainer>
  );
};
