import React from 'react';
import { Layout } from '../../Layout/index';
import { ButtonMenu } from './components/ButtonMenu';
import { GeneralDataCard } from './components/GeneralDataCard';
import { HomeContainer, MenuContainer } from './styles';

export const HomeTemplate = () => {
  return (
    <Layout>
      <HomeContainer>
        <GeneralDataCard />
        <MenuContainer>
          <ButtonMenu
            text='Todos Los Paises'
            important={false}
          />
          <ButtonMenu
            text='Sintomas'
            important={false}
          />
          <ButtonMenu
            text='Log Auth'
            important={true}
          />
        </MenuContainer>
      </HomeContainer>
    </Layout>
  );
};
