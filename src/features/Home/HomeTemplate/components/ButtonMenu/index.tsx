import React from 'react';
import { ButtonContainer } from './styles';

type Props = {
  text: string;
  important: boolean;
};

export const ButtonMenu = ({ text, important }: Props) => {
  return <ButtonContainer important={important}> {text}</ButtonContainer>;
};
