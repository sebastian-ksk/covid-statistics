import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  CardNameCountrie,
  ColumnInfo,
  MainContainer,
  TablePresentation,
} from './styles';
import { useHome } from '../../../../hooks/useHome';

export const TableData = () => {
  const navigate = useNavigate();
  const { getCountryRegisters } = useHome();
  const { dataCountries } = useSelector((state: any) => state.countries);

  const handleSelectCountry = async (country: string) => {
    await getCountryRegisters(country);
    navigate('/singleCountrie');
  };

  return (
    <MainContainer>
      <TablePresentation>
        <thead>
          <tr>
            <th>País</th>
            <th>Confirmados </th>
            <th>Fallecidos</th>
            <th>Recuperados</th>
          </tr>
        </thead>
        <tbody>
          {dataCountries?.map((country: any) => {
            return (
              <tr key={country?.Id}>
                <ColumnInfo last={false}>
                  <CardNameCountrie
                    onClick={() => handleSelectCountry(country?.Country)}
                  >
                    {country.Country}
                  </CardNameCountrie>
                </ColumnInfo>
                <ColumnInfo last={false}> {country?.TotalConfirmed}</ColumnInfo>
                <ColumnInfo last={false}>{country?.TotalDeaths}</ColumnInfo>
                <ColumnInfo last={true}>{country?.TotalRecovered}</ColumnInfo>
              </tr>
            );
          })}
        </tbody>
      </TablePresentation>
    </MainContainer>
  );
};
