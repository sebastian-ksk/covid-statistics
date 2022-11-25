import React from 'react';
import { ButtonContainer } from './styles';

type Props = {
  text: string;
  important: boolean;
  onClick: () => void;
};

export const ButtonMenu = ({ text, important, onClick }: Props) => {
  return (
    <ButtonContainer
      onClick={onClick}
      important={important}
    >
      {' '}
      {text}
    </ButtonContainer>
  );
};
