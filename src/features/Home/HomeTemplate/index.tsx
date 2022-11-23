import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../Layout/index';
import { ButtonMenu } from './components/ButtonMenu';
import { GeneralDataCard } from './components/GeneralDataCard';
import { HomeContainer, MenuContainer } from './styles';

export const HomeTemplate = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <HomeContainer>
        <GeneralDataCard />
        <MenuContainer>
          <ButtonMenu
            text='Todos Los Paises'
            important={false}
            onClick={() => navigate('countries')}
          />
          <ButtonMenu
            text='Sintomas'
            important={false}
            onClick={() => navigate('countries')}
          />
          <ButtonMenu
            text='Log Auth'
            important={true}
            onClick={() => navigate('countries')}
          />
        </MenuContainer>
      </HomeContainer>
    </Layout>
  );
};
