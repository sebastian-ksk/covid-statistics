import React, { useState } from 'react';
import { Layout } from '../../Layout/index';
import { SearchInput } from '../components/SearchInput';
import { TableData } from '../components/TableData';
import { MainContainer, SearchContainer, TableContainer } from './styles';

export const CountriesTemplate = () => {
  const [search, setSearch] = useState('');

  const handleChangeSearch = (e: any) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <Layout>
      <MainContainer>
        <SearchContainer>
          <SearchInput
            value={search}
            onChange={handleChangeSearch}
            placeholder='Buscar País'
            width='80%'
          />
        </SearchContainer>
        <TableContainer>
          <TableData />
        </TableContainer>
      </MainContainer>
    </Layout>
  );
};
