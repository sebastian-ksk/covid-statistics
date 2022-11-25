import React from 'react';
import { useSelector } from 'react-redux';

import { Layout } from '../../Layout/index';
import { TableData } from '../components/TableData';
import { MainContainer, TableContainer, TitleContainer } from './styles';

export const SingleCountrieTemplate = () => {
  const { country, registers } = useSelector((state: any) => state.singCountry);
  return (
    <Layout>
      <MainContainer>
        <TitleContainer>{country}</TitleContainer>
        <TableContainer>
          <TableData />
        </TableContainer>
      </MainContainer>
    </Layout>
  );
};
