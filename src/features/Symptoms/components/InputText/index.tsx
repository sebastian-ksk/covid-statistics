import React from 'react';
import { ContainerInput, Inputtext } from './styles';
import { CiUser, CiLock } from 'react-icons/ci';

type Props = {
  placeholder: string;
  type: string;
  name: string;
  onChange: (e: any) => void;
  width?: string;
  value: string;
};

export const InputText = ({
  width = '80%',
  placeholder,
  type,
  onChange,
  value,
  name,
}: Props) => {
  return (
    <ContainerInput whitdU={width}>
      <Inputtext
        state={true}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
    </ContainerInput>
  );
};
