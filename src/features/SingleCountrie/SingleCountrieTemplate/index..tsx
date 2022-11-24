import React from 'react';

import { Layout } from '../../Layout/index';
import { TableData } from '../components/TableData';
import { MainContainer, TableContainer, TitleContainer } from './styles';

export const SingleCountrieTemplate = () => {
  return (
    <Layout>
      <MainContainer>
        <TitleContainer>Colombia</TitleContainer>
        <TableContainer>
          <TableData />
        </TableContainer>
      </MainContainer>
    </Layout>
  );
};
