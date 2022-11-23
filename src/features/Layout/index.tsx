import React from 'react';
import { Navbar, NavbarText } from 'reactstrap';
import { BodyContainer, HeaderContainer, MainContainer } from './styles';

import { CiUser, CiLogout } from 'react-icons/ci';

type Props = {
  children?: JSX.Element[] | JSX.Element | string;
};
export const Layout = ({ children }: Props) => {
  return (
    <MainContainer>
      <HeaderContainer>
        <CiLogout
          size={20}
          color={'red'}
          className='IconStyle'
          onClick={() => {}}
        />
      </HeaderContainer>
      <BodyContainer>{children}</BodyContainer>
    </MainContainer>
  );
};
