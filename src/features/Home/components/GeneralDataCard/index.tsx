import React from 'react';
import { useSelector } from 'react-redux';
import {
  CardContainer,
  ColumnInfo,
  DataContainer,
  PlusNumber,
  TablePresentation,
  TitlesContainer,
} from './styles';

export const GeneralDataCard = () => {
  const {
    totalConfirmed,
    lastConfirmed,
    totalDeath,
    lastDeath,
    totalRecovered,
    lastRecovered,
  } = useSelector((state: any) => state.home);

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
              {new Intl.NumberFormat('es-MX').format(totalConfirmed)}
              <PlusNumber>
                + {new Intl.NumberFormat('es-MX').format(lastConfirmed)}
              </PlusNumber>
            </ColumnInfo>
            <ColumnInfo last={false}>
              {new Intl.NumberFormat('es-MX').format(totalDeath)}
              <PlusNumber>
                + {new Intl.NumberFormat('es-MX').format(lastDeath)}
              </PlusNumber>
            </ColumnInfo>
            <ColumnInfo last={true}>
              {new Intl.NumberFormat('es-MX').format(totalRecovered)}
              <PlusNumber>
                + {new Intl.NumberFormat('es-MX').format(lastRecovered)}
              </PlusNumber>
            </ColumnInfo>
          </tr>
        </TablePresentation>
      </DataContainer>
    </CardContainer>
  );
};
