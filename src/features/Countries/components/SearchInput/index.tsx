import React from 'react';
import { ContainerInput, Inputtext } from './styles';
import { ImSearch } from 'react-icons/im';
type Props = {
  placeholder: string;

  onChange: (e: any) => void;
  width?: string;
  value: string;
};

export const SearchInput = ({
  width = '80%',
  placeholder,

  onChange,
  value,
}: Props) => {
  return (
    <ContainerInput whitdU={width}>
      <ImSearch
        size={15}
        color={'gray'}
        className='IconStyle'
        onClick={() => {}}
      />
      <Inputtext
        placeholder={placeholder}
        type={'text'}
        onChange={onChange}
        value={value}
      />
    </ContainerInput>
  );
};
