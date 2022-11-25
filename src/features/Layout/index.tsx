import React from 'react';
import { BodyContainer, HeaderContainer, MainContainer } from './styles';
import { CiLogout } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

type Props = {
  children?: JSX.Element[] | JSX.Element | string;
};
export const Layout = ({ children }: Props) => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <HeaderContainer>
        <CiLogout
          size={20}
          color={'red'}
          className='IconStyle'
          onClick={() => navigate('/')}
        />
      </HeaderContainer>
      <BodyContainer>{children}</BodyContainer>
    </MainContainer>
  );
};
