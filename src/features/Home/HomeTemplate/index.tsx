import React from 'react';
import { Layout } from '../../Layout/index';
import { GeneralDataCard } from './components/GeneralDataCard';
import { HomeContainer } from './styles';

export const HomeTemplate = () => {
  return (
    <Layout>
      <HomeContainer>
        <GeneralDataCard />
      </HomeContainer>
    </Layout>
  );
};
