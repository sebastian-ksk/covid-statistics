import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../Layout/index';
import { useHome } from '../../../hooks/useHome';
import { ButtonMenu } from '../components/ButtonMenu';
import { GeneralDataCard } from '../components/GeneralDataCard';
import { HomeContainer, MenuContainer } from './styles';

export const HomeTemplate = () => {
  const navigate = useNavigate();
  const { getGeneralData, getDataCountries } = useHome();
  useEffect(() => {
    const initialGetData = async () => {
      const resp = await getGeneralData();
    };
    initialGetData();
  }, []);

  const handleGoCountries = async () => {
    const resp = await getDataCountries();
    navigate('countries');
  };

  return (
    <Layout>
      <HomeContainer>
        <GeneralDataCard />
        <MenuContainer>
          <ButtonMenu
            text='Todos Los Paises'
            important={false}
            onClick={handleGoCountries}
          />
          <ButtonMenu
            text='Sintomas'
            important={false}
            onClick={() => navigate('/symptoms')}
          />
          <ButtonMenu
            text='Log Auth'
            important={true}
            onClick={handleGoCountries}
          />
        </MenuContainer>
      </HomeContainer>
    </Layout>
  );
};
